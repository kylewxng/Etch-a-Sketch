const container = document.getElementById("container");
let size = 16;

for(let row = 0; row < size; row++) {
    for(let col = 0; col < size; col++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

const btn = document.getElementById("newGrid");

btn.addEventListener("click", () => {
    size = parseInt(prompt("How many squares do you want per side for the new grid?"))
    if(size > 100) {
        throw new Error("Input is too big");
    }
    console.log(size);
});
