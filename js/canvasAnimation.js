var c = document.getElementById("artCanvas");
var ctx = c.getContext("2d");

var summerSkyGrad = ctx.createLinearGradient(0, 0, 0, 300);
summerSkyGrad.addColorStop(0, "lightblue");
summerSkyGrad.addColorStop(1, "#4498ff");
var grassGrad = ctx.createLinearGradient(0, 250, 0, 300);
grassGrad.addColorStop(0, "#6fc960");
grassGrad.addColorStop(1, "#58a54b");
var mountainGrad = ctx.createLinearGradient(0, 250, 0, 120);
mountainGrad.addColorStop(0, "#606060");
mountainGrad.addColorStop(1, "#a0a0a0");
var sunGrad = ctx.createRadialGradient(250,150,0,250,150,100)
sunGrad.addColorStop(0, "rgba(211,164,0,1)");
sunGrad.addColorStop(1, "rgba(255,255,255,0)");

drawSummerSky();
drawSun();
drawGrass();
drawMountains();


function drawSun(){
    ctx.beginPath();
    ctx.arc(250, 150, 100, 0, 2*Math.PI);
    ctx.fillStyle = sunGrad;
    ctx.fill();
};

function drawMountains(){
    ctx.fillStyle= mountainGrad;
    ctx.beginPath();
    ctx.moveTo(0,250);
    ctx.lineTo(60,180);
    ctx.lineTo(120,250);
    ctx.lineTo(80,250);
    ctx.lineTo(180,120);
    ctx.lineTo(280,250);
    ctx.lineTo(200,250);
    ctx.lineTo(300,150);
    ctx.lineTo(400,250);
    ctx.closePath();
    ctx.fill(); //fjell
};

function drawGrass(){
    ctx.fillStyle = grassGrad;
    ctx.fillRect(0,250,400,50); // gress
};

function drawSummerSky(){
    ctx.fillStyle = summerSkyGrad; 
    ctx.fillRect(0,0,400,300); //sommerhimmel
};