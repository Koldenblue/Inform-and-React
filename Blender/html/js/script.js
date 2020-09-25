google.load("jquery", "1.3.1");
google.setOnLoadCallback(function()
{
    // Apply some CSS3 to keep the CSS file CSS 2.1 valid
    $("h1").css("text-shadow", "0px 2px 6px #000");
    $("h2 a").css("text-shadow", "0px 2px 6px #000");

    // Color changer
    $(".colorred").click(function(){
        $("link").attr("href", "css/red.css");
        return false;
    });
    
    $(".colorblue").click(function(){
        $("link").attr("href", "css/blue.css");
        return false;
    });
    
    $(".colorpurple").click(function(){
        $("link").attr("href", "css/purple.css");
        return false;
    });
	
	$(".colororange").click(function(){
        $("link").attr("href", "css/default.css");
        return false;
    });
	
	$(".colorgreen").click(function(){
        $("link").attr("href", "css/green.css");
        return false;
    });
	
	$(".colorteal").click(function(){
        $("link").attr("href", "css/teal.css");
        return false;
    });
	
	$(".colorblack").click(function(){
        $("link").attr("href", "css/black.css");
        return false;
    });
	
	$(".colorrust").click(function(){
        $("link").attr("href", "css/rust.css");
        return false;
    });
	
	$(".colorviolet").click(function(){
        $("link").attr("href", "css/violet.css");
        return false;
    });
	
	$(".colormauve").click(function(){
        $("link").attr("href", "css/mauve.css");
        return false;
    });
	
	$(".colorwhite").click(function(){
        $("link").attr("href", "css/white.css");
        return false;
    });		

});