alert('tebak angka dari 1 sampai 10! \nKamu punya 3 kali kesempatan.')

var comp = Math.random();
var kondisi = true;
var kesempatan = 2;
while (kondisi) {
// menangkap pilihan player
var p = prompt('Masukkan angka tebakan!');

// menangkap pilihan computer
    if(comp <= 0.1) {
        comp = 1;
    } else if(comp >= 0.11 && comp <= 0.2) {
        comp = 2;
    } else if(comp >= 0.21 && comp <= 0.3) {
        comp = 3;
    } else if(comp >= 0.31 && comp <= 0.4) {
        comp = 4;
    } else if(comp >= 0.41 && comp <= 0.5) {
        comp = 5;
    } else if(comp >= 0.51 && comp <= 0.6) {
        comp = 6;
    } else if(comp >= 0.61 && comp <= 0.7) {
        comp = 7;
    } else if(comp >= 0.71 && comp <= 0.8) {
        comp = 8;
    } else if(comp >= 0.81 && comp <= 0.9) {
        comp = 9;
    } else if(comp >= 0.91 && comp <= 1){
        comp = 10;
    }
    console.log(comp);

    // menentukan rules
    var hasil = '';
    var gagal = '';
    if(kesempatan >= 1) {
        if(p == comp) {
            hasil = 'Selamat, jawaban anda benar!\nAnkga yang dicari adalah ' + comp;
            kondisi = false;
        } else if(p < comp) {
            hasil = 'Jawaban anda terlalu rendah!\nKesempatan anda ' + kesempatan + ' kali lagi';
            kesempatan--;
        } else if(p > comp) {
            hasil = 'Jawaban anda terlalu tinggi!\nKesempatan anda ' + kesempatan + ' kali lagi';
            kesempatan--;
        } else if(p = String) {
            hasil = 'Masukkan angka 1-10';
        }
    } else if(p < comp && kesempatan < 1) {
        hasil = 'Jawaban anda terlalu rendah!\nKesempatan anda habis';
        gagal = 'Anda gagal!\nAngka yang dicari adalah ' + comp;
        kondisi = false;
    } else if(p > comp && kesempatan < 1) {
        hasil = 'Jawaban anda terlalu tinggi!\nKesempatan anda habis';
        gagal = 'Anda gagal!\nAngka yang dicari adalah ' + comp;
        kondisi = false;
    } 

// menampilkan hasil
alert(hasil/* + '\nKamu masih punya ' + n + ' kesempatan.'*/);
// tanya = confirm('Main lagi?');
if(kesempatan < 1) {
    alert(gagal)
}
}
// alert('Terima kasih telah bermain!');