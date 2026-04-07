let obj = {
    nam: "sushree",
    username: {
        firstname: "sushree"

    }
}
console.log(obj.username)

//for combinig two object
let obj1 = {
    name: "sushree"
}
let obj2 = {
    lastname: "pradhan"
}
// let obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) 

//using spread operator
let obj4 = { ...obj1, ...obj2 };
console.log(obj4)

//array of objects
let arr = [
    {
        name: "sushree"
    },
    {
        name: "biswa"
    }
];
arr.map((item) => {
    console.log(item);
})

// console.log(Object.keys(arr));
// console.log(Object.values(arr))
console.log(Object.entries(arr))
console.log(arr[0].hasOwnProperty("name"))
// let ans = arr[0].name;
// console.log(ans);
