// var penumpang = [];
// var penumpang = ['Anggi', 'Asta', undefined, undefined, undefined];
var penumpang = ['Anggi', 'Kuang', undefined, 'Ana', 'Jong'];
var namaPenumpang = prompt('Masukkan nama penumpang!');
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.unshift(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < 5; i++) {
            if (penumpang[i] == undefined) {
                /* iterasi di bawah ini untuk menghindari nama sama setelah undefined */
                for (var j = i; j < 5; j++) {
                    if (namaPenumpang == penumpang[j]) {
                        alert(namaPenumpang + ' sudah ada di dalam angkot!');
                        return penumpang;
                    }
                }
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (namaPenumpang == penumpang[i]) {
                alert(namaPenumpang + ' sudah ada di dalam angkot!');
                return penumpang;
            } else if (i == penumpang.length - 1) /* hanya bisa berada pada posisi else if ini hanya jika 2 kondisi lainnya di atas tidak terpenuhi */ {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}
tambahPenumpang(namaPenumpang, penumpang);
console.log(penumpang);