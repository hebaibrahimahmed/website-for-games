var board;
var rows = 4;
var columns = 4;
var score = 0;


window.onload = function () {
    setGame();
}

function setGame() {

    // board = [
    //     [2, 0, 2, 0],
    //     [0, 4, 4, 0],
    //     [8, 0, 0, 8],
    //     [32, 16, 16, 0]
    // ]

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    //console.log(board);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {   //<div id="0-0"></div>
            let tiles = document.createElement("div");
            tiles.id = row.toString() + "-" + col.toString();
            let num = board[row][col];
            updateTile(tiles, num);
            document.getElementById("board").append(tiles);
            // console.log(tiles);
        }
    }

    setTwo();
    setTwo();
}





function updateTile(tiles, num){ 
    tiles.innerText = "";
    tiles.classList.value = "";
    tiles.classList.add("tiles");  //classList means the collection of class "tiles"
    if (num > 0) {
        tiles.innerText = num;
        if (num <= 4096) {
            tiles.classList.add("x" + num.toString());
        }
        else {
            tiles.classList.add("x8192");
        }
    }

}

document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
        setTwo();
    }
    else if (e.code == "ArrowRight") {
        slideright();
        setTwo();

    }
    else if (e.code == "ArrowUp") {
        slideUp();
        setTwo();

    }
    else if (e.code == "ArrowDown") {
        slideDown();
        setTwo();

    }
  document.getElementById("score").innerText =score;

})

//--------------------------------------------------lift_side-------------------------------------------
function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let rows = board[r];
        rows = slide(rows);
        board[r] = rows;

        for (let c = 0; c < columns; c++) {
            let tiles = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tiles, num);
        }


    }
}

function slide(rows) {
    rows = filterZeros(rows);  //[2,2,2]

    for (let i = 0; i < rows.length - 1; i++) {
        if (rows[i] == rows[i + 1]) {
            rows[i] *= 2;
            rows[i + 1] = 0;
            score += rows[i];
        } //[2,2,2] ===> [4,0,2]
    }
    rows = filterZeros(rows); //[4,2];

    while (rows.length < columns) {
        rows.push(0);  //[4,2,0,0]
    }
    return rows;
}

function filterZeros(rows) {
    let row = rows.filter(num => num != 0);
    return row;   // create new array without zeros
}

//----------------------------------------right_side-----------------------------------
function slideright() {
    for (let r = 0; r < rows; r++) {
        let rows = board[r];
        rows.reverse();
        console.log(rows.reverse);
        rows = slide(rows);
        rows.reverse();
        board[r] = rows;

        for (let c = 0; c < columns; c++) {
            let tiles = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tiles, num);
        }

    }
}

//------------------------------------------------upward----------------------------------------------------------
function slideUp() {
    for (let col = 0; col < columns; col++) {
        let row = [board[0][col], board[1][col], board[2][col], board[3][col]];
        row = slide(row);

        board[0][col] = row[0];   ///try index in col....
        board[1][col] = row[1];
        board[2][col] = row[2];
        board[3][col] = row[3];




        for (let r = 0; r < rows; r++) {

            let tiles = document.getElementById(r.toString() + "-" + col.toString());
            let num = board[r][col];
            updateTile(tiles, num);
        }

    }
}
//----------------------------------------------downward-----------------------------------------

function slideDown() {
    for (let col = 0; col < columns; col++) {
        let row = [board[0][col], board[1][col], board[2][col], board[3][col]];
        row.reverse();
        row = slide(row);

        // board[0][col] = row[0];   ///try index in col....
        // board[1][col] = row[1];
        // board[2][col] = row[2];
        // board[3][col] = row[3];

        row.reverse();

        for (let r = 0; r < rows; r++) {
            board[r][col] = row[r];
            let tiles = document.getElementById(r.toString() + "-" + col.toString());
            let num = board[r][col];
            updateTile(tiles, num);
        }
    }
}

//---------------------------------------------
function emptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0)
                return true;
             else if(board[r][c]==16)
             {
                alert ("Game over");
             }   
        }
    }
    return false;
}

  

function setTwo() {
    if (!emptyTile()) {
        return;
    }

    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);  
        let c = Math.floor(Math.random() * columns);
        

        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tiles = document.getElementById(r.toString() + "" + c.toString());
            tiles.innerText="2";
            tiles.classList.add("x2");
            found = true;
        }

    }

}

