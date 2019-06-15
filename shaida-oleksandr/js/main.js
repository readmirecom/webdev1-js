$(document).ready(function(){

    //Завдання 1
    var stack = $("body>section");

    for(var i = 0; i < stack.length; i++){
        console.log("section "+ stack[i].getAttribute("id") + " have DIVs: " + stack[i].getElementsByTagName('div').length);
        
    };

    //Завдання 2
    var $page = $('html, body');
    $('.header a').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

    //Завдання 3

    $('.works-item a').click(function() {
        // $(this).parent().parent().parent().find('img').toggleClass('invisible');
        $(this).parents('.works-item').find('img').toggleClass('invisible');
        $(this).toggleClass('text-danger');
    });
    

    //Завдання 4

    $('.social-list a').click(function(e){
        
        var answer = parseInt(prompt("Please, enter secret number to visit a link"));
        var param = $(this).data('checknum');
        if(answer != param){
            alert("Sorry, wrong secret number!");
            e.preventDefault();

        }
        

    });

    //Завдання 5

    $('.about-item > h4').click(function(){

        $(this).siblings('p').slideToggle(200);

    });




});