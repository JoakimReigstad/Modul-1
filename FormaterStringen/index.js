function capitalizeFirstLetter(str) {
    if (!str) return ''; 
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test av funksjonen
let input = "terje";
let output = capitalizeFirstLetter(input);
console.log(output);
