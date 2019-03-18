// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a, ArgsDef, Codec, IExtrinsic, SignatureOptions } from '../types';
import { Option } from '../index';
import { isHex, isU8a, u8aToHex, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import { FunctionMetadata } from '../Metadata/v0/Modules';
import Method from '../primitive/Method';
import Address from './Address';
import ExtrinsicSignature from './ExtrinsicSignature';
import Hash from './Hash';
import { Doughnut, OptionDoughnut } from './Doughnut';

type ExtrinsicValue = {
  method?: Method
  signature?: ExtrinsicSignature
  doughnut?: Option<Doughnut>
};

/**
 * @name Extrinsic
 * @description
 * Representation of an Extrinsic in the system. It contains the actual call,
 * (optional) signature and encodes with an actual length prefix
 *
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 *
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class Extrinsic extends Struct implements IExtrinsic {
  constructor (value?: ExtrinsicValue | AnyU8a | Method) {
    super(...Extrinsic.decodeExtrinsic(value || {}));
  }

  static decodeExtrinsic (value: ExtrinsicValue | AnyU8a | Method): [any, ExtrinsicValue | Array<number> | Uint8Array] {
    let defWithDoughnut = {
      signature: ExtrinsicSignature,
      doughnut: OptionDoughnut,
      method: Method
    };
    let defWithoutDoughnut = {
      signature: ExtrinsicSignature,
      method: Method
    };

    if (Array.isArray(value) || isHex(value)) {
      // Instead of the block below, it should simply be:
      // return Extrinsic.decodeExtrinsic(hexToU8a(value as string));
      const u8a = u8aToU8a(value);

      // HACK 11 Jan 2019 - before https://github.com/paritytech/substrate/pull/1388
      // extrinsics didn't have the length, cater for both approaches
      const [offset, length] = Compact.decodeU8a(u8a);
      const withPrefix = u8a.length === (offset + length.toNumber());

      return Extrinsic.decodeExtrinsic(
        withPrefix
          ? u8a
          : Compact.addLengthPrefix(u8a)
      );
    } else if (isU8a(value)) {
      const [offset, length] = Compact.decodeU8a(value);

      let arr = value.subarray(offset, offset + length.toNumber());
      let withDoughnut = arr[0] & 0b01000000;
      if (withDoughnut) {
        return [defWithDoughnut, arr];
      } else {
        return [defWithoutDoughnut, arr];
      }
    } else if (value instanceof Method) {
      return [defWithoutDoughnut, {
        method: value
      }];
    }

    if (value.doughnut && value.doughnut.isSome) {
      return [defWithDoughnut, value];
    } else {
      return [defWithoutDoughnut, value];
    }
  }

  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Method]]
   */
  get args (): Array<Codec> {
    return this.method.args;
  }

  /**
   * @description Thge argument defintions, compatible with [[Method]]
   */
  get argsDef (): ArgsDef {
    return this.method.argsDef;
  }

  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Method
   */
  get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  /**
   * @description The actual data for the Method
   */
  get data (): Uint8Array {
    return this.method.data;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    const length = this.length;

    return length + Compact.encodeU8a(length).length;
  }

  /**
   * @description Convernience function, encodes the extrinsic and returns the actual hash
   */
  get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  /**
   * @description `true` is method has `Origin` argument (compatibility with [[Method]])
   */
  get hasOrigin (): boolean {
    return this.method.hasOrigin;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  get isSigned (): boolean {
    return this.signature.isSigned;
  }

  /**
   * @description The length of the encoded value
   */
  get length (): number {
    return this.toU8a(true).length;
  }

  /**
   * @description The [[FunctionMetadata]] that describes the extrinsic
   */
  get meta (): FunctionMetadata {
    return this.method.meta;
  }

  /**
   * @description The [[Method]] this extrinsic wraps
   */
  get method (): Method {
    return this.get('method') as Method;
  }

  /**
   * @description The [[ExtrinsicSignature]]
   */
  get signature (): ExtrinsicSignature {
    return this.get('signature') as ExtrinsicSignature;
  }

  get doughnut (): Option<Doughnut> {
    return (this.get('doughnut') || new OptionDoughnut()) as Option<Doughnut>;
  }

  /**
   * @description Add an [[ExtrinsicSignature]] to the extrinsic (already generated)
   */
  addSignature (signer: Address | Uint8Array, signature: Uint8Array, nonce: AnyNumber, era?: Uint8Array, doughnut?: Option<Doughnut>): Extrinsic {
    this.signature.addSignature(signer, signature, nonce, era, doughnut);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  sign (account: KeyringPair, options: SignatureOptions): Extrinsic {
    this.signature.sign(this.method, account, options);
    if (options.doughnut && options.doughnut.isSome) {
      this.set('doughnut', options.doughnut);
    }

    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.toHex();
  }

  toObj (): any {
    return super.toJSON();
  }

  toArray (): Array<Codec> {
    const arr: [Codec] = [this.signature];
    if (this.doughnut.isSome) {
      arr.push(this.doughnut.unwrap());
    } else if (this.doughnut instanceof Doughnut) {
      arr.push(this.doughnut);
    }
    arr.push(this.method);
    return arr;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    const encoded = super.toU8a();
    console.log('encodec len', encoded.length);
    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
