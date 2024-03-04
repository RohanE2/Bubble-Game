var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
    // document.querySelector("#scoreval").innerHTML = score;
    document.querySelector("#addedscore").innerHTML = "+10";
    document.querySelector("#addedscore").style.color = "green";
    document.querySelector("#addedscore").style.opacity = "1";
    setTimeout(function() {
        document.querySelector("#addedscore").innerHTML = "";
    }, 1000); 
}

function decreaseScore(){
    score -=10;
    document.querySelector("#scoreval").textContent = score;
    // document.querySelector("#scoreval").innerHTML = score;
    document.querySelector("#addedscore").innerHTML = "-10";
    document.querySelector("#addedscore").style.color = "red";
    document.querySelector("#addedscore").style.opacity = "1";
    setTimeout(function() {
        document.querySelector("#addedscore").innerHTML = "";
    }, 1000);
}
function getNewHit(){
    hitrn = Math.floor(Math.random()* 10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function makeBubble(){
    var clutter = "";
for(var i = 1;i<=102;i++){
   var rn =  Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>
                                                        <h1>Your Score:${score}</h1>
                                                        Want To Play Again`;
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(details){
//    console.log(details.target);
    var clickedNum  = Number(details.target.textContent);
        if(clickedNum === hitrn){
            increaseScore();
            // addedScore();
            makeBubble();
            getNewHit();
        }else{
            if(timer != 0){
            decreaseScore();
            }
            
        }
});
runTimer();
makeBubble();
getNewHit();

let a = setTimeout(() => {
    
}, timeout);
