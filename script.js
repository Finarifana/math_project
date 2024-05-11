// Fungsi untuk menghitung GCD (PBB)
function calculateGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calculateGCD(b, a % b);
}

// Fungsi untuk menghitung LCD (KPK)
function calculateLCD(a, b) {
    return (a * b) / calculateGCD(a, b);
}

// Fungsi untuk menangani pengiriman formulir
function handleFormSubmit(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir (refresh halaman)
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var gcd = calculateGCD(num1, num2);
    var lcd = calculateLCD(num1, num2);
    document.getElementById('result').innerHTML = "GCD (PBB) of " + num1 + " and " + num2 + " is: " + gcd + "<br>" +
                                                     "LCD (KPK) of " + num1 + " and " + num2 + " is: " + lcd;
}

// Menangani pengiriman formulir
document.getElementById('gcdLcdForm').addEventListener('submit', handleFormSubmit);
