function fromEuroToDollar(valueInEuro){
    return valueInEuro * 1.2;
}

function fromDollarToYen(dollars){
    return (dollars / 1.2) * 127.9;
}

function fromYenToPound (yen){
    return (yen / 127.9) * 0.8
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}