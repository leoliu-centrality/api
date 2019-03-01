

# Hierarchy

 [Codec](_types_.codec.md)

**↳ IExtrinsic**

# Properties

<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:38](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L38)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hash"></a>

##  hash

**● hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L107)*

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:43](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L43)*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

##  isSigned

**● isSigned**: *`boolean`*

*Defined in [types.ts:108](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L108)*

___
<a id="method"></a>

##  method

**● method**: *[Method](../classes/_primitive_method_.method.md)*

*Defined in [types.ts:109](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L109)*

___
<a id="signature"></a>

##  signature

**● signature**: *[ISignature](_types_.isignature.md)*

*Defined in [types.ts:110](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L110)*

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *[Address](../classes/_type_address_.address.md) \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, era?: *[Uint8Array](../classes/_codec_u8a_.u8a.md#uint8array)*): `this`

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](../classes/_type_address_.address.md) \| `Uint8Array` |
| signature | `Uint8Array` |
| nonce | [AnyNumber](../modules/_types_.md#anynumber) |
| `Optional` era | [Uint8Array](../classes/_codec_u8a_.u8a.md#uint8array) |

**Returns:** `this`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:48](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L48)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="sign"></a>

##  sign

▸ **sign**(account: *`KeyringPair`*, options: *[SignatureOptions](../modules/_types_.md#signatureoptions)*): `this`

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L112)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `KeyringPair` |
| options | [SignatureOptions](../modules/_types_.md#signatureoptions) |

**Returns:** `this`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L53)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:58](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L58)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:63](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L63)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:69](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L69)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

