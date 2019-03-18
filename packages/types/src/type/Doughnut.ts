import { Struct, Option, Vector, Tuple } from '../codec';
import { AccountId } from '@polkadot/types/index';
import U64 from '../primitive/U64';
import U32 from '../primitive/U32';
import { Signature } from '.';
import { Constructor } from '../types';
import { Text } from '../primitive';

export class Certificate extends Struct {
  constructor (value?: any) {
    super({
      expires: U64,
      version: U32,
      holder: AccountId,
      not_before: U64,
      permissions: Vector.with(Tuple.with([Text, Text])),
      issuer: AccountId
    }, value);
  }
}

export class Doughnut extends Struct {
  constructor (value?: any) {
    super({
      certificate: Certificate,
      signature: Signature
    }, value);
  }
}

export const OptionDoughnut: Constructor<Option<Doughnut>> = Option.with(Doughnut);
