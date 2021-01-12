function volumeKubus(a) {
    var v = a ** 3;

    return v;
}

function jumlahVolumeDuaKubus(a, b) {
    var total = a + b;

    return total;
}

var a = 8;
var b = 3;
var total = jumlahVolumeDuaKubus(volumeKubus(a), volumeKubus(b));
console.log(total);