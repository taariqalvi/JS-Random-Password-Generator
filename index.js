const passwordBox = document.getElementById("password");
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]></-=";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let passwordG = "";
    passwordG += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwordG += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passwordG += numbers[Math.floor(Math.random() * numbers.length)];
    passwordG += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (passwordLength > passwordG.length) {
        passwordG += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = passwordG;
}

function copyPassword() {
    passwordBox.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(passwordBox.value);

    if (passwordBox.value !== "" ) {
        alert("Password copied");    
    }
}





