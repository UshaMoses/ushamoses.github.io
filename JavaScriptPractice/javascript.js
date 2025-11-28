// l
// let x=3;
// let y = 4;
// x=y;
// console.log(x);

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if(btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine is running";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stopped";
    }
}