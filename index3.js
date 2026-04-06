
// let arr = [3, 5, 6, 4, 8, 2, 9, 4];
// console.log(arr);
// let temp;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);


// function user(name) {
//     return `${name}`;
// }
// let result = user("lizi")
// console.log(result);



// function loggedinuser(name = "lizi") {
//     return `${name}`;
// }
// let res = loggedinuser();
// console.log(res);


let f = {
    name: "sushree",
    adding: 2
};
function user(obj) {
    return `${obj.name} ${obj.adding}`;

}
console.log(user(f));


//pass directly object in function call

function obj(anyobj) {
    return `${anyobj.name} ${anyobj.age}`;
}
console.log(obj({
    name: "sushree",
    age: 21
}));


//passing array

let arr = [2, 4, 3, 6, 8];
function arrpass(any) {
    return `${any[1]}`;
}
console.log(arrpass(arr));


//passing array in function call

function pass(any) {
    return `${any[1]}`;
}
console.log(pass([3, 6, 7, 8]));

//pass function as parameter

function get(name) {
    return `${name}`
}
function store(age = 21, name = get()) {
    console.log(age, name);
}
store(undefined, "lizi");
