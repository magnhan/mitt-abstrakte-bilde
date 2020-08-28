var c = document.getElementById("artCanvas");
var ctx = c.getContext("2d");

const artCanvas = document.getElementById("artCanvas");

var alpha = 0, delta=0.01;

drawSummer();

artCanvas.addEventListener("mouseenter", e => {
    drawWinter();
});

artCanvas.addEventListener("mouseleave", e => {
    drawSummer();
});


function drawSummer(){
    alpha += delta;
    ctx.clearRect(0,0,400,300);
    drawSummerSky(alpha);
    drawSun(alpha);
    drawGrass(alpha);
    drawMountains(alpha);
    drawBird(alpha);
    if(alpha < 1){
        window.requestAnimationFrame(drawSummer);
    }
    else{
        alpha = 0;
    };
};

function drawWinter(){
    alpha += delta;
    ctx.clearRect(0,0,400,300);
    drawSummerSky(alpha);
    drawWinterSky(alpha);
    drawSnow(alpha);
    drawMountains(alpha);
    if(alpha < 1){
        window.requestAnimationFrame(drawWinter);
    }
    else{
        alpha = 0;
    };
}

function drawSun(){
    var sunGrad = ctx.createRadialGradient(250,150,0,250,150,100)
    sunGrad.addColorStop(0, `rgba(211,164,0,${alpha})`);
    sunGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.beginPath();
    ctx.arc(250, 150, 100, 0, 2*Math.PI);
    ctx.fillStyle = sunGrad;
    ctx.fill();
};

function drawMountains(){
    var mountainGrad = ctx.createLinearGradient(0, 250, 0, 120);
    mountainGrad.addColorStop(0, `rgba(96,96,96,${alpha})`);
    mountainGrad.addColorStop(1, `rgba(160,160,160,${alpha})`);
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
    ctx.fillStyle= `rgba(66,66,66,${alpha}`;
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
    var grassGrad = ctx.createLinearGradient(0, 250, 0, 300);
    grassGrad.addColorStop(0, `rgba(111,201,96,${alpha})`);
    grassGrad.addColorStop(1, `rgba(88,165,75,${alpha})`);
    ctx.fillStyle = grassGrad;
    ctx.fillRect(0,250,400,50); // gress
};

function drawSnow(){
    var snowGrad = ctx.createLinearGradient(0, 250, 0, 300);
    snowGrad.addColorStop(0, `rgba(243,243,243,${alpha}`);
    snowGrad.addColorStop(1, `rgba(214,214,214,${alpha}`);
    ctx.fillStyle = snowGrad;
    ctx.fillRect(0,250,400,50);
    console.log("%a", alpha);
}

function drawSummerSky(){
    var summerSkyGrad = ctx.createLinearGradient(0, 0, 0, 300);
    summerSkyGrad.addColorStop(0, "lightblue");
    summerSkyGrad.addColorStop(1, "#4498ff");
    ctx.fillStyle = summerSkyGrad; 
    ctx.fillRect(0,0,400,300); //sommerhimmel
};

function drawWinterSky(){
    var winterSkyGrad = ctx.createLinearGradient(0, 0, 0, 300);
    winterSkyGrad.addColorStop(0, "rgba(255,255,255,0)");
    winterSkyGrad.addColorStop(1, "rgba(255,255,255,1)");
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
    alpha = alpha;
    ctx.drawImage(img, 0, 0);

    requestAnimationFrame(loop); // or use setTimeout(loop, 16) in older browsers
}*/