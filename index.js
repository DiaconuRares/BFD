$(document).ready(function() {
    $(".wrapper").hide();
    $(".context").show();
    
    $(".header>.container1>ul>.link0").click(function() {
        $(".wrapper").hide();
        $(".wrapper0").fadeIn(2000);
    })
    
    $(".header>.container1>ul>.link1").click(function() {
        $(".wrapper").hide();
        $(".wrapper2").fadeIn(2000);
    })
    
    $(".header>.container1>ul>.link2").click(function() {
        $(".wrapper").hide();
        $(".wrapper1").fadeIn(2000);
    });
});