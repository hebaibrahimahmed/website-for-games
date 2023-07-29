
 var kicker=document.getElementById("player");
 var ball=document.getElementById("ball");

var stus=document.getElementById("status");
function move()
{
ball.style.animation="ballMove 3s";


}
function moveUp()
{
  ball.style.animation="ballMoveUp 3s";

}
function moveDown()
{
  ball.style.animation="ballMoveDown 3s";

}
var arrUp=document.getElementById("arrow-up");
var arrGround=document.getElementById("arrow-ground");
var arrDown=document.getElementById("arrow-down");
function notify()
{
  arrUp.style.animation="arrNotifyUP 5s";
  arrGround.style.animation="arrNotifyG 5s";
  arrDown.style.animation="arrNotifyDn 5s";

}
var score=0;
const element = document.getElementById("dispScore"); 
let t = element.getAttribute("class"); 
document.getElementsById("pp").innerHTML="fi";


  //----------------- FB sound -------------------------------------
  
  function FBsound_play()
  {
   document.getElementById("FBsound").play();
   document.getElementById("FBsound-img").src='muted.jpg';
  }

  
  function FBsound_stop()
  {
   document.getElementById("FBsound").pause();
   document.getElementById("FBsound-img").src='unMuted.jpg';
  }


