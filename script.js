const container = document.querySelector("#container");


for(let i=0; i<256; i++){
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.addEventListener("mouseover",() => {
        grid.style.backgroundColor = "#497285";
        setTimeout(() => {
            grid.style.backgroundColor="";
        }, 500);
    });
}

