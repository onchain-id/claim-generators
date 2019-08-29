import { ClaimTopic, GeneratedClaim, ParsedClaim, UnparsedClaim } from '../interfaces/claim';
import { ParseOptions, Parser } from '../interfaces/parser';
import { GenerationOptions, Generator, InputType } from '../interfaces/generator';
import { Handler } from '../interfaces/handler';
import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { transformAndValidate } from 'class-transformer-validator';
import {sha256} from "ethers/utils";
import { toHex } from '../utils';

export class KycClaimTopic implements ClaimTopic {
  static readonly scheme = 1;
  static readonly topic = 1010101;
  static readonly specific = true;
  static readonly topicName = 'KYC';
  static readonly inputType = {};
}

class KycClaimInputData implements InputType {
  @IsNotEmpty()
  details!: { [key: string]: any };

  @IsString()
  status!: string;

  @IsDateString()
  date!: string;
}

export interface KycClaimHandler extends Handler<KycClaimTopic> { }
export abstract class KycClaimHandler implements Handler<KycClaimTopic> {
  static readonly scheme = KycClaimTopic.scheme;
  static readonly topic = KycClaimTopic.topic;
  static readonly topicName = KycClaimTopic.topicName;
  static readonly inputType = KycClaimTopic.inputType;

  static async parse({ claim, options = {} }: { claim: UnparsedClaim<KycClaimTopic>; options?: ParseOptions }): Promise<ParsedClaim<KycClaimTopic>> {
    if(claim.topic !== KycClaimTopic.topic) {
      throw new Error('Claim is not of this parser topic.');
    }

    if(claim.scheme !== KycClaimTopic.scheme) {
      throw new Error('Claim is not of this parser scheme.');
    }

    return {
      topic: claim.topic,
      data: claim.data,
      uri: claim.uri,
      issuer: claim.issuer,
      scheme: claim.scheme,
      signature: claim.signature,
      parsedData: {},
    };
  }

  static async generate({ inputData, options = {} }: { inputData: KycClaimInputData; options?: GenerationOptions }): Promise<GeneratedClaim<KycClaimTopic>> {
    const validatedInputData = await KycClaimHandler.validateInput({ inputData });

    return {
      topic: KycClaimTopic.topic,
      data: sha256(toHex(JSON.stringify(inputData))),
      uri: '',
      issuer: options.issuer,
      scheme: KycClaimTopic.scheme,
      privateData: inputData,
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
