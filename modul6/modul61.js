// 1. Validasi Nama (Required)
function cekNama() {
  const nama = document.getElementById("nama").value;
  const errNama = document.getElementById("errNama");

  if (nama.trim() === "") {
    errNama.textContent = "Kolom nama tidak boleh kosong (required).";
    return false;
  } else {
    errNama.textContent = "";
    return true;
  }
}

// 2. Validasi Email (Format Regex)
function cekEmail() {
  const email = document.getElementById("email").value;
  const errEmail = document.getElementById("errEmail");
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    errEmail.textContent = "Kolom email tidak boleh kosong.";
    return false;
  } else if (!polaEmail.test(email)) {
    errEmail.textContent = "Format email tidak valid.";
    return false;
  } else {
    errEmail.textContent = "";
    return true;
  }
}

// 3. Validasi Umur (Angka 1-100)
function cekUmur() {
  const umur = document.getElementById("umur").value;
  const errUmur = document.getElementById("errUmur");

  if (umur === "") {
    errUmur.textContent = "Kolom umur tidak boleh kosong.";
    return false;
  } else if (umur < 1 || umur > 100) {
    errUmur.textContent = "Umur harus berada di antara 1 dan 100.";
    return false;
  } else {
    errUmur.textContent = "";
    return true;
  }
}

// Mencegah form disubmit jika masih ada error
function validasiSemua() {
  const isValidNama = cekNama();
  const isValidEmail = cekEmail();
  const isValidUmur = cekUmur();

  if (isValidNama && isValidEmail && isValidUmur) {
    alert("Form berhasil dikirim!");
    return true;
  }
  return false;
}
