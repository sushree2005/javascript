let arr = [2, 4, 5];
let area = function (arr) {
    let search = arr.map((item) => {
        return Math.PI * item * item;
    })
    return search;
}
console.log(area(arr));

//passing argument 

let arrr = [3, 6, 8];
let first = function (rad) {

    return Math.PI * rad * rad;
}
let cirm = function (arr) {
    return 2 * Math.PI * arr * arr
}
// let sec = function (arrr, logic) {
//     const output = [];
//     for (let i = 0; i < arrr.length; i++) {
//         output.push(logic(arrr[i]));
//     }
//     return output;

// }
// console.log(sec(arrr, first));
// console.log(sec(arrr, cirm));

//using map
console.log(arr.map(cirm)); 