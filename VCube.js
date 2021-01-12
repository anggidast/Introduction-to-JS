function jumlahVolumeDuaKubus(a, b) {
    var vA;
    var vB;
    var total;

    vA = a ** 3;
    vB = b ** 3;

    total = vA + vB;

    return total;
}

console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(10, 15));