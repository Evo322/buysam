
// Скрипты корзины

$('.addlamb').click(function(){
	$('#lamb').show();
});
$('.addros').click(function(){
	$('#ros').show();
});
$('.addgol').click(function(){
	$('#gol').show();
});
$('.addsoch').click(function(){
	$('#soch').show();
});
$('.adddad').click(function(){
	$('#dad').show();
});
$('.addtavr').click(function(){
	$('#tavr').show();
});
$('.addkb').click(function(){
	$('#kb').show();
});
$('.addkm').click(function(){
	$('#km').show();
});
$('.addagro').click(function(){
	$('#agro').show();
});

// Описание

$('#lamberop').click(function(){
	$('.lamberop').removeClass('hide');
});
$('#tavrop').click(function(){
	$('.tavrop').removeClass('hide');
});
$('#rosop').click(function(){
	$('.rosop').removeClass('hide');
});
$('#golop').click(function(){
	$('.golop').removeClass('hide');
});
$('#sochop').click(function(){
	$('.sochop').removeClass('hide');
});
$('#dadop').click(function(){
	$('.dadop').removeClass('hide');
});
$('#kbop').click(function(){
	$('.kbop').removeClass('hide');
});
$('#kmop').click(function(){
	$('.kmop').removeClass('hide');
});
$('#agrop').click(function(){
	$('.agrop').removeClass('hide');
});



$('.add').click(function(){
var fullprice = $('#fullprice');
var price = $(this).attr('price');

newprice = Number(fullprice) + Number(price);

$('#fullPrice').html(newprice)
});


// $('.pl').click(function(){
// 	$('.input').on();
// });





// var price = Number(700);
// var full_price = price + Number(200);
// $('.full_price').append(full_price);





// Кнопка вверх

$(".btn_up").click(function(){
	$("body").animate({"scrollTop": 0}, 500);
	$("html").animate({"scrollTop": 0}, 500);
});

