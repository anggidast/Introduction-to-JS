var s = '';
var l = 0;
for(var i=5; i>=0; i--) {
    for(var j = 0; j<=i; j++) {
        s += ' ';
    }
    l++;
    for(var k=0; k<l; k++) {
        if (k%2 == 0) {
            s += 1;    
        }
        else if (k%2 != 0) {
            s += ' ';
        }
    }
    l++;
    s += '\n';
}

console.log(s);