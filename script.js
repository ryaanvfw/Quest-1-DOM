// ==========================================================================
// APLIKASI MANAJEMEN PERPUSTAKAAN DIGITAL (INTEGRASI DOM JAVASCRIPT)
// ==========================================================================

// 1. SELECTOR (querySelector & querySelectorAll)
// Memilih elemen-elemen HTML yang dibutuhkan
const mainTitle = document.querySelector("#main-title");
const bookForm = document.querySelector("#book-form");
const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#book-author");
const bookList = document.querySelector("#book-list");
const errorMessage = document.querySelector("#error-message");
const submitBtn = document.querySelector("#btn-submit");

// 2. INNERHTML & TEXTCONTENT & INNERTEXT
// Mengubah tampilan judul utama saat aplikasi dijalankan
mainTitle.innerHTML = "Perpustakaan Digital Kota";

// 3. MANIPULASI ATRIBUT & STYLE
// Menambahkan styling awal via JS dan atribut kustom
submitBtn.style.backgroundColor = "#2c3e50";
submitBtn.style.color = "#ffffff";
submitBtn.style.cursor = "pointer";
bookForm.setAttribute("data-status", "active");

// 5. EVENT LISTENER (input)
// Real-time input listener untuk mereset pesan error saat pengguna mengetik
titleInput.addEventListener("input", () => {
  if (titleInput.value.trim() !== "") {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
});

authorInput.addEventListener("input", () => {
  if (authorInput.value.trim() !== "") {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
});

// 5. EVENT LISTENER (submit) & 8. AMBIL DATA DAN VALIDASI
bookForm.addEventListener("submit", (e) => {
  // Mencegah perilaku default form submission (reload halaman)
  e.preventDefault();

  // Mengambil data input dan menghapus spasi berlebih
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();

  // Validasi Data
  if (titleValue === "" || authorValue === "") {
    // Manipulasi TextContent & Style untuk feedback error
    errorMessage.textContent = "Error: Judul dan Penulis tidak boleh kosong!";
    errorMessage.style.color = "#e74c3c";
    errorMessage.style.display = "block";
    return;
  }

  // Jika Validasi Lolos, Buat Elemen Baru
  addNewBook(titleValue, authorValue);

  // Reset Form setelah berhasil ditambahkan
  bookForm.reset();
});

// 4. MEMBUAT ELEMEN & 9. DOM TRAVERSAL (Children/Parent)
function addNewBook(title, author) {
  // Membuat elemen