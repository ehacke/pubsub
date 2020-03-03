import { PubSub, Topic } from '@google-cloud/pubsub';

interface ServicesInterface {
  pubsub: PubSub;
}

interface ConfigInterface {
  topicName: string;
}

/**
 * @class
 */
export class PubsubWriter<T extends object> {
  private readonly services: ServicesInterface;

  private readonly config: ConfigInterface;

  private topic: Topic | null = null;

  /**
   * @param {ServicesInterface} services
   * @param {ConfigInterface} config
   */
  constructor(services: ServicesInterface, config: ConfigInterface) {
    this.services = services;
    this.config = config;
  }

  /**
   * Open and create topic if necessary
   * @returns {Promise<void>}
   */
  async open(): Promise<void> {
    const [topic] = await this.services.pubsub.topic(this.config.topicName).get({ autoCreate: true });
    this.topic = topic;
  }

  /**
   * Write to topic
   * @param {T} messageObject
   * @returns {Promise<void>}
   */
  async write(messageObject: T): Promise<void> {
    if (!this.topic) {
      throw new Error('pubsubWriter is not ready');
    }

    await this.topic?.publishJSON(messageObject);
  }
}
