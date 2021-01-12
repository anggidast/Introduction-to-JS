var jmlAngkot = 10;
var angkotOn = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotOn) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    }
    else {
        console.log('Angkot No. ' + noAngkot + ' tidak beroperasi');
    }
}