// // Importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(3.745);
})

test("One Dollar should be 146.26168224299064 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);

    expect(yen).toBe(146.26168224299064);
})

test("One yen should be 0.0055591054313099035 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(150);

    expect(pounds).toBe(0.8338658146964857);
})