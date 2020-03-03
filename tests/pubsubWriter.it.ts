import { PubSub } from '@google-cloud/pubsub';
import { expect } from 'chai';
import { config } from 'dotenv';
import getenv from 'getenv';
import * as uuid from 'uuid';

import { PubsubWriter } from '../src/pubsubWriter';
import { TestClass } from "./testClass";
import { DateTime } from "luxon";

config();

getenv('PUBSUB_EMULATOR_HOST');

const pubsub = new PubSub({ projectId: 'project-test' });
const topicName = `test-${uuid.v4()}`;
const subName = `test-${uuid.v4()}`;

describe('pubsub writer integration', () => {
  beforeEach(async () => {
    if (
      await pubsub
        .topic(topicName)
        .exists()
        .then(([exists]) => exists)
    ) {
      await pubsub.topic(topicName).delete();
    }
  });

  it('writes message to pubsub', async () => {
    const pubsubWriter = new PubsubWriter<TestClass>({ pubsub }, { topicName });

    await pubsubWriter.open();

    const [topic] = await pubsub.topic(topicName).get({ autoCreate: true });
    const [subscription] = await topic.subscription(subName).get({ autoCreate: true });

    const gotMessage = new Promise((resolve) => {
      subscription.on('message', (message) => {
        resolve(TestClass.fromJSON(JSON.parse(message.data.toString())));
      });
    });

    const curDate = DateTime.fromISO('2018-01-01T00:00:00.000Z').toJSDate();
    const testClass = new TestClass({ thing: 'foo', createdAt: curDate });

    await pubsubWriter.write(testClass);
    const message = await gotMessage;
    expect(message).to.eql(testClass);
  });
});
