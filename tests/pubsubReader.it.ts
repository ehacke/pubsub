import { PubSub } from '@google-cloud/pubsub';
import { expect } from 'chai';
import { config } from 'dotenv';
import getenv from 'getenv';
import { DateTime } from 'luxon';
import * as uuid from 'uuid';

import { PubsubReader } from '../src/pubsubReader';
import { TestClass } from "./testClass";

config();

getenv('PUBSUB_EMULATOR_HOST');

const pubsub = new PubSub({ projectId: 'project-test' });
const topicName = `test-${uuid.v4()}`;
const subName = `test-${uuid.v4()}`;

describe('pubsub reader integration', () => {
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

  it('reads message from pubsub', async () => {
    const pubsubReader = new PubsubReader<TestClass>({ pubsub }, { topicName, subscriptionName: subName }, TestClass.fromJSON);

    let resolveMessage;
    const getMessage = new Promise((resolve) => {
      resolveMessage = resolve;
    });

    const processMessage = async (testResult) => {
      resolveMessage(testResult);
    };

    await pubsubReader.open(processMessage);

    const curDate = DateTime.fromISO('2018-01-01T00:00:00.000Z').toJSDate();

    const input = new TestClass({
      thing: 'project-id',
      createdAt: curDate,
    });

    await pubsub.topic(topicName).publishJSON(input);

    const testResult = await getMessage;

    expect(testResult).to.eql(input);
  });
});
