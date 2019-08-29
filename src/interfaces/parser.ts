import { ClaimTopic, ParsedClaim, UnparsedClaim } from './claim';

export interface ParseOptions {

}

/**
 * Interface to be implemented by claim topic handlers.
 * Define the type of the claim topic handled as `Parser<topic>`
 */
export abstract class Parser<Topic extends ClaimTopic = {}> {
  static readonly topic: number;
  static readonly scheme: number;
  static readonly topicName: string;

  /**
   * Parse a claim that is known to be of the topic supported by the parser
   * @param claim
   * @param options
   * @throws InvalidClaimTopicError
   * @throws InvalidClaimError
   */
  abstract parse({ claim, options }: { claim: UnparsedClaim<Topic>; options?: ParseOptions }): Promise<ParsedClaim<Topic>>;
}
