$(function () {
    //1. Вивід кількості дочірніх елементів
    var elements = $("section");
    for (var i = 0; i < elements.length; i++) {
        console.log("section " + elements[i].getAttribute("id") + " have DIVs: " + elements[i].getElementsByTagName("div").length);
    }
    ;

    //2. Smooth-scroll навігація
    $(".navbar-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("id").offset()
        }, 800);
    });

    //3. Приховування картинки і зміна кольорів
    $(".works-item a").click(function () {
        $(this).parents('.works-item').find("img").toggleClass('invisible');
        $(this).toggleClass('text-danger');
    });

    //4. Перевірка вводу від користувача
    $(".social-list a").click(function (e) {
        var toVisit = prompt("Please, enter secret number to visit a link.");
        var secretNumber = $(this).attr('data-checknum');
        if (toVisit !== secretNumber) {
            alert("Sorry, wrong secret number!");
            e.preventDefault();
        }
    });

    //5. Згортання параграфа по кліку на заголовок
    $(".about-item > h4").click(function () {
        $(this).siblings('p').slideToggle(200);

    });

    //6. Перевірка значень форми
    $(".contacts-form").submit(function () {
        var $formName = $(this);
        if ($formName.find("input[name=name]").val().length < 4) {
            alert("Error: name should be at least 4 letters long");
            return false;
        }
        if ($formName.find("input[name=email]").val().match(/@mail.ru/)) {
            alert("Error: Sorry, mail.ru is still blocked in Ukraine");
            return false;
        }
        if ($formName.find("textarea[name=text]").val().length < 10) {
            alert("Error: message should be at least 10 letters long");
            return false;
        }
    });


});