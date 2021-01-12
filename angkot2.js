var jmlAngkot = 10;
var angkotOn = 6;
var noAngkot = 1;
while(noAngkot <= angkotOn) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
noAngkot++;
}
for(noAngkot = angkotOn+1 ; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan tidak baik');
}