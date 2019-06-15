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

    //Завдання 6



    $('.contacts-form').submit(function(){

        var $form = $(this);
        
        if ($form.find("input[name=name]").val().length < 4) {
            
            alert('Error: name should be at least 4 letters long');
            return false;
        }
        if ($form.find("input[name=email]").val().match(/@mail.ru/)) {
        
            alert('Error: Sorry, mail.ru is still blocked in Ukraine');
            return false;
        }
        if ($form.find("textarea[name=text]").val().length < 10) {
            
            alert('Error: message should be at least 10 letters long');
            return false;
        }
    
        $.post(
            $form.attr("action"), 
            $form.serialize() 
        );
       
        


    });
    





});