function cetakAngka(n) {
    if (n === 0) {
        /* if berikut adalah base case */
        return; /* jika terpenuhi maka rekursif berhenti */
    }
    console.log(n);
    cetakAngka(n - 1);
}

cetakAngka(10);