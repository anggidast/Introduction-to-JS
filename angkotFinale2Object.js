function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        function check() {
            for (var i = 0; i < penumpang.length; i++) {
                if (typeof penumpang[i] != "undefined") {
                    return false;
                }
            }
            return true;
        }
        if (this.penumpang.length == 0 || check(true)) {
            alert('Angkot masih kosong!');
            return false; /* keluar dari function */
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (namaPenumpang == this.penumpang[i]) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return penumpang;
                }
            }
            console.log(namaPenumpang + ' tidak ada di dalam angkot');
            return penumpang;
        }
    }
}

var angkot1 = new Angkot('Anggi Dastariana', ['Kutabumi', 'St. Tangerang'], [], 0);
var angkot2 = new Angkot('Kuang Jong', ['Serpong', 'Kalideres'], [], 0);