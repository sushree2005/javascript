function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
let ans = x();
ans();

function q() {
    let u = 7;
    function x() {
        let x = 9;
        function y() {
            console.log(x, u)
        }
        x = 8;
        return y;
    }
    let ans = x();
    ans();
}
q()


let a = 10;
setTimeout(function () {
    console.log(a);
}, 1000)

for (let i = 1; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}


//using var

for (var i = 1; i < 3; i++) {
    function x(i) {
        setTimeout(() => console.log(i), 1000)
    }
    x(i);
}
