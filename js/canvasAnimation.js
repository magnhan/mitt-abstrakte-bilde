var c = document.getElementById("artCanvas");
var ctx = c.getContext("2d");

var summerSkyGrad = ctx.createLinearGradient(0, 0, 0, 300);
summerSkyGrad.addColorStop(0, "lightblue");
summerSkyGrad.addColorStop(1, "#4498ff");
var winterSkyGrad = ctx.createLinearGradient(0, 0, 0, 300);
winterSkyGrad.addColorStop(0, "rgba(255,255,255,0)");
winterSkyGrad.addColorStop(1, "rgba(255,255,255,1)");
var grassGrad = ctx.createLinearGradient(0, 250, 0, 300);
grassGrad.addColorStop(0, "#6fc960");
grassGrad.addColorStop(1, "#58a54b");

var mountainGrad = ctx.createLinearGradient(0, 250, 0, 120);
mountainGrad.addColorStop(0, "#606060");
mountainGrad.addColorStop(1, "#a0a0a0");
var sunGrad = ctx.createRadialGradient(250,150,0,250,150,100)
sunGrad.addColorStop(0, "rgba(211,164,0,1)");
sunGrad.addColorStop(1, "rgba(255,255,255,0)");

const artCanvas = document.getElementById("artCanvas");

drawSummer();

artCanvas.addEventListener("mouseenter", e => {
    drawWinter();
});

artCanvas.addEventListener("mouseleave", e => {
    drawSummer();
});

function drawSummer(alpha){
    drawSummerSky();
    drawSun();
    drawGrass();
    drawMountains();
    drawBird();
};

function drawWinter(){
    drawSummerSky();
    drawWinterSky();
    drawSnow(0, 0.1);
    drawMountains();
}

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

function drawBird(){
    ctx.fillStyle= "#424242";
    ctx.beginPath();
    ctx.moveTo(265,150);
    ctx.lineTo(275,140);
    ctx.lineTo(268,155);
    ctx.lineTo(272,157);
    ctx.lineTo(268,156);
    ctx.lineTo(257,153);
    ctx.lineTo(259,151);
    ctx.lineTo(255,145);
    ctx.closePath();
    ctx.fill();
}

function drawGrass(){
    ctx.fillStyle = grassGrad;
    ctx.fillRect(0,250,400,50); // gress
};

function drawSnow(a, d){
    alpha = a;
    delta = d;
    while(a <= 1){
        var snowGrad = ctx.createLinearGradient(0, 250, 0, 300);
        snowGrad.addColorStop(0, `rgba(243,243,243,${a}`);
        snowGrad.addColorStop(1, "rgba(214,214,214,1");
        ctx.fillStyle = snowGrad;
        ctx.fillRect(0,250,400,50);
        console.log("%a", a);
        a+=d;
    }
}

function drawSummerSky(){
    ctx.fillStyle = summerSkyGrad; 
    ctx.fillRect(0,0,400,300); //sommerhimmel
};

function drawWinterSky(){
    ctx.fillStyle = winterSkyGrad; 
    ctx.fillRect(0,0,400,300); //vinterhimmel
};

var alpha = 0,   /// current alpha value
    delta = 0.1; /// delta = speed


function loop(){
    alpha += delta;
    if(alpha >= 1) stop();

}
/*function loop() {
    alpha += delta;
    if (alpha => 1) stop();
    /// clear canvas, set alpha and re-draw image
    ctx.clearRect(0, 0, demo.width, demo.height);
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, 0, 0);

    requestAnimationFrame(loop); // or use setTimeout(loop, 16) in older browsers
}*/