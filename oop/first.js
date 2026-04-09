// function user(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log(`${this.age}`)
//     }

// }
// let firstuser = new user("suhree", "3");
// let second = new user("biswa", 34);
// console.log(firstuser);
// console.log(second)
// firstuser.greet();

function userr(name, age) {
    this.na = name;
    this.age = age;

}
userr.prototype.search = function () {
    return this.age++;
}
userr.prototype.userdetails = function () {
    console.log(`user name is ${name}`)
}

let arr = [5, 6];
Array.prototype.hii = function () {
    console.log(arr[0])

}
// let user1 = new userr("af", 23);
// let user2 = new userr("bn", 67);
// console.log(user1.search())
arr.hii()
let str = "li    ";
String.prototype.name = function () {
    console.log(`${this.trim().length}`)
}
str.name();
let v = "gjg";
v.name();



let obj1 = {
    name: "sushree",
    age: 21
};
let obj2 = {
    name: "bkhf"

}
Object.setPrototypeOf(obj2, obj1);
console.log(obj2.age)