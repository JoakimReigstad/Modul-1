function getnum() {
    let num1, num2;
    let output = document.getElementById("output");

    do {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
    } while (num1 === num2);

    output.textContent = "Generated different numbers: " + num1 + " and " + num2;
}



