setTimeout(function () {
    console.log("i am the call back function which is separate in a memory after time expire i will print")
}, 2000)

function x(g) {
    console.log("hii");
    g();
}
x(function y() {
    console.log("heelo");
})