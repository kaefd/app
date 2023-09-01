const modelCoin = (value) => {
    let res = []
    for (let i = 0; i < value.length; i++) {
        res.push({
            uuid: value[i].uuid,
            symbol: value[i].symbol,
            name: value[i].name,
            color: value[i].color,
            iconUrl: value[i].iconUrl,
            marketCap: value[i].marketCap,
            price: value[i].price,
            btcPrice: value[i].btcPrice,
            listedAt: value[i].listedAt,
            change: value[i].change,
            rank: value[i].rank,
        })
    }
    return res
}

export default {
    modelCoin,
}