var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var started=false;
var level=0;
$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);


});

function nextSequence(){
    userClickedPattern=[]
    level+=1;
    $("#level-title").text("Level " + level);
    var x=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[x];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    
}
function checkAnswer(currentLevel){
if (userClickedPattern[currentLevel]===gamePattern[currentLevel])
{
    if(userClickedPattern.length===gamePattern.length)
    {
        setTimeout(function(){
            nextSequence();

        },1000);
    }
}
else{
playSound("wrong");
$("body").addClass("game-over");
setTimeout(function (){
    $("body").removeClass("game-over");
},200);
$("#level-title").text("Game Over, Press Any Key to Restart");
startover();
}
}

function playSound(name){
    var z=new Audio("sounds/"+ name +".mp3");
        z.play();
}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    },100);
}
$(document).keydown(function(event){
    if(!started)
    {
        $("h1").text("Level "+ level);
        nextSequence();
        started=true;
    }
    
    
    
})
function startover(){
    level=0;
    gamePattern=[];
    started=false;
}

