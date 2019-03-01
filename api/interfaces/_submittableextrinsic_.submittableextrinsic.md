

# Type parameters
#### CodecResult 
#### SubscriptionResult 
# Hierarchy

 `IExtrinsic`

**↳ SubmittableExtrinsic**

# Properties

<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from Codec.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:38](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L38)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hash"></a>

##  hash

**● hash**: *`IHash`*

*Inherited from IExtrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:107](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L107)*

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from Codec.isEmpty*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:43](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L43)*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

##  isSigned

**● isSigned**: *`boolean`*

*Inherited from IExtrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:108](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L108)*

___
<a id="method"></a>

##  method

**● method**: *`Method`*

*Inherited from IExtrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:109](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L109)*

___
<a id="signature"></a>

##  signature

**● signature**: *`ISignature`*

*Inherited from IExtrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L110)*

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *`Address` \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *`AnyNumber`*, era?: *`Uint8Array`*): `this`

*Inherited from IExtrinsic.addSignature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | `Address` \| `Uint8Array` |
| signature | `Uint8Array` |
| nonce | `AnyNumber` |
| `Optional` era | `Uint8Array` |

**Returns:** `this`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from Codec.eq*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:48](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L48)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="send"></a>

##  send

▸ **send**(): `SumbitableResultResult`<`CodecResult`, `SubscriptionResult`>

▸ **send**(statusCb: *`function`*): `SumbitableResultSubscription`<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:60](https://github.com/polkadot-js/api/blob/4ffe80c/packages/api/src/SubmittableExtrinsic.ts#L60)*

**Returns:** `SumbitableResultResult`<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:62](https://github.com/polkadot-js/api/blob/4ffe80c/packages/api/src/SubmittableExtrinsic.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCb | `function` |

**Returns:** `SumbitableResultSubscription`<`CodecResult`, `SubscriptionResult`>

___
<a id="sign"></a>

##  sign

▸ **sign**(account: *`KeyringPair`*, _options: *`Partial`<`SignatureOptions`>*): `this`

*Overrides IExtrinsic.sign*

*Defined in [SubmittableExtrinsic.ts:64](https://github.com/polkadot-js/api/blob/4ffe80c/packages/api/src/SubmittableExtrinsic.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `KeyringPair` |
| _options | `Partial`<`SignatureOptions`> |

**Returns:** `this`

___
<a id="signandsend"></a>

##  signAndSend

▸ **signAndSend**(account: *`KeyringPair` \| `string` \| `AccountId` \| `Address`*, options?: *`Partial`<`Partial`<`SignatureOptions`>>*): `SumbitableResultResult`<`CodecResult`, `SubscriptionResult`>

▸ **signAndSend**(account: *`KeyringPair` \| `string` \| `AccountId` \| `Address`*, statusCb: *`StatusCb`*): `SumbitableResultSubscription`<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:66](https://github.com/polkadot-js/api/blob/4ffe80c/packages/api/src/SubmittableExtrinsic.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `KeyringPair` \| `string` \| `AccountId` \| `Address` |
| `Optional` options | `Partial`<`Partial`<`SignatureOptions`>> |

**Returns:** `SumbitableResultResult`<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:68](https://github.com/polkadot-js/api/blob/4ffe80c/packages/api/src/SubmittableExtrinsic.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `KeyringPair` \| `string` \| `AccountId` \| `Address` |
| statusCb | `StatusCb` |

**Returns:** `SumbitableResultSubscription`<`CodecResult`, `SubscriptionResult`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Codec.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:53](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L53)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Codec.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:58](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L58)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Codec.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:63](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L63)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from Codec.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:69](https://github.com/polkadot-js/api/blob/4ffe80c/packages/types/src/types.ts#L69)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

