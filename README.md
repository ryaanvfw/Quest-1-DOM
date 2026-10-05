# Quest-1-DOM

1. querySelector dan querySelectorAll
Pengertian: Metode untuk memilih (seleksi) elemen HTML berdasarkan selektor CSS.
Cara Kerja:

querySelector() mengembalikan elemen pertama yang cocok dengan selektor.
querySelectorAll() mengembalikan NodeList (kumpulan elemen) dari semua elemen yang cocok.

2. innerHTML, textContent, dan innerText
Pengertian: Properti untuk mengambil atau mengubah konten di dalam elemen HTML.
Cara Kerja:

innerHTML: Membaca dan merender sintaks HTML (dapat mengeksekusi tag HTML).
textContent: Mengambil seluruh teks murni (termasuk teks yang tersembunyi oleh CSS).
innerText: Mengambil teks murni yang terlihat di layar (memperhatikan styling CSS).

3. Manipulasi Atribut dan Style
Pengertian: Mengubah properti CSS langsung via JavaScript atau mengelola atribut HTML (src, disabled, data-*, class).
Cara Kerja:

Properti style mengubah inline style.
setAttribute() & getAttribute() mengelola atribut elemen.
classList (add, remove, toggle) mengelola kelas CSS.

4. Membuat & Menghapus Elemen
Pengertian: Menambahkan elemen HTML baru secara dinamis ke DOM atau menghapus elemen yang ada.
Cara Kerja:

document.createElement() membuat node elemen baru.
appendChild() atau append() memasukkan elemen ke dalam Induk (Parent).
remove() menghapus elemen dari DOM.

5. Event Listener: click, input, submit
Pengertian: Fungsi penangkap interaksi pengguna (klik, mengetik, atau mengirim form).

Cara Kerja: addEventListener('nama_event', callback_function) mendaftarkan handler saat event dipicu.

6. Event Bubbling & stopPropagation
Pengertian:

Event Bubbling: Fenomena di mana event pada elemen anak akan merambat naik ke elemen-elemen induknya.
stopPropagation(): Metode untuk menghentikan perambatan event tersebut.

7. Event Delegation
Pengertian: Teknik memasang 1 Event Listener pada elemen induk untuk mengelola event dari semua elemen anak (termasuk elemen yang ditambahkan secara dinamis di masa mendatang).

Cara Kerja: Memanfaatkan event bubbling dengan memeriksa e.target pada elemen induk.

8. Ambil Data dan Validasi
Pengertian: Mengambil nilai dari elemen formulir dan mengecek kelayakan data sebelum diproses.

Cara Kerja: Membaca properti .value, membersihkan whitespace dengan .trim(), dan menampilkan feedback jika data tidak valid.

9. DOM Traversal: Parent dan Children
Pengertian: Navigasi antar-node elemen HTML dalam struktur hierarki DOM.

Properti Utama:
parentElement: Mengakses elemen induk.
children: Mengakses daftar elemen anak (HTMLCollection).
firstElementChild / lastElementChild: Mengakses anak pertama atau terakhir.
nextElementSibling / previousElementSibling: Mengakses elemen saudara kandung.
