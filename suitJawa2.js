function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

function putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 500) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 80);
}

let skorC = 0;
let skorP = 0;

function skor(hasil) {
    if (hasil == 'MENANG!') {
        skorP++;
    } else if (hasil == 'KALAH!') {
        skorC++;
    }
}

const pilihan = document.querySelectorAll('li img');
const iComp = document.querySelector('.img-komputer');
const info = document.querySelector('.info');
const skorc = document.querySelector('.skor-c');
const skorp = document.querySelector('.skor-p');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        putar();
        setTimeout(function () {
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            iComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
            info.innerHTML = hasil;
            skor(hasil);
            skorp.innerHTML = skorP;
            skorc.innerHTML = skorC;
            console.log(pilihanComputer);
            console.log(pilihanPlayer);
        }, 500);
    });
});

// const pGajah = document.querySelector('.gajah');
// const pOrang = document.querySelector('.orang');
// const pSemut = document.querySelector('.semut');
// const iComp = document.querySelector('.img-komputer');
// const info = document.querySelector('.info');
// pGajah.addEventListener('click', function () {
// const pilihanComputer = getPilihanComputer();
// const pilihanPlayer = pGajah.className;
// const hasil = getHasil(pilihanComputer, pilihanPlayer);
// iComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
// info.innerHTML = hasil;
// console.log(pilihanComputer);
// console.log(pilihanPlayer);
// });

// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     iComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     info.innerHTML = hasil;
//     console.log(pilihanComputer);
//     console.log(pilihanPlayer);
// });

// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     iComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     info.innerHTML = hasil;
//     console.log(pilihanComputer);
//     console.log(pilihanPlayer);
// });