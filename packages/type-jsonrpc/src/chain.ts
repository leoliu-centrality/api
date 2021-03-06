// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt, RpcSection } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE Order is the same as in Rust

const getHeader: RpcMethodOpt = {
  description: 'Retrieves the header for a specific block',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'Header'
};

const getBlock: RpcMethodOpt = {
  description: 'Get header and body of a relay chain block',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'SignedBlock'
};

const getBlockHash: RpcMethodOpt = {
  description: 'Get the block hash for a specific block',
  params: [
    createParam('blockNumber', 'BlockNumber', { isOptional: true })
  ],
  type: 'Hash'
};

const getFinalisedHead: RpcMethodOpt = {
  description: 'Get hash of the last finalised block in the canon chain',
  params: [],
  type: 'Hash'
};

const getRuntimeVersion: RpcMethodOpt = {
  description: 'Get the runtime version (alias of state_getRuntimeVersion)',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'RuntimeVersion'
};

const subscribeNewHead: RpcMethodOpt = {
  description: 'Retrieves the best header via subscription',
  params: [],
  pubsub: [
    'newHead',
    'subscribeNewHead',
    'unsubscribeNewHead'
  ],
  type: 'Header'
};

const subscribeFinalisedHeads: RpcMethodOpt = {
  description: 'Retrieves the best finalised header via subscription',
  params: [],
  pubsub: [
    'finalisedHead',
    'subscribeFinalisedHeads',
    'unsubscribeFinalisedHeads'
  ],
  type: 'Header'
};

const subscribeRuntimeVersion: RpcMethodOpt = {
  description: 'Retrieves the runtime version via subscription',
  params: [],
  pubsub: [
    'runtimeVersion',
    'subscribeRuntimeVersion',
    'unsubscribeRuntimeVersion'
  ],
  type: 'RuntimeVersion'
};

const section = 'chain';

/**
 * @summary Methods to retrieve chain data.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Retrieval of chain data',
  section,
  methods: {
    getBlock: createMethod(section, 'getBlock', getBlock),
    getBlockHash: createMethod(section, 'getBlockHash', getBlockHash),
    getFinalisedHead: createMethod(section, 'getFinalisedHead', getFinalisedHead),
    getHeader: createMethod(section, 'getHeader', getHeader),
    getRuntimeVersion: createMethod(section, 'getRuntimeVersion', getRuntimeVersion),
    subscribeFinalisedHeads: createMethod(section, 'subscribeFinalisedHeads', subscribeFinalisedHeads),
    subscribeRuntimeVersion: createMethod(section, 'subscribeRuntimeVersion', subscribeRuntimeVersion),
    subscribeNewHead: createMethod(section, 'subscribeNewHead', subscribeNewHead)
  }
} as RpcSection;
