console.log("Starting");

let Count = 0;

let counter = document.querySelector("h1");

let decrease = document.querySelector(".decrease").addEventListener("click", () => {
    Count = Count - 1;
    counter.textContent = Count;
  });
let reset = document.querySelector(".reset").addEventListener("click", () => {
  Count = Count = 0;
  counter.textContent = Count;
});
let increase = document.querySelector(".increase").addEventListener("click", () => {
    Count = Count += 1;
    counter.textContent = Count;
  });
