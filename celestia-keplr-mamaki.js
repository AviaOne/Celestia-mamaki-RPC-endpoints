window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension, Aviaone will not be able to connect you");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "mamaki",
    chainName: "CELESTIA Testnet Mamaki",
    rpc: "http://rpc-celestia-mamaki.aviaone.com:26657",
    rest: "http://rpc-celestia-mamaki.aviaone.com:1317",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "celestia",
        bech32PrefixAccPub: "celestia" + "pub",
        bech32PrefixValAddr: "celestia" + "valoper",
        bech32PrefixValPub: "celestia" + "valoperpub",
        bech32PrefixConsAddr: "celestia" + "valcons",
        bech32PrefixConsPub: "celestia" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "TIA", 
            coinMinimalDenom: "utia", 
            coinDecimals: 6, 
            coinGeckoId: "utia", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "TIA",
            coinMinimalDenom: "utia",
            coinDecimals: 6,
            coinGeckoId: "utia",
        },
    ],
    stakeCurrency: {
        coinDenom: "TIA",
        coinMinimalDenom: "utia",
        coinDecimals: 6,
        coinGeckoId: "utia",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
