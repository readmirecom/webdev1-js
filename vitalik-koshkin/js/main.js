//1. Вивід кількості дочірніх елементів

	(document).ready(function(){
    	var dump = $("body>section");
    	for(let i = 0; i < dump.length; i++){
        	console.log("section #"+ dump[i].getAttribute("id") + " have DIVs: " + dump[i].getElementsByTagName('div').length);
    	}
	});

//2. Smooth-scroll навігація

	var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    
//3. Приховування картинки і зміна кольорів

  	$('.works-item ').on('click','a',function(event){
    $(this).parent().parent().parent().children('img').addClass('invisible');
    $(this).addClass('text-danger');
  	});
  	
//4. Перевірка вводу від користувача

	$('.social-list a').click(function(e){
        var snum = parseInt(prompt("Please, enter secret number to visit a link"));
        var check = $(this).data('checknum');
        if(snum != check){
            alert("Sorry, wrong secret number!");
            e.preventDefault();
        }

//5. Згортання параграфа по кліку на заголовок

	$('.about-item').on('click','h4',function(event){
    	$(this).next('p').slideToggle(200);
  	});

//6. Перевірка значень форми

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
