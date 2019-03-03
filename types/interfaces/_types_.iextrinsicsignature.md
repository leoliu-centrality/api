

# Hierarchy

 [Codec](_types_.codec.md)

**↳ IExtrinsicSignature**

# Implemented by

* [ExtrinsicSignature](../classes/_type_extrinsicsignature_.extrinsicsignature.md)

# Properties

<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L39)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:44](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L44)*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

##  isSigned

**● isSigned**: *`boolean`*

*Defined in [types.ts:119](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L119)*

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:49](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L49)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L54)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:59](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L59)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:64](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L64)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:70](https://github.com/polkadot-js/api/blob/1ed1bfa/packages/types/src/types.ts#L70)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

