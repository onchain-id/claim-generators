import {arrayify, hexlify, toUtf8Bytes} from "ethers/utils";

export function toHex(message: string): string {
  return hexlify(toUtf8Bytes(message));
}

export default { arrayify, toHex };
