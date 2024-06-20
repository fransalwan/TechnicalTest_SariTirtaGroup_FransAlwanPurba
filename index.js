function numberToBahasa(num) {
  // Definisi array untuk satuan (units), belasan (teens), puluhan (tens), dan ratusan (hundreds)
  const units = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
  ];
  const teens = [
    "sepuluh",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
    "enam belas",
    "tujuh belas",
    "delapan belas",
    "sembilan belas",
  ];
  const tens = [
    "",
    "",
    "dua puluh",
    "tiga puluh",
    "empat puluh",
    "lima puluh",
    "enam puluh",
    "tujuh puluh",
    "delapan puluh",
    "sembilan puluh",
  ];
  const hundreds = [
    "",
    "seratus",
    "dua ratus",
    "tiga ratus",
    "empat ratus",
    "lima ratus",
    "enam ratus",
    "tujuh ratus",
    "delapan ratus",
    "sembilan ratus",
  ];

  // Fungsi untuk mengkonversi angka hingga 999 menjadi kata-kata
  function convertToWords(n) {
    if (n < 10) return units[n]; // Untuk angka 1-9
    else if (n < 20) return teens[n - 10]; // Untuk angka 10-19
    else if (n < 100)
      return (
        tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "")
      );
    // Untuk angka 20-99
    else if (n < 1000)
      return (
        hundreds[Math.floor(n / 100)] +
        (n % 100 !== 0 ? " " + convertToWords(n % 100) : "")
      ); // Untuk angka 100-999
  }

  if (num === 0) return "nol"; // Jika angka adalah 0
  if (num < 1000) return convertToWords(num); // Jika angka kurang dari 1000, langsung konversi

  let thousands = Math.floor(num / 1000); // Mengambil ribuan
  let remainder = num % 1000; // Sisa setelah dibagi 1000
  let result = "";

  // Konversi bagian ribuan
  if (thousands < 10) {
    result = units[thousands] + " ribu";
  } else if (thousands < 20) {
    result = teens[thousands - 10] + " ribu";
  } else {
    result = convertToWords(thousands) + " ribu";
  }

  // Jika ada sisa (remainder) tambahkan dengan hasil konversi sisa tersebut
  if (remainder !== 0) {
    result += " " + convertToWords(remainder);
  }

  return result; // Kembalikan hasil konversi
}

// Contoh penggunaan:
console.log(numberToBahasa(9)); // sembilan
console.log(numberToBahasa(12)); // dua belas
console.log(numberToBahasa(2012)); // dua ribu dua belas
console.log(numberToBahasa(999999)); // sembilan ratus ribu sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan
