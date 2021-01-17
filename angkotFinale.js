// var penumpang = [];
// var penumpang = ['Anggi', 'Asta', undefined, undefined, undefined];
var penumpang = ['Anggi', 'Kuang', 'Asta', 'Ana', 'Jong'];
var p = prompt('Masukkan nama penumpang!');
var tambahPenumpang = function (namaPenumpang, penumpang) {
    function check() {
        for (var i = 0; i < 5; i++) {
            if (typeof penumpang[i] != "string") {
                return false;
            }
        }
        return true;
    }

    function same() {
        for (var i = 0; i < 5; i++) {
            if (p == penumpang[i]) {
                return false;
            }
        }
        return true;
    }

    if (penumpang.length == 0) {
        penumpang.unshift(p);
        return penumpang;
    } else {
        for (var i = 0; i < 5; i++) {
            if (penumpang[i] == undefined) {
                for (var j = i; j < 5; j++) {
                    if (p == penumpang[j]) {
                        alert(p + ' sudah ada di dalam angkot!');
                        return penumpang;
                    }
                }
                penumpang.splice(i, 1, p);
                return penumpang;
            } else if (p == penumpang[i]) {
                alert(p + ' sudah ada di dalam angkot!');
                return penumpang;
            } else if (check(true) && same(true)) {
                penumpang.push(p);
                return penumpang;
            }
        }
    }
}
tambahPenumpang(p, penumpang);
console.log(penumpang);