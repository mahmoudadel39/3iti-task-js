var myColor = document.querySelector("#color")
var btn = document.querySelector("#id")
var numCircle
var canvas = document.querySelector("#myCanvas")
var context = canvas.getContext("2d");

var x;
var y ;




function chang(){
    numCircle =Math.floor(  Math.random()*10+1)
    console.log(numCircle)
while(numCircle>0){
    x=Math.random()*750+40;
    y =Math.random()*400+38;
    context.beginPath();
    context.strokeStyle= myColor.value
    context.arc(x,y,30,0,2* Math.PI);
   
   
   context.stroke()

numCircle--;
}


}

