$(function (){

    // console.log($('section>div').length)

    let element = $("body>section");

    for(let i = 0; i < element.length; i++){
        console.log("section "+ element[i].getAttribute("id") + " have DIVs: " + element[i].getElementsByTagName('div').length);
    };

    $(".wor").click(function () {
        $('html, body').animate({
            scrollTop: $(".works").offset().top
        }, 800);
    });

    $(".abo").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 800);
    });

    $(".lin").click(function () {
        $('html, body').animate({
            scrollTop: $(".links").offset().top
        }, 800);
    });

    $(".cont").click(function () {
        $('html, body').animate({
            scrollTop: $(".contacts-bottom").offset().top
        }, 800);
    });

    $('.works-item a').click(function() {
        $(this).parents('.works-item').find('img').toggleClass('invisible');
        $(this).toggleClass('text-danger');
    });

    // $(".works-item_text a").click(function() {
    //     $(this).addClass(".colo");
    // });

    $('.click1').click(function(){
            $('div.click2>p').slideDown(200);
        }),
        $('.click1').click(function(){
            $('div.click2>p').slideUp(200);
        }
    );

    $('.click3').click(function(){
        $('div.click4>p').slideDown(200);
    }),
        $('.click3').click(function(){
                $('div.click4>p').slideUp(200);
            }
        );

    $('.click5').click(function(){
        $('div.click6>p').slideDown(200);
    }),
        $('.click5').click(function(){
                $('div.click6>p').slideUp(200);
            }
        );

    $('.click7').click(function(){
        $('div.click8>p').slideDown(200);
    }),
        $('.click7').click(function(){
                $('div.click8>p').slideUp(200);
            }
        );

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

    $('.mod').click(function () {
        $('.modal').addClass('modal-show')
    });

    $('.close-m').click(function () {
        $('.modal').removeClass('modal-show')
    });


    });
