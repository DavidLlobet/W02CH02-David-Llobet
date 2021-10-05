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

	test("when function strictEquals receives 1 and 1, returns true", function() {

		//Arrange
		const a = 1;
		const b = 1;
		const expected = true;

		//Act
		const result = strictEquals(a, b);

		//Assert
		expect(result).toBe(expected)
	});
});

