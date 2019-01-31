// var array = [2, 10, 15, 11, 14, 13, 16];

// for (var i = 0; i < array.length - 1; i++) 
// {
//     for (var j = i + 1; j < array.length - 1; j++) 
//     {
//         if (array[i] > array[j]) 
//         {
//             temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
//     console.log(array[i] + ",");
//     console.log(array);
// }
// // console.log("ascending Order:");
// // for (var i = 0; i < array.length - 1; i++) 
// // {
  
// // }
// // console.log(array);


var array =  [1, 2, 3, 4] ;
var target = 1;

for( let i=0 ; i<= array.length - 1 ; i++) {
    if ((array[i+1] - array[i] === target)) {
        console.log(array[i+1],array[i]);
    }
}
