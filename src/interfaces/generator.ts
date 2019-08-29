import { ClaimTopic, GeneratedClaim } from './claim';

export interface GenerationOptions {
  specificID?: number;
  issuer?: Address;
  identity?: Address;
}

export interface InputType {}

/**
 * Interface to be implemented by claim topic handlers.
 * Define the type of the claim topic handled as `Generator<topic>`
 */
export abstract class Generator<Topic extends ClaimTopic = {}> {
  static readonly topic: number;
  static readonly scheme: number;
  static readonly topicName: string;

  abstract generate({ inputData, options }: { inputData: InputType, options?: GenerationOptions }): Promise<GeneratedClaim<Topic>>;

  abstract validateInput({ inputData }: { inputData: InputType }): Promise<InputType>;
}
