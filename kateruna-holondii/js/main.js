$(document).ready(function () {

//1. Вивід кількості дочірніх елементів
    var count = $("body>section");
    for (var i = 0; i < count.length; i++) {
        console.log("section #id_" + count[i].getAttribute("id") + " have DIVs: " + count[i].getElementsByTagName('div').length);
    }
    ;
    
    //2. Smooth-scroll навігація
    $('.header a').click(function () {
        var scroll_el = $.attr(this, 'href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 30}, 800)
        }
        return false;
    });
    
    //3. Приховування картинки і зміна кольорів
    $('.works-item a').click(function () {

        $(this).parents('.works-item').find('img').toggleClass('invisible');
        $(this).toggleClass('text-danger');
    });
    
    //4. Перевірка вводу від користувача
    $('.social-list a').click(function (event) {
        var question = prompt("Please, enter secret number to visit a link", "");
        var answer = parseInt($.attr(this, 'data-checknum'));
        if (question != answer) {
            alert("Sorry,wrong secret number!");
            event.preventDefault();
        }


    });

    //5. Згортання параграфа по кліку на заголовок
    $('.about-item h4').click(function () {
        $(this).parents('.about-item').find('p').slideToggle(200);
    });

    //6. Перевірка значень форми

    $('.contacts-form').submit(function (event) {
        var form = $(this);

        if (form.find("input[name=name]").val().length < 4) {

            alert('Error: name should be at least 4 letters long');
            event.preventDefault();
        }
        if (form.find("input[name=email]").val().match(/^(.+)\@mail\.ru$/)) {

            alert('Error: Sorry, mail.ru is still blocked in Ukraine');
            event.preventDefault();
        }
        if (form.find("textarea[name=text]").val().length < 10) {

            alert('Error: message should be at least 10 letters long');
            event.preventDefault();
        }

        $.post(
                form.attr("action"),
                form.serialize()
                );

    });
});

