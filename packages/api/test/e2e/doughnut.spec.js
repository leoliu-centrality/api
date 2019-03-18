// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import testingPairs from '@polkadot/keyring/testingPairs';
import Api from '../../src/promise';
// import makeDoughnut from '../../../doughnut-js/src';
import { Certificate, Doughnut, OptionDoughnut } from '../../../types/src/type/Doughnut.ts'

const keyring = testingPairs({ type: 'ed25519' });


import getTypeRegistry from '@polkadot/types/codec/typeRegistry';

const typeRegistry = getTypeRegistry();

typeRegistry.register({
  AssetId: 'u32',
  AssetOptions: { total_supply: 'Balance' },
  Group: 'u256',
  Meta: 'u256',
  PKB: 'u256',
  Response: 'u256',
  Topic: 'u256',
  Value: 'u256',
  Amount: 'u256',
  AcceptPayload: 'u256',
  DeviceId: 'u256',
  ExchangeKey: 'u256',
  Invite: 'u256',
  PermissionOptions: 'u256',
  PreKeyBundle: 'u256',
  BalanceLock: 'u256',
  Exposure: 'u256',
  RewardDestination: 'u256',
  StakingLedger: 'u256',
});


describe('sending test doughnut', () => {
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();
    }

    jest.setTimeout(30000);
    done();
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes a transfer (sign, then send)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());
    const expires = new Date();

    const year = expires.getFullYear();
    expires.setFullYear(year + 1);

    const cert_value = new Certificate({
      expires: Math.floor(expires.getTime() / 1000),
      not_before: Math.floor(new Date().getTime() / 1000),
      version: 1,
      permissions: [['cennznet', 'true']],
      holder: keyring.dave.address(),
      issuer: keyring.alice.address(),
    });

    const c = cert_value.toU8a();

    const doughnut = new OptionDoughnut(new Doughnut({
      certificate: cert_value,
      signature: keyring.alice.sign(c),
      compact: c
    }));

    let t = api.tx.genericAsset.transfer(0, keyring.bob.address(), 12345);
    // console.log('alice address', u8aToHex(keyring.decodeAddress(keyring.alice.address())));
    // console.log('bob address', u8aToHex(keyring.decodeAddress(keyring.alice.address())));
    // console.log('dave address', u8aToHex(keyring.decodeAddress(keyring.alice.address())));
    let signed = t.sign(keyring.dave, { nonce })
    return signed.send(({ events, status, type }) => {
        console.log('Transaction status:', type);
        if (type === 'Finalised') {
          console.log('Completed at block hash', status.value.toHex());
          console.log('Events:');

          events.forEach(({ phase, event: { data, method, section } }) => {
            console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
          });

          if (events.length) {
            done();
          }
        }
      });
  });
});
