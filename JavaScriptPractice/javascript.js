// l
// let x=3;
// let y = 4;
// x=y;
// console.log(x);

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//     if(btn.textContent === "Start machine") {
//         btn.textContent = "Stop machine";
//         txt.textContent = "The machine is running";
//     } else {
//         btn.textContent = "Start machine";
//         txt.textContent = "The machine is stopped";
//    }
//}

let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here
const num1 = 4;
const num2 = 8;
const num3 = 12; 
const num4 = 8;

let sum =num1+ num2;
let difference = num3 - num4

finalResult = sum * difference;
evenOddResult = finalResult % 2;


//don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);