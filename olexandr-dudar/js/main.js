	//Task 1
	$('section').each(function(){
		let $section = $(this);
		let n = $section.find('div').length;
		console.log('section #'+$section.attr('id')+' have DIVs: '+n);
	});


	//Task 2
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

	//Task 3
	$('.works-item ').on('click','a',function(event){
		$(this).parent().parent().parent().children('img').toggleClass('invisible');
		$(this).toggleClass('text-danger');
	});