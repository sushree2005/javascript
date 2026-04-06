// console.log(a);
console.log(b);
let a = 10;
var b = 20;
// const a = 10;

//shadowing
var b = 10;
{
    var b = 30;
}
console.log(b);//shadowing

let c = 10; {
    let c = 20;
}
console.log(c);

{
    const f = 10;
    {
        console.log(f);
    }
}