import { ClaimTopic, GeneratedClaim, ParsedClaim, UnparsedClaim } from '../interfaces/claim';
import { ParseOptions, Parser } from '../interfaces/parser';
import { GenerationOptions, Generator } from '../interfaces/generator';
import { Handler } from '../interfaces/handler';

export class KycClaimTopic implements ClaimTopic {
  static readonly scheme = 1;
  static readonly topic = 1010101;
  static readonly specific = true;
}

export interface KycClaimHandler extends Handler<KycClaimTopic> { }
export class KycClaimHandler implements Handler<KycClaimTopic> {
  static readonly scheme = KycClaimTopic.scheme;
  static readonly topic = KycClaimTopic.topic;

  static async parse({ claim, options = {} }: { claim: UnparsedClaim<KycClaimTopic>; options?: ParseOptions }): Promise<ParsedClaim<KycClaimTopic>> {
    return {
      topic: 1010101,
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
      topic: 1010101,
      data: "",
      uri: "",
      issuer: "",
      scheme: 9,
      privateData: {},
      publicData: {},
    };
  }
}
