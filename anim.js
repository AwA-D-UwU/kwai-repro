setInterval(1000,playAudio);
var x = document.getElementById("vmusic"); 
function playAudio() { 
    if (x.paused){
    x.play();
    document.getElementById("vmplay").className = "glyphicon glyphicon-pause";
    
  }
    else{ 
    x.pause();
    document.getElementById("vmplay").className = "glyphicon glyphicon-play";

    }
} 
