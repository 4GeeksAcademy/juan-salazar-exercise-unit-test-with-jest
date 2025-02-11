let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

function fromDollarToYen(amountInDollars) {
    return amountInDollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

function fromEuroToDollar(amountInEuros) {
    return amountInEuros * oneEuroIs["USD"];
}

function fromYenToPound(amountInYen) {
    return amountInYen / oneEuroIs["JPY"] * oneEuroIs["GBP"];
}