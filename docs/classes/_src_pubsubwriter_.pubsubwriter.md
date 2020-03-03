[@ehacke/pubsub](../README.md) › ["src/pubsubWriter"](../modules/_src_pubsubwriter_.md) › [PubsubWriter](_src_pubsubwriter_.pubsubwriter.md)

# Class: PubsubWriter <**T**>

## Type parameters

▪ **T**: *object*

## Hierarchy

* **PubsubWriter**

## Index

### Constructors

* [constructor](_src_pubsubwriter_.pubsubwriter.md#constructor)

### Properties

* [config](_src_pubsubwriter_.pubsubwriter.md#private-config)
* [services](_src_pubsubwriter_.pubsubwriter.md#private-services)
* [topic](_src_pubsubwriter_.pubsubwriter.md#private-topic)

### Methods

* [open](_src_pubsubwriter_.pubsubwriter.md#open)
* [write](_src_pubsubwriter_.pubsubwriter.md#write)

## Constructors

###  constructor

\+ **new PubsubWriter**(`services`: [ServicesInterface](../interfaces/_src_pubsubreader_.servicesinterface.md), `config`: [ConfigInterface](../interfaces/_src_pubsubreader_.configinterface.md)): *[PubsubWriter](_src_pubsubwriter_.pubsubwriter.md)*

*Defined in [src/pubsubWriter.ts:19](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubWriter.ts#L19)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`services` | [ServicesInterface](../interfaces/_src_pubsubreader_.servicesinterface.md) | - |
`config` | [ConfigInterface](../interfaces/_src_pubsubreader_.configinterface.md) |   |

**Returns:** *[PubsubWriter](_src_pubsubwriter_.pubsubwriter.md)*

## Properties

### `Private` config

• **config**: *[ConfigInterface](../interfaces/_src_pubsubreader_.configinterface.md)*

*Defined in [src/pubsubWriter.ts:17](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubWriter.ts#L17)*

___

### `Private` services

• **services**: *[ServicesInterface](../interfaces/_src_pubsubreader_.servicesinterface.md)*

*Defined in [src/pubsubWriter.ts:15](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubWriter.ts#L15)*

___

### `Private` topic

• **topic**: *Topic | null* = null

*Defined in [src/pubsubWriter.ts:19](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubWriter.ts#L19)*

## Methods

###  open

▸ **open**(): *Promise‹void›*

*Defined in [src/pubsubWriter.ts:34](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubWriter.ts#L34)*

Open and create topic if necessary

**Returns:** *Promise‹void›*

___

###  write

▸ **write**(`messageObject`: T): *Promise‹void›*

*Defined in [src/pubsubWriter.ts:44](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/pubsubWriter.ts#L44)*

Write to topic

**Parameters:**

Name | Type |
------ | ------ |
`messageObject` | T |

**Returns:** *Promise‹void›*
