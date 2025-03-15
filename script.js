const container = document.getElementById("container");
let size = 16;
const btn = document.getElementById("newGrid");

createGrid(size);
btn.addEventListener("click", () => {
    size = parseInt(prompt("How many squares do you want per side for the new grid?"))
    if(size > 100 || size <= 0) {
        alert("Invalid input size!");
        createGrid(0);
    }
    else {
        createGrid(size);
    }
});

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 640/size;

    for(let row = 0; row < size; row++) {
        for(let col = 0; col < size; col++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
        }
    }
}
