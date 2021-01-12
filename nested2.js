var s = '';
var l = 0;
for(var i=5; i>=0; i--) {
    for(var j = 0; j<=i; j++) {
        s += ' ';
    }
    l++;
    for(var k=0; k<l; k++) {
        s += '*';
    }
    l++;
    s += '\n';
}
l-=2;
for(var i=1; i<=5; i++) {
    for(var j = 0; j<=i; j++) {
        s += ' ';
    }
    l--;
    for(var k=0; k<l; k++) {
        s += '*';
    }
    l--;
    s += '\n';
}

console.log(s);