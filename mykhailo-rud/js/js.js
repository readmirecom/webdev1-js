//1
//child divs
console.groupCollapsed('variant 1. absolute div child');
$('section').each(function(){
	let $section = $(this);
	let n = $section.children('div').length;
	console.log('section #'+$section.attr('id')+' heve DIVs: '+n);
});
console.groupEnd();
//all divs
console.groupCollapsed('variant 2, all divs from section');
$('section').each(function(){
	let $section = $(this);
	let n = $section.find('div').length;
	console.log('section #'+$section.attr('id')+' heve DIVs: '+n);
});
console.groupEnd();

//2

$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

//3
$(document).ready(function(){
	$('.works-item ').on('click','a',function(event){
		

		$(this).parent().parent().parent().children('img').addClass('invisible');
		$(this).addClass('text-danger');
	});
});

//4

$(document).ready(function(){
	$('.social-list').on('click','a',function(event){
		let numberKey = prompt('Please, enter secret number to visit a link');
		let data = $(this).attr('data-checknum');
		console.log(data);
		if(numberKey!==data){
			alert('“Sorry, wrong secret number!');
			event.preventDefault();
		}
	});
});

//5

$(document).ready(function(){
	$('.about-item').on('click','h4',function(event){
		$(this).next('p').slideToggle(200);
		

	});
});

//6

let name = document.querySelector('input[name=name]');
let email = document.querySelector('input[name=email]');
let message = document.querySelector('textarea[name=text]');
let form = document.querySelector('.contacts-form');
form.onsubmit = function(e){
	let valName = validName(name);
	
	let valEmail = validEmail(email);
	let valText = validText(message);
	if(valName||valText||valEmail){
		
		
		e.preventDefault();
		
		
		
	}
}
function validName(s){
	
	let err = 'Error: name should be at least 4 letters long';
	if(s.value.length<4){
		alert(err);
      return true;
	}else{
		return false;
	}
}
function validText(s){
	let err = 'Error: message should be at least 10 letters long';
	if(s.value.length<10){
		alert(err);
		return true;
	}else{
		return false;
	}
}
function validEmail(s){
	let err = 'Error: Sorry, mail.ru is still blocked in Ukraine';
	let emailValue = s.value;
	if(emailValue.substr(emailValue.length-7)==='mail.ru'){
		alert(err);
		return true;
	}else{
		return false;
	}
}
