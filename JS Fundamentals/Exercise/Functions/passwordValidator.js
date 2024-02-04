function passwordValidator(password) {
    let isValid = true;
    let hasOnlyLettersAndDigits = onlyLettersAndNumbers(password);
    let isPasswordLengthValid = passwordLengthValidation(password);
    let hasTwoDigitsOrMore = hasMinimumTwoDigits(password);

    if (!isPasswordLengthValid) {
        isValid = false;
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!hasOnlyLettersAndDigits) {
        isValid = false;
        console.log(`Password must consist only of letters and digits`);
    }

    if (!hasTwoDigitsOrMore) {
        isValid = false;
        console.log(`Password must have at least 2 digits`);
    }

    if (isValid) {
        console.log(`Password is valid`);
    }

    function onlyLettersAndNumbers(password) {
        return /^[A-Za-z0-9]*$/.test(password);
    }

    function passwordLengthValidation(password) {
        return password.length > 5 && password.length < 11;
    }

    function hasMinimumTwoDigits(password) {
        return /(\D*\d){2,}/.test(password);
    }
}

passwordValidator('MyPass123');