//Random password generator

function generatePasswords(Length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowercaseChars = "qwertyuioplkjhgfdsazxcvbnm";
    const uppercaseChars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    const numberChars = "0123456789";
    const symbolChars = "~!@#$%^&*_+-=;:/?";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(Length <= 0)
        return `(Password length must be at least 1)`;
    if(allowedChars.length === 0)
        return `(Atleast 1 characters need to be selected)`;

    for(let i = 0; i < Length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

function pseudoMainFunction(){
    const passwordLength = 12;
    const includeLowerCase = document.getElementById("addLowerCase").checked;
    const includeUpperCase = document.getElementById("addUpperCase").checked;
    const includeNumbers = document.getElementById("addNumbers").checked;
    const includeSymbols = document.getElementById("addSymbols").checked;

    const password = generatePasswords(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

    console.log(password);
    document.getElementById("result").textContent=`Generated Password = ${password}`;
}