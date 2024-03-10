let area = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"]
]
let char = "X"
let turn = 1




// button1.onclick = function () {
document.querySelector("table").onclick=function(event){
    let cell = event.target
    let row = cell.parentElement.rowIndex
    let column = cell.cellIndex
    // let rows = document.querySelectorAll("tr")

    // let cells = rows[row].querySelectorAll("td")
    // cell.innerHTML="!!!"
    if (area[row][column] != "X" && area[row][column] != "0") {
        area[row][column] = char
        cell.innerHTML = char
        if (char === "X") {
            cell.style.backgroundColor = "lightgreen"
            cell.style.color = "darkgreen"
        }
        else if (char === "0") {
            cell.style.backgroundColor = "lightblue"
            cell.style.color = "darkblue"
        }
        if(checkWinner()==="X")winner("X Win")
        if(checkWinner()==="0")winner("0 Win")
        console.log(checkWinner(),turn)
        if(checkWinner()==false && turn==9){
            winner("tie")
        }
        turn = turn + 1
        changeChar()
    }
}



function changeChar() {
    if (turn % 2 === 1)
        char = "X"
    else char = "0"
    turns.innerHTML = char
}

function winner(text){
    setTimeout(function() {
      alert(text)  
    }, 100);
}





function checkWinner() {
    if(area[0][0]=="X" && area[0][1]=="X" && area[0][2] == "X") return "X"
    if(area[0][0]=="0" && area[0][1]=="0" && area[0][2] == "0") return "0"

    if(area[1][0]=="X" && area[1][1]=="X" && area[1][2] == "X") return "X"
    if(area[1][0]=="0" && area[1][1]=="0" && area[1][2] == "0") return "0"

    if(area[2][0]=="X" && area[2][1]=="X" && area[2][2] == "X") return "X"
    if(area[2][0]=="0" && area[2][1]=="0" && area[2][2] == "0") return "0"

    if(area[0][0]=="X" && area[1][1]=="X" && area[2][2] == "X") return "X"
    if(area[0][0]=="0" && area[1][1]=="0" && area[2][2] == "0") return "0"

    if(area[0][2]=="X" && area[1][1]=="X" && area[2][0] == "X") return "X"
    if(area[0][2]=="0" && area[1][1]=="0" && area[2][0] == "0") return "0"

    if(area[0][0]=="X" && area[1][0]=="X" && area[2][0] == "X") return "X"
    if(area[0][0]=="0" && area[1][0]=="0" && area[2][0] == "0") return "0"

    if(area[0][1]=="X" && area[1][1]=="X" && area[2][1] == "X") return "X"
    if(area[0][1]=="0" && area[1][1]=="0" && area[2][1] == "0") return "0"

    if(area[0][2]=="X" && area[1][2]=="X" && area[2][2] == "X") return "X"
    if(area[0][2]=="0" && area[1][2]=="0" && area[2][2] == "0") return "0"

    // if(area[15][1]=="X") return "X"

    // if(area[15][1]=="0") return "0"
































    
    return false
}