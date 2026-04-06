// let i = 1;
// while (i <= 8) {
//     if (i == 4) {
//         i++;
//         continue;

//     }
//     console.log(i);
//     i++;
// }

// let st = "pologssgd bhs";
// let d = st.split(" , ");
// console.log(d);

// let f = "hii i am sushr";
// let rev = f.split(" ").reverse().join(" ");
// console.log(rev);

// let arr = [1, 2, "ghwr"];
// arr.push("bkjfj");
// console.log(arr); 
// arr.push(5);
// arr.push(7);
// console.log(arr);
// // let newarr = arr.slice(1, 4);/
// // console.log(newarr);
// arr.splice(1, 2, "ly");
// console.log(arr);


// let arr = [2, 4, 6];

// let newarr = arr.map((item) => {
//     return item * item;
// })
// console.log(newarr);


// let f = [4, 6, 7];
// let g = f.filter((arr) => {
//     if (arr % 3 == 0) {
//         return arr;
//     }
// })
// console.log(g);



// let gh = [
//     {
//         name: "sushree",
//         age: 21
//     },
//     {
//         name: "suh",
//         age: 67
//     },
// ];
// let bh = gh.filter((search) => {
//     if (search.age > 20) {
//         return search;
//     }
// })
// console.log(bh);


// let arr = [2, 4, 3, 7, 9];
// arr.sort();
// console.log(arr);


let arr = [3, 5, 6, 4, 8, 2, 9, 4];
let temp;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);


