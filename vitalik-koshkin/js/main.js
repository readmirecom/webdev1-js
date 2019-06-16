//1. Вивід кількості дочірніх елементів

	(document).ready(function(){
    	var dump = $("body>section");
    	for(let i = 0; i < dump.length; i++){
        	console.log("section #"+ dump[i].getAttribute("id") + " have DIVs: " + stack[i].getElementsByTagName('div').length);
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
