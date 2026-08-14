const container = document.querySelector("#container");

for(let i=0; i<256; i++){
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.addEventListener("mouseover",() => {
        grid.style.backgroundColor = "#53a8b6";
        // reset the color after a short delay 
        setTimeout(() => {      
            grid.style.backgroundColor="";
        }, 600);
    });
}

const btn = document.querySelector("#regrid");
btn.addEventListener("click", () =>{
    let x = prompt("Enter the number of the squares per side (max:100)");
    while(x>100 || x<=0){
        x = prompt("Invalid value! Enter the number of the squares per side (max:100)");
    }

});
