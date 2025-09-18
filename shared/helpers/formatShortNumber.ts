export const formatShortNumber = (number: number) => {
  let formattedNumber;

  // Mengubah angka menjadi format singkat untuk miliar
  if (number >= 1_000_000_000) {
    formattedNumber = (number / 1_000_000_000).toFixed(2) + "B"; // Dua digit setelah koma untuk miliar
  }
  // Mengubah angka menjadi format singkat untuk juta
  else if (number >= 1_000_000) {
    formattedNumber = (number / 1_000_000).toFixed(1) + "M"; // Satu digit setelah koma untuk juta
  }
  // Mengubah angka menjadi format singkat untuk ribu
  else if (number >= 1_000) {
    formattedNumber = (number / 1_000).toFixed(2) + "K"; // Dua digit setelah koma untuk ribu
  }
  // Angka lebih kecil dari 1.000 tidak diubah
  else {
    formattedNumber = number.toString();
  }

  return formattedNumber;
};
