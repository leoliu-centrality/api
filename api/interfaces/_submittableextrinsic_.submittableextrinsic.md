

# Type parameters
#### CodecResult 
#### SubscriptionResult 
# Hierarchy

 `IExtrinsic`

**↳ SubmittableExtrinsic**

# Properties

<a id="args"></a>

##  args

**● args**: *`Array`<`Codec`>*

*Inherited from IMethod.args*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L110)*

___
<a id="argsdef"></a>

##  argsDef

**● argsDef**: *`ArgsDef`*

*Inherited from IMethod.argsDef*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L111)*

___
<a id="callindex"></a>

##  callIndex

**● callIndex**: *`Uint8Array`*

*Inherited from IMethod.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:112](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L112)*

___
<a id="data"></a>

##  data

**● data**: *`Uint8Array`*

*Inherited from IMethod.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:113](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L113)*

___
<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from Codec.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:39](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L39)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

##  hasOrigin

**● hasOrigin**: *`boolean`*

*Inherited from IMethod.hasOrigin*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L114)*

___
<a id="hash"></a>

##  hash

**● hash**: *`IHash`*

*Inherited from IExtrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:123](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L123)*

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from Codec.isEmpty*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:44](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L44)*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

##  isSigned

**● isSigned**: *`boolean`*

*Inherited from IExtrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:124](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L124)*

___
<a id="meta"></a>

##  meta

**● meta**: *`FunctionMetadata`*

*Inherited from IMethod.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:115](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L115)*

___
<a id="method"></a>

##  method

**● method**: *`Method`*

*Inherited from IExtrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:125](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L125)*

___
<a id="signature"></a>

##  signature

**● signature**: *`IExtrinsicSignature`*

*Inherited from IExtrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:126](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L126)*

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *`Address` \| `Uint8Array`*, signature: *`Uint8Array`*, nonce: *`AnyNumber`*, era?: *`Uint8Array`*): `IExtrinsic`

*Inherited from IExtrinsic.addSignature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:127](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L127)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | `Address` \| `Uint8Array` |
| signature | `Uint8Array` |
| nonce | `AnyNumber` |
| `Optional` era | `Uint8Array` |

**Returns:** `IExtrinsic`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from Codec.eq*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:49](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L49)*

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

*Defined in [SubmittableExtrinsic.ts:60](https://github.com/polkadot-js/api/blob/452a9dd/packages/api/src/SubmittableExtrinsic.ts#L60)*

**Returns:** `SumbitableResultResult`<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:62](https://github.com/polkadot-js/api/blob/452a9dd/packages/api/src/SubmittableExtrinsic.ts#L62)*

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

*Defined in [SubmittableExtrinsic.ts:64](https://github.com/polkadot-js/api/blob/452a9dd/packages/api/src/SubmittableExtrinsic.ts#L64)*

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

*Defined in [SubmittableExtrinsic.ts:66](https://github.com/polkadot-js/api/blob/452a9dd/packages/api/src/SubmittableExtrinsic.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `KeyringPair` \| `string` \| `AccountId` \| `Address` |
| `Optional` options | `Partial`<`Partial`<`SignatureOptions`>> |

**Returns:** `SumbitableResultResult`<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:68](https://github.com/polkadot-js/api/blob/452a9dd/packages/api/src/SubmittableExtrinsic.ts#L68)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:54](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L54)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Codec.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:59](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L59)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Codec.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:64](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L64)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from Codec.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:70](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/types.ts#L70)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

