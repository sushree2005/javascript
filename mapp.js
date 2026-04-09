let arr = [4, 5, 7, 8];
let output = arr.map((item) => {
    return item * 2;
})
console.log(output);

//binary
let ar = [4, 6, 9];
let outpu = ar.map((item) => {
    return item.toString(2);
})
console.log(outpu)

//reduce
let array = [4, 6, 8];
let max = array.reduce((acc, cur) => {
    acc = cur > acc ? cur : acc;
    return acc;

}, 4)
console.log(max)

//combine two value of a object


let combine = [
    {
        fname: "sushree",
        lname: "pradhan"
    },
    {
        fname: "muna",
        lname: "sethy"
    }
];
let op = combine.reduce((acc, cur) => {
    acc.push(cur.fname + " " + cur.lname)
    return acc;
}, [])
console.log(op)

let res = combine.map((name, laname) => {
    return name.fname + " " + name.lname;
})
console.log(res);


let all = [
    {
        fname: "sushree",
        age: 21
    },

    {
        fname: "pradhan",
        age: 23
    },

    {
        fname: "muna",
        age: 23
    }
];
// let result = all.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(result)

//first name all the people whose age is 23

let result = all.reduce((acc, curr) => {
    if (curr.age == 23) {
        acc.push(curr.fname);
    }
    return acc;
}, [])
console.log(result)


