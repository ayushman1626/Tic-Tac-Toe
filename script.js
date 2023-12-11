let boxes = document.querySelectorAll(".box");
let winnerText = document.querySelector(".winner");
let start = document.querySelector(".newgame")
let reset = document.querySelector(".reset")
let player0 = true;
let winflag = 0;
let count = 0;
const wincase = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const drawTask = () =>{
    winnerText.innerText = `The match is Draw`;
    winnerText.classList.remove("hide");
    start.classList.remove("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0) {
            box.innerText = "X";
            player0 = false;
            console.log("x");
        }
        else {
            box.innerText = "O";
            player0 = true;
            console.log("0");
        }
        box.disabled = true;
        count++;
        
        if(count === 9 && winflag === 0){
            drawTask();
        }
        checkWinner();
    })
});

const winTask = (winner) =>{
    winnerText.innerText = `The winner of the match is Player ${winner}`;
    winnerText.classList.remove("hide");
    start.classList.remove("hide");
    boxes.forEach((box) => {
       box.disabled = true;
    })
}



const checkWinner = () => {
    for (let pattern of wincase) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2!= "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                winTask(pos1);
                winflag = 1;
            }
        }
    }
}

reset.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        count = 0;
        box.disabled = false;
        if(player0)
             player0 = false;
        else
            player0 = true;
        })
});

start.addEventListener("click", ()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        count = 0;
        box.disabled = false;
        if(player0)
             player0 = false;
        else
            player0 = true;
        })
    winnerText.classList.add("hide")
    start.classList.add("hide");
})