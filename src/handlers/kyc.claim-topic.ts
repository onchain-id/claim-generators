import { ClaimTopic, GeneratedClaim, ParsedClaim, UnparsedClaim } from '../interfaces/claim';
import { ParseOptions, Parser } from '../interfaces/parser';
import { GenerationOptions, Generator, InputType } from '../interfaces/generator';
import { Handler } from '../interfaces/handler';
import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { transformAndValidate } from 'class-transformer-validator';

export class KycClaimTopic implements ClaimTopic {
  static readonly scheme = 1;
  static readonly topic = 1010101;
  static readonly specific = true;
  static readonly topicName = 'KYC';
  static readonly inputType = {};
}

class KycClaimInputData implements InputType {
  @IsNotEmpty()
  details?: { [key: string]: any };

  @IsString()
  status?: string;

  @IsDateString()
  date?: string;
}

export interface KycClaimHandler extends Handler<KycClaimTopic> { }
export abstract class KycClaimHandler implements Handler<KycClaimTopic> {
  static readonly scheme = KycClaimTopic.scheme;
  static readonly topic = KycClaimTopic.topic;
  static readonly topicName = KycClaimTopic.topicName;
  static readonly inputType = KycClaimTopic.inputType;

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

  static async generate({ inputData, options = {} }: { inputData: KycClaimInputData; options?: GenerationOptions }): Promise<GeneratedClaim<KycClaimTopic>> {
    const validatedInputData = await KycClaimHandler.validateInput({ inputData });

    return {
      topic: 1010101,
      data: "",
      uri: "",
      issuer: options.issuer,
      scheme: 9,
      privateData: {},
      publicData: {},
    };
  }

  static async validateInput({ inputData }: { inputData: KycClaimInputData }): Promise<KycClaimInputData> {
    if (!inputData) {
      throw new Error('inputData must be provided for generator.');
    }

    return transformAndValidate<KycClaimInputData>(KycClaimInputData, inputData);
  }
}
