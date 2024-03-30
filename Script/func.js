/* Membuat fungsi untuk alert login*/
function auth() {
    // Menampilkan notifikasi menggunakan SweetAlert2
    Swal.fire({
        title: "Success!", // Judul notifikasi
        text: "Login Berhasil", // Pesan dalam notifikasi
        icon: "success", // Jenis ikon notifikasi (dalam hal ini, ikon sukses)
        showConfirmButton: false, // Tidak menampilkan tombol OK
        timer: 1500 // Durasi tampilan notifikasi dalam milidetik (misalnya, 1500ms = 1,5 detik)
    }).then(() => {
        // Setelah notifikasi ditutup, arahkan ke halaman "home.html"
        window.location.assign("Main.html");
    });
}