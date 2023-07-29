alert("Now there is no adds will desract you !")
setInterval(function()
{
var buttonSkip = document.getElementsByClassName("ytp-ad-skip-button");
if(buttonSkip != undefined && buttonSkip.length > 0)
{
  console.log("Ad detected and every thing is good");
  buttonSkip[0].click();
}

}, 3000)

