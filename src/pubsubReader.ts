import { Message, PubSub, Subscription } from '@google-cloud/pubsub';
import Bluebird from 'bluebird';

import log from './logger';

interface ServicesInterface {
  pubsub: PubSub;
}

interface ConfigInterface {
  topicName: string;
  subscriptionName: string;
}

/**
 * @class
 */
export class PubsubReader<T extends object> {
  private readonly services: ServicesInterface;

  private readonly config: ConfigInterface;

  private subscription: Subscription | null = null;

  private fromJson: (input: object) => T;

  /**
   * @param {ServicesInterface} services
   * @param {ConfigInterface} config
   * @param {function} fromJson
   */
  constructor(services: ServicesInterface, config: ConfigInterface, fromJson: (input: object) => T) {
    this.services = services;
    this.config = config;
    this.fromJson = fromJson;
  }

  /**
   * Internal message processor
   * @param {function} processMsg
   * @returns {function}
   */
  private internalMessageProcessor = (processMsg: (message: T) => Promise<any>) => async (message: Message): Promise<void> => {
    try {
      const testResult = this.fromJson(JSON.parse(message.data.toString()));
      await Bluebird.try(() => processMsg(testResult));
      await message.ack();
    } catch (error) {
      log.error(`Error while processing message: ${error.message}`);
      await message.nack();
    }
  };

  /**
   * Error handler
   * @param {Error} error
   * @returns {function}
   */
  static errorHandler = (error): void => log.error(`Error with subscription: ${error.message}`);

  /**
   * Open connection
   * @param {function} processMsg
   * @returns {Promise<void>}
   */
  async open(processMsg: (message: T) => Promise<any>): Promise<void> {
    const [topic] = await this.services.pubsub.topic(this.config.topicName).get({ autoCreate: true });
    const [subscription] = await topic.subscription(this.config.subscriptionName).get({ autoCreate: true });

    subscription.on('message', this.internalMessageProcessor(processMsg));
    subscription.on('error', PubsubReader.errorHandler);

    this.subscription = subscription;
  }

  /**
   * Close connection
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    await this.subscription?.removeAllListeners();
  }
}
