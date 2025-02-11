test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("3.5 euros should be 3.745 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(1)).toBe(156.5);
});

test("One yen should be 0.0057 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1)).toBeCloseTo(0.0057, 4); 
});

test("100 yen should be 0.57 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(100)).toBeCloseTo(0.57, 2);
});
