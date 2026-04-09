function calculate(callback) {
    return callback(4, 3)

}
function add(num1, num2) {
    console.log(num1 + num2);
}
function sub(num1, num2) {
    console.log(num1 - num2)
}
calculate(add);
calculate(sub)