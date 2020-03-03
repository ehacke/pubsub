[@ehacke/pubsub](../README.md) › ["src/logger"](_src_logger_.md)

# External module: "src/logger"

## Index

### Variables

* [logLevel](_src_logger_.md#const-loglevel)
* [prettyStdOut](_src_logger_.md#const-prettystdout)
* [showColors](_src_logger_.md#const-showcolors)

## Variables

### `Const` logLevel

• **logLevel**: *string* = process.env.LOG_LEVEL || 'info'

*Defined in [src/logger.ts:7](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/logger.ts#L7)*

___

### `Const` prettyStdOut

• **prettyStdOut**: *any* = new PrettyStream({ mode: 'dev', useColor: showColors })

*Defined in [src/logger.ts:12](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/logger.ts#L12)*

___

### `Const` showColors

• **showColors**: *boolean* = process.env.LOG_COLORS === 'true'

*Defined in [src/logger.ts:10](https://github.com/ehacke/pubsub/blob/a6a5ba8/src/logger.ts#L10)*
