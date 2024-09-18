
let gold = 0 
let mud = 0

let goldScoreBoard = document.getElementById("goldScore")
let mudScoreBoard = document.getElementById("mudScore")


function dig(location){

    let grid = document.getElementById(location)
    let luck = Math.random()

    if ( luck < 0.5 ){
        mud++ ;
        mudScoreBoard.innerText = mud;
        grid.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTl4ewLw-IUWxcMzKX_TkC8KNY6aeES8WC0rL1-Kvo_VDU-k7Sb3RVxnCjCjBTmmQI4g&usqp=CAU"    
    }

    else {
        gold++;
        goldScoreBoard.innerText = gold;
        grid.src = "https://cdn.openart.ai/stable_diffusion/ff2f77b6a4255913848e4f1bcf15a43bbcecc7ff_2000x2000.webp"
    }

    if ( gold > 4 ){
        window.location.href = "win.html"
    }
    
    if ( mud > 4 ){
        location.href = "loss.html"
    }

}
