console.log("hii")
let button = document.getElementById("btn");
let heading = document.getElementById("head")
function C() {
    let count = 0;
    button.addEventListener("click", function () {
        heading.style.color = "green";
        console.log("button clicked", ++count)
    });
}
C()