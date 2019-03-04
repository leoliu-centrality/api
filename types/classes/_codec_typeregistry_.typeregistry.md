

# Hierarchy

**TypeRegistry**

# Properties

<a id="defaultregistry"></a>

## `<Static>` defaultRegistry

**● defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:11](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/codec/typeRegistry.ts#L11)*

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`string`*): [Constructor](../interfaces/_types_.constructor.md) \| `undefined`

*Defined in [codec/typeRegistry.ts:48](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/codec/typeRegistry.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md) \| `undefined`

___
<a id="getorthrow"></a>

##  getOrThrow

▸ **getOrThrow**(name: *`string`*, msg?: *`undefined` \| `string`*): [Constructor](../interfaces/_types_.constructor.md)

*Defined in [codec/typeRegistry.ts:52](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/codec/typeRegistry.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| `Optional` msg | `undefined` \| `string` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)

___
<a id="register"></a>

##  register

▸ **register**(type: *[Constructor](../interfaces/_types_.constructor.md) \| [RegistryTypes](../modules/_types_.md#registrytypes)*): `void`

▸ **register**(name: *`string`*, type: *[Constructor](../interfaces/_types_.constructor.md)*): `void`

*Defined in [codec/typeRegistry.ts:15](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/codec/typeRegistry.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Constructor](../interfaces/_types_.constructor.md) \| [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** `void`

*Defined in [codec/typeRegistry.ts:16](https://github.com/polkadot-js/api/blob/452a9dd/packages/types/src/codec/typeRegistry.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| type | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** `void`

___

