function cekPanjangInput(teks) {
  if (teks.length < 8) {
    console.log("Peringatan: Teks kurang dari 8 karakter.");
    return true; 
  }
  
  console.log("Validasi berhasil.");
  return false; 
}

// Contoh eksekusi saat diuji:
// cekPanjangInput("cantik"); // Output: Peringatan: Teks kurang dari 8 karakter. (Karena hanya 6 karakter)