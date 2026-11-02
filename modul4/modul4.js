// ============================================
// 1. PESAN SELAMAT DATANG
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("welcome-banner");

  // Tentukan salam berdasarkan jam saat ini
  const jam = new Date().getHours();
  let salam = "Selamat Datang";
  if (jam < 11) salam = "Selamat Pagi";
  else if (jam < 15) salam = "Selamat Siang";
  else if (jam < 18) salam = "Selamat Sore";
  else salam = "Selamat Malam";

  banner.textContent = `👋 ${salam}! Selamat datang di Website Modul 4.`;

  // Tampilkan banner dengan animasi slide-down
  setTimeout(() => banner.classList.add("show"), 100);

  // Sembunyikan banner otomatis setelah 5 detik
  setTimeout(() => banner.classList.remove("show"), 5000);

  // Inisialisasi fitur lain
  initHoverAnimation();
  initFormValidation();
});

// ============================================
// 2. ANIMASI HOVER MENU NAVIGASI (JAVASCRIPT)
// ============================================
function initHoverAnimation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.boxShadow = "0 6px 14px rgba(74, 144, 226, 0.5)";
      link.style.letterSpacing = "1px";
    });

    link.addEventListener("mouseout", () => {
      link.style.boxShadow = "none";
      link.style.letterSpacing = "0px";
    });
  });
}

// ============================================
// 3. VALIDASI FORM KONTAK
// ============================================
function initFormValidation() {
  const form = document.getElementById("contact-form");

  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");

  const errorNama = document.getElementById("error-nama");
  const errorEmail = document.getElementById("error-email");
  const errorPesan = document.getElementById("error-pesan");
  const successMsg = document.getElementById("form-success");

  // Validasi saat form disubmit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // cegah reload halaman
    let valid = true;

    // Reset pesan
    errorNama.textContent = "";
    errorEmail.textContent = "";
    errorPesan.textContent = "";
    successMsg.textContent = "";

    // --- Validasi Nama ---
    if (nama.value.trim() === "") {
      errorNama.textContent = "Nama tidak boleh kosong.";
      valid = false;
    } else if (nama.value.trim().length < 3) {
      errorNama.textContent = "Nama minimal 3 karakter.";
      valid = false;
    }

    // --- Validasi Email (regex sederhana) ---
    const emailRegex = /^[^\s@] + @ [^\s@] + \.[^\s@]+$/;
    if (email.value.trim() === "") {
      errorEmail.textContent = "Email tidak boleh kosong.";
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      errorEmail.textContent = "Format email tidak valid.";
      valid = false;
    }

    // --- Validasi Pesan ---
    if (pesan.value.trim() === "") {
      errorPesan.textContent = "Pesan tidak boleh kosong.";
      valid = false;
    } else if (pesan.value.trim().length < 10) {
      errorPesan.textContent = "Pesan minimal 10 karakter.";
      valid = false;
    }

    // Jika semua valid
    if (valid) {
      successMsg.textContent = "✅ Pesan berhasil dikirim! Terima kasih.";
      form.reset();
    }
  });
}