const { calculateUsdSoulTvl } = require('./helper/getUsdSoulTvl.js')
const { staking } = require('../helper/staking.js');
const { underworldLending } = require('./underworld-lending.js')

const factory_fantom = '0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF'
const farm_fantom = '0xb898226dE3c5ca980381fE85F2Bc10e35e00634c'
const soul_fantom = '0xe2fb177009ff39f52c0134e8007fa0e4baacbd07'
const wftm_fantom = '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'
const rndm_fantom = '0x49ac072c793fb9523f0688a0d863aadfbfb5d475'
const usdc_fantom = '0x04068da6c83afcfa0e13ba15a6696662335d5b75'
const wbtc_fantom = '0x321162cd933e2be498cd2267a90534a804051b11'

const factory_avax = '0x5BB2a9984de4a69c05c996F7EF09597Ac8c9D63a'
const farm_avax = '0xB1e330401c920077Ddf157AbA5594238d36b54B1'
const soul_avax = '0x11d6DD25c1695764e64F439E32cc7746f3945543'
const wavax_avax = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
const usdc_avax = '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
const wbtc_avax = '0x50b7545627a5162F82A992c33b87aDc75187B218'
const weth_avax = '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB'

const wl_fantom = [ usdc_fantom, soul_fantom, rndm_fantom, wbtc_fantom ]
const wl_avax = [ usdc_avax, soul_avax, wbtc_avax, weth_avax ]

module.exports = {
  fantom:{
    staking: staking(farm_fantom, soul_fantom, 'fantom'),
    tvl: calculateUsdSoulTvl(factory_fantom, 'fantom', wftm_fantom, wl_fantom, 'fantom'),
    borrowed: underworldLending('fantom', true)
  },
  avax:{
    staking: staking(farm_avax, soul_avax, 'avax'),
    tvl: calculateUsdSoulTvl(factory_avax, 'avax', wavax_avax, wl_avax, 'avax'),
    borrowed: underworldLending('avax', true)
  },
  misrepresentedTokens: true,
  methodology: "Counts liquidity on the exchange, staked soul, and underworld assets.",
}
