function strictEquals(a, b) {
	if (isNaN(a) && isNaN(b)) {
        return false;
	}
    else if (Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    }
    else if (Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    }
    else if (Object.is(a, b)) {
        return true;
    }
    else {
        return false;
    }    	
}

describe("function strictEquals", function () {

	test("when function strictEquals receives 1 and 1, it should return true", function() {

		//Arrange
		const a = 1;
		const b = 1;
		const expected = true;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});


    test("when function strictEquals receives false and false, it should return true", function() {

		//Arrange
		const a = false;
		const b = false;
		const expected = true;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});

    test("when function strictEquals receives 1 and '1', it should return false", function() {

		//Arrange
		const a = 1;
		const b = '1';
		const expected = false;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});

    test("when function strictEquals receives true and false, it should return false", function() {

		//Arrange
		const a = true;
		const b = false;
		const expected = false;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});

    test("when function strictEquals receives 'Water' and 'oil', it should return false", function() {

		//Arrange
		const a = "Water";
		const b = "oil";
		const expected = false;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});

    test("when function strictEquals receives NaN and NaN, it should return false", function() {

		//Arrange
		const a = NaN;
		const b = NaN;
		const expected = false;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});
});




