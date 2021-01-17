// var penumpang = [];
var penumpang = ['Anggi', undefined, undefined, undefined, undefined];
// var penumpang = ['Anggi', 'Kuang', 'Ana', 'Jong', undefined];
// var namaPenumpang = prompt('Masukkan nama penumpang!');
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.unshift(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                /* iterasi di bawah ini untuk menghindari nama sama setelah undefined */
                for (var j = i; j < penumpang.length; j++) {
                    if (namaPenumpang == penumpang[j]) {
                        console.log(namaPenumpang + ' sudah ada di dalam angkot!');
                        return penumpang;
                    }
                }
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (namaPenumpang == penumpang[i]) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot!');
                return penumpang;
            } else if (i == penumpang.length - 1) /* hanya bisa berada pada posisi else if ini hanya jika 2 kondisi di atasnya tidak terpenuhi */ {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    function check() {
        for (var i = 0; i < penumpang.length; i++) {
            if (typeof penumpang[i] != "undefined") {
                return false;
            }
        }
        return true;
    }
    if (penumpang.length == 0 || check(true)) {
        console.log('Tidak ada penumpang di dalam angkot');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (namaPenumpang == penumpang[i]) {
                penumpang[i] = undefined;
                return penumpang;
            }
        } /*dibaris ini bisa juga pakai: else if (i == penumpang.length - 1) { */
        console.log(namaPenumpang + ' tidak ada di dalam angkot');
        return penumpang;
    }
}
//tambahPenumpang(namaPenumpang, penumpang);
console.log(penumpang);