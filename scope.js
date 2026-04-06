function a() {
    var b = 10;
    function c() {
        console.log(b);
    }
    c();
}
a();

//if b is defined outside the function 

function s() {
    function d() {
        console.log(b);
    }
    d();
}
var b = 111;
s();