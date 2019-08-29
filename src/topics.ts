import { Handler } from './interfaces/handler';
import { KycClaimHandler } from './handlers/kyc.claim-topic';

export const topics: { [topic: number]: Handler } = {
  1010101: KycClaimHandler,
};

export function getTopicHandler(topic: number): Handler {
  const handler = topics[topic];

  if (!handler) {
    throw new Error('No handler for this topic.');
  }

  return handler;
}
