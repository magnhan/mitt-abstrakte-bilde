$(document).ready(function(){
    $("#winterSky").hide();
    $("#snow").hide();
    $("svg").mouseenter(function(){
        $("#svgBird").fadeOut();
        $("#winterSky").fadeIn();
        $("#sun").fadeOut();
        $("#snow").fadeIn();
        //$(".snowflake").animate({down: "400px"});
    });
    $("svg").mouseleave(function(){
        $("#svgBird").fadeIn();
        $("#winterSky").fadeOut();
        $("#sun").fadeIn();
        $("#snow").fadeOut();
    });
})