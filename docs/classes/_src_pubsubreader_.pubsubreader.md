[@ehacke/pubsub](../README.md) › ["src/pubsubReader"](../modules/_src_pubsubreader_.md) › [PubsubReader](_src_pubsubreader_.pubsubreader.md)

# Class: PubsubReader <**T**>

## Type parameters

▪ **T**: *object*

## Hierarchy

* **PubsubReader**

## Index

### Constructors

* [constructor](_src_pubsubreader_.pubsubreader.md#constructor)

### Properties

* [config](_src_pubsubreader_.pubsubreader.md#private-config)
* [fromJson](_src_pubsubreader_.pubsubreader.md#private-fromjson)
* [services](_src_pubsubreader_.pubsubreader.md#private-services)
* [subscription](_src_pubsubreader_.pubsubreader.md#private-subscription)

### Methods

* [close](_src_pubsubreader_.pubsubreader.md#close)
* [internalMessageProcessor](_src_pubsubreader_.pubsubreader.md#private-internalmessageprocessor)
* [open](_src_pubsubreader_.pubsubreader.md#open)
* [errorHandler](_src_pubsubreader_.pubsubreader.md#static-errorhandler)

## Constructors

###  constructor

\+ **new PubsubReader**(`services`: [ServicesInterface](../interfaces/_src_pubsubreader_.servicesinterface.md), `config`: [ConfigInterface](../interfaces/_src_pubsubreader_.configinterface.md), `fromJson`: function): *[PubsubReader](_src_pubsubreader_.pubsubreader.md)*

*Defined in [src/pubsubReader.ts:25](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L25)*

**Parameters:**

▪ **services**: *[ServicesInterface](../interfaces/_src_pubsubreader_.servicesinterface.md)*

▪ **config**: *[ConfigInterface](../interfaces/_src_pubsubreader_.configinterface.md)*

▪ **fromJson**: *function*

▸ (`input`: object): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | object |

**Returns:** *[PubsubReader](_src_pubsubreader_.pubsubreader.md)*

## Properties

### `Private` config

• **config**: *[ConfigInterface](../interfaces/_src_pubsubreader_.configinterface.md)*

*Defined in [src/pubsubReader.ts:21](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L21)*

___

### `Private` fromJson

• **fromJson**: *function*

*Defined in [src/pubsubReader.ts:25](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L25)*

#### Type declaration:

▸ (`input`: object): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | object |

___

### `Private` services

• **services**: *[ServicesInterface](../interfaces/_src_pubsubreader_.servicesinterface.md)*

*Defined in [src/pubsubReader.ts:19](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L19)*

___

### `Private` subscription

• **subscription**: *Subscription | null* = null

*Defined in [src/pubsubReader.ts:23](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L23)*

## Methods

###  close

▸ **close**(): *Promise‹void›*

*Defined in [src/pubsubReader.ts:80](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L80)*

Close connection

**Returns:** *Promise‹void›*

___

### `Private` internalMessageProcessor

▸ **internalMessageProcessor**(`processMsg`: function): *(Anonymous function)*

*Defined in [src/pubsubReader.ts:43](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L43)*

Internal message processor

**Parameters:**

▪ **processMsg**: *function*

▸ (`message`: T): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`message` | T |

**Returns:** *(Anonymous function)*

___

###  open

▸ **open**(`processMsg`: function): *Promise‹void›*

*Defined in [src/pubsubReader.ts:66](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L66)*

Open connection

**Parameters:**

▪ **processMsg**: *function*

▸ (`message`: any): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |

**Returns:** *Promise‹void›*

___

### `Static` errorHandler

▸ **errorHandler**(`error`: any): *void*

*Defined in [src/pubsubReader.ts:59](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubReader.ts#L59)*

Error handler

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*
