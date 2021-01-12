var jmlAngkot = 10;
var angkotOn = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotOn) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    }
    else if(noAngkot === 8 || noAngkot === 10) 
    {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    }
    else {
        console.log('Angkot No. ' + noAngkot + ' tidak beroperasi');
    }
}