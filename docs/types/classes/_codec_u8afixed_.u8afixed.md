

# Hierarchy

↳  [U8a](_codec_u8a_.u8a.md)

**↳ U8aFixed**

↳  [H256](_h256_.h256.md)

↳  [H512](_h512_.h512.md)

↳  [AccountId](_accountid_.accountid.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new U8aFixed**(value?: *[AnyU8a](../modules/_types_d_.md#anyu8a)*, bitLength?: *`BitLength`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [codec/U8aFixed.ts:14](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8aFixed.ts#L14)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyU8a](../modules/_types_d_.md#anyu8a) |  new Uint8Array() |
| `Default value` bitLength | `BitLength` | 256 |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___

# Properties

<a id="_bitlength"></a>

## `<Protected>` _bitLength

**● _bitLength**: *`number`*

*Defined in [codec/U8aFixed.ts:14](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8aFixed.ts#L14)*

___
<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:25](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8a.ts#L25)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Defined in [codec/U8aFixed.ts:28](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8aFixed.ts#L28)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Defined in [codec/U8aFixed.ts:32](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8aFixed.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[fromU8a](_codec_u8a_.u8a.md#fromu8a)*

*Defined in [codec/U8aFixed.ts:40](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8aFixed.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:45](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8a.ts#L45)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:49](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8a.ts#L49)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/6ff8471/packages/types/src/codec/U8a.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
