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
            grid.style.backgroundColor = "#53a8b6";
            // reset the color after a short delay 
            setTimeout(() => {      
                grid.style.backgroundColor="";
            }, 600);
        });
    }
}

//Reseting the grid so they don't conflict every time the users inputs values
function resetGrid(){
    container.innerHTML = "";
}
