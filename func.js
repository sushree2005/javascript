//function statement
function c() {
    console.log("hii this is function statement");
}
c();

//function expression
let expression = function () {
    console.log("function expression")
}
expression();

//anynomus
let v = function () {
    console.log("always anynomus function store as avalue in a varriable");
}
v();
//pass function(anynomus) as parameter

let val = function (anynoum) {
    console.log("passed function");
    console.log(anynoum);
}
val(function () {

})



//pased parametr
function h(get) {
    console.log(typeof get);
    get();
}

h(function () {
    console.log("hii");
});

//passing function statement
function statement(s) {
    s();
}
statement(function pass() {
    console.log("hii");
});

//function return



function solve() {
    return function get(num) {
        console.log(num);
    };
}

let fn = solve();
fn(10); // Output: 10


//use function in object

let obj = {
    nae: "suhree",
    work: function () {
        return "working";
    }
}
console.log(obj.work());


function gett(num) {
    console.log(num);
}
function u(age = 21, gett) {
    return `${age} ${gett}`
}
console.log(u(undefined, "hii"));