const container = document.querySelector("#container");
const btn = document.querySelector("#regrid");
//Draw the initial 16x16 grid
drawGrid(16);
//Event for the button click
btn.addEventListener("click", () =>{
    resetGrid();
    let squaresPerSide = Number(prompt("Enter the number of the squares per side (max:100)"));
    console.log(squaresPerSide);
    while(squaresPerSide>100 || squaresPerSide<=0 || isNaN(squaresPerSide)){
        squaresPerSide = Number(prompt("Invalid value! Enter the number of the squares per side (max:100)"));
    }
    drawGrid(squaresPerSide);
});

//The function that creates the grid
function drawGrid(squares){
    for(let i=0; i<(squares**2); i++){
        const grid = document.createElement("div");
        grid.style.width = container.clientWidth / squares + "px";
        grid.style.height = container.clientHeight /squares + "px";
        container.appendChild(grid);
        grid.addEventListener("mouseover",() => {
            const randomColor = getRandomColor();
            grid.style.backgroundColor = randomColor;
            grid.style.backgroundColor= randomColor;
        });
    }
}

//Reseting the grid so they don't conflict every time the users inputs values
function resetGrid(){
    container.innerHTML = "";
}
 //Create a random RGB Color 
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

