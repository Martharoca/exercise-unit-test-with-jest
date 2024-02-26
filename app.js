let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// // Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(3.5));

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar*oneEuroIs["JPY"]) / oneEuroIs["USD"];
    return valueInYen;
    
}
console.log(fromDollarToYen(1));

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return valueInPound;
}
console.log(fromYenToPound(150));

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }