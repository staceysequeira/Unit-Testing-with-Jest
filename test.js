const { fromEuroToDollar, fromDollarToYen, fromYentoPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(1000)
    const expected = 1000 * 1.2;     
    expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("fromDollarToYen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(1000)
    const expected = (1000/1.2) * 127.9;     
    expect(yen).toBe(expected); 
})

test("fromYenToPound", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(1000)
    const expected = (1000/127.9) * 0.8;     
    expect(pound).toBe(expected);
})
