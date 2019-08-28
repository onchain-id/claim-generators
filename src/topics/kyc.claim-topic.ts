import { ClaimTopic, GeneratedClaim, ParsedClaim, UnparsedClaim } from '../claim';
import { ParseOptions, Parser } from '../parser';
import { GenerationOptions, Generator } from '../generator';
import { Handler } from '../handler';

export class KycClaimTopic implements ClaimTopic {
  static readonly scheme = 10;
  static readonly topic = 12;
  static readonly specific = true;
}

export interface KycClaimHandler extends Handler<KycClaimTopic> { }
export class KycClaimHandler implements Handler<KycClaimTopic> {
  static readonly scheme = KycClaimTopic.scheme;
  static readonly topic = KycClaimTopic.topic;

  static async parse({ claim, options = {} }: { claim: UnparsedClaim<KycClaimTopic>; options?: ParseOptions }): Promise<ParsedClaim<KycClaimTopic>> {
    return {
      topic: 10,
      data: "",
      uri: "",
      issuer: "",
      scheme: 9,
      signature: "",
      parsedData: {},
    };
  }

  static async generate({ inputData, options = {} }: { inputData: any; options?: GenerationOptions }): Promise<GeneratedClaim<KycClaimTopic>> {
    return {
      topic: 10,
      data: "",
      uri: "",
      issuer: "",
      scheme: 9,
      privateData: {},
      publicData: {},
    };
  }
}
