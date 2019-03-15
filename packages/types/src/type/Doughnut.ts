import { Struct, U8a } from "../codec";
import { AccountId, Text } from '@polkadot/types/index';
import U64 from '../primitive/U64';
import U32 from "../primitive/U32";
import { Signature } from ".";

export class Certificate extends Struct {
  constructor (value?: any) {
    super({
      expires: U64,
      version: U32,
      holder: AccountId,
      not_before: U64,
      permissions: Text,
      issuer: AccountId,
    }, value);
  }
}

export class Doughnut extends Struct {
    constructor (value?: any) {
        super({
          certificate: Certificate,
          signature: Signature,
          compact: U8a,
        }, value);
      }
}