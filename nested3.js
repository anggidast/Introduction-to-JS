var s = '';
var k = 0;

for(var i = 0; i<10; i++) {
    for(var j = 0; j<10; j++) {
        if (k%2 == 0) {
            s += '#';    
        }
        else if (k%2 != 0) {
            s += ' ';
        }
        k++;
    }
    s += '\n';
    k++;
}
console.log(s);