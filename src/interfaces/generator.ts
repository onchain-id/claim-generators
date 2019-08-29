import { ClaimTopic, GeneratedClaim } from './claim';

export interface GenerationOptions {
  specificID?: number;
  issuer?: Address;
  identity?: Address;
}

/**
 * Interface to be implemented by claim topic handlers.
 * Define the type of the claim topic handled as `Generator<topic>`
 */
export interface Generator<Topic extends ClaimTopic = {}> {
  readonly topic: number;
  readonly scheme: number;

  generate({ inputData, options }: { inputData: any, options?: GenerationOptions }): Promise<GeneratedClaim<Topic>>;
}
