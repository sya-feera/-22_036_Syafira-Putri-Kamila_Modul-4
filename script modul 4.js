// untuk membuat alert //
alert("Selamat Datang di Kawaii Nendoroid!");

// untuk membuat scroll reveal. const sr yaitu konstanta sr (scroll reveal) yang nilai variabelnya tidak bisa diubah //
const sr = ScrollReveal({
    origin: "top",
    distance: '30px',
    duration: 2000,
});

// ini digunakan untuk elemen apa saja yang akan menggunakan fitur atau tampilan scroll reveal//
sr.reveal(" header, .gambar, .contact, .collection, .content, .judul-content, .banner, footer, .contact", {
   interval: 100
  }) 

/*untuk membuat scroll up*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-Up')
}

// variabel atau data pada navbar menggunakan variabel isShow bernilai salah
// tetapi data tersebut dapat berubah true jika isShow memenuhi kondisi
let isShow = false

//fungsi untuk menampilkan sidebar menggunakan const(konstanta)
function showSidebar() {
    const sidebar = document.getElementById('side-nav')
    if (isShow) {
        sidebar.style.width = "0";
        isShow = false;
//jika sidebar dalam mode desktop atau dgn lebar 0 maka tidak ditampilkan navbar.
//jika sidebar dalam mode mobile atau dengan width 100% maka navbar menjadi responsive.
    } else {
        sidebar.style.width = "100%";
        isShow = true;
    }
}