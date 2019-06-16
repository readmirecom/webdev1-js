
$(function() {
    console.log("section #head have DIVs: "+$( "#head" ).find("div").length);
    console.log("section #works have DIVs: "+$( "#works" ).find("div").length);
    console.log("section #about have DIVs: "+$( "#about" ).find("div").length);
    console.log("section #links have DIVs: "+$( "#links" ).find("div").length);
    $("li > a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('figcaption > h3 > a').click(function(e){
        e.preventDefault();
        var $this = $(this);
        if($this.hasClass("text-danger")) {
            $this.removeClass("text-danger");
            $this.parent().parent().parent().find('img').removeClass("invisible");
        } else {
            $this.addClass("text-danger");
            $this.parent().parent().parent().find('img').addClass("invisible");
        }

    });


    $('ul > li > a').click(function(e){
        var password = prompt("Please, enter secret number to visit a link", );
        if (password != $(this).data("checknum")) {
            e.preventDefault();
            alert("Sorry,\n" + "wrong secret number!")
        }
    });


    $('div > h4').click(function(){
        if($(this).parent().find('p').css('display') == 'none')
        {
            $(this).parent().find('p').slideDown('slow');
        } else {
            $(this).parent().find('p').slideUp('slow');
        }

    });

});
