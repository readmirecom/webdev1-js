$(document).ready(function(){

    //Завдання 1
    var stack = $("body>section");

    for(var i = 0; i < stack.length; i++){
        console.log("section "+ stack[i].getAttribute("id") + " have DIVs: " + stack[i].getElementsByTagName('div').length);
        
    };

    //Завдання 2
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    
});