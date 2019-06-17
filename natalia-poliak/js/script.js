$(function (){

    console.log($('section>div').length)

    // var count = $('section>div').size();
    // alert('section #id_attr have DIVs:');


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


$('.works-item_text').click(function () {
    $('.works-item').animate
    {
        opacity:0;
    }
});

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


$()
    $('.contacts-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            text: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                minlength: "Error: name should be at least 4 letters long"
            },
            email: {
                required: "Вкажіть, будь ласка, вашу ел. адресу",
                email: "Ваш email має бути наступного формату: name@domain.com"
            },
            text: {
                minlength: "Error: message should  be at least 10 letters long"
            }
        }
    });


    function validateEmail(){
        if(email!='@mail.ru')
        {
            return true;
        }
        else
        {
            alert('Error: Sorry, mail.ru is still  blocked in Ukraine');
            return false;
        }
    }


    $('.mod').click(function () {
        $('.modal').addClass('modal-show')
    });

    $('.close-m').click(function () {
        $('.modal').removeClass('modal-show')
    });




    });
