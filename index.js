var newarr=[];
var oldarr=[];
var buttoncolor=["red","yellow","green","blue"];
var level=0;
var initial=false;

function animat(cc)
{

 $("#"+cc).addClass("pressed");
 setTimeout(function(){
     $("#"+cc).removeClass("pressed");
 },300);

}

function soun(jj)
{
    var t=new Audio("sounds/"+jj+".mp3");
    t.play();
}

function getsequence()
{
    oldarr=[];
    level=level+1;
    $("h1").text("Level "+level);
var k=Math.floor(Math.random()*4);
var chosencolor=buttoncolor[k];
newarr.push(chosencolor);
animat(chosencolor);

soun(chosencolor);
}

$(document).on("keydown",function(){
    if(!initial)
{
    $("h1").text("Level "+level);
    
    getsequence();
    initial=true;
}
})

$(".btn").on("click",function(){
    var idcolor=$(this).attr("id");
    oldarr.push(idcolor);
    animat(idcolor);
    soun(idcolor);
    checkans(oldarr.length-1);
    
});
function checkans(hj)
{
    if(oldarr[hj]===newarr[hj])
    {
        if(oldarr.length===newarr.length)
        {
            setTimeout(getsequence(),1000);
        }

    }
    else{
        soun("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}
function startOver()
{
    initial=false;
    newarr=[];
    level=0;
}
