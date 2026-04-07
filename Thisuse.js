let obj = {
    name: "sushree",
    age: 21,
    welcome: function () {
        console.log(`${this.name} is my name`)
        console.log(this);
    }
}
obj.welcome();
obj.name = "lizi";
obj.welcome();
console.log(this);


//arrow function
// let sum = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(sum(5, 6));


//another way
let sum = (n1, n2) => n1 + n2;
console.log(sum(3, 4));

//when we want to pass object to arrow function

let obj1 = () => ({ name: "sushree" });
console.log(obj1());


let arr = [2, 3, 4];
let sear = arr.map((item) => item * 2);
console.log(sear);


let fync2 = (num2, num3) => (num2 * num3);
console.log(fync2(3, 5))