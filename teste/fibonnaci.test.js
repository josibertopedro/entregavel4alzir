const fib = require("../função/fibonnaci")

test('Os 5 primeiros numeros devem ser (0,1,1,2,3)' ,() =>{
    expect(fib(5)).toMatchObject([0, 1, 1, 2, 3]);
})

test('Os 2 primeiros numeros devem ser (1,2,3)' ,() =>{
    expect(fib(2)).toMatchObject([0,1]);
})