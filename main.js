

var array =  [1, 2, 3, 4] ;
var target = 1;

for( let i=0 ; i<= array.length - 1 ; i++) {
    if ((array[i+1] - array[i] === target)) {
        console.log(array[i+1],array[i]);
    }
}
