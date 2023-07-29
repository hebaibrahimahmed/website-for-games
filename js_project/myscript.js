
// const stopButton = document.getElementById("stop");
 let match=0;

function startgame(){
  document.querySelector(".control-buttons span").onclick = function () {

    let yourName = prompt("Whats Your Name?");

    if (yourName == null || yourName == "") {

      document.querySelector(".name span").innerHTML = 'Unknown';
    } else {
      document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-buttons").remove();
    timer();
  }};
  startgame();
  
////////////////////////////////////////////////////////

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
// hier i make an empty array with the length of our elements 
let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange);
shuffle(orderRange);
// loop on the array elements or blocks
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener('click', function () {
    flipBlock(block);

  });

});


function flipBlock(selectedBlock) {

  // Add Class is-flipped
  selectedBlock.classList.add('is-flipped');
  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  // If Theres Two Selected Blocks
  if (allFlippedBlocks.length === 2) {

    stopClicking();

    // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

  }

}

// Stop Clicking Function
function stopClicking() {

  // Add Class No Clicking on Main Container
  blocksContainer.classList.add('no-clicking');

  // Wait Duration
  setTimeout(() => {

    // Remove Class No Clicking After The Duration
    blocksContainer.classList.remove('no-clicking');

  }, duration);

}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

  let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');
    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');
    match+=2;
    document.getElementById('success').play();
    if(match==12)
    {
      setTimeout(function(){
        alert("WOW You Win ,Play again");
      location.reload();

      },1000);
      
      
    }

  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(() => {
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
    }, duration);
    document.getElementById('fail').play();
  }

 

}
 /////////// shuffle function

function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current);
    // Decrease Length By One
    current--;
    // [1] Save Current Element in Stash
    temp = array[current];
    // [2] Current Element = Random Element
    array[current] = array[random];
    // [3] Random Element = Get Element From Stash
    array[random] = temp;

  }
  return array;
}
//// timer ////

  var seconds = 60;
  var minutes = 0;
  var countdown=seconds;

  //var countdown =60;
     var time
   function timer() {
    seconds = 60;
    minutes = 0;
    countdown=seconds;
     time = setInterval(Starttimer, 1000);
  }

  function Starttimer() {
    
    //var countdown = document.getElementById("time").innerHTML;

    if (countdown <= -1) {

      alert("Game Over please try again");

      clearInterval(time);
      location.reload();
    }else{
      countdown--;
    document.getElementById("time").innerHTML="00:"+seconds;
    seconds--;
    }
   
    
  }
  
/////////////////////////////////////////////////

function stopgame(){
        clearInterval(time);
        location.reload();
}

  