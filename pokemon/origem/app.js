/*  	ep 1	   */

$("#ep1").on("click", function (){

$('.frame').remove();
	
$('.movie').append('<iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/rMnqNVw2u8Y" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');

});

/*		ep 2		*/
$("#ep2").on("click", function (){

$('.frame').remove();
	
$('.movie').append('<iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/4AgLsz27E_w" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');

});

/*		ep 3		*/
$("#ep3").on("click", function (){

$('.frame').remove();
	
$('.movie').append('<iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/2VtJEsWYmFg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');

});

/*		ep 4 		*/
$("#ep4").on("click", function (){

$('.frame').remove();
	
$('.movie').append('<iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/6ml27z1Ju34" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');

});

/*		Off Light 		*/

$("#off-light").on("click", function (){

function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}

setTimeout(function() {
    var div = document.querySelector('body');
    trocaClasse(div, 'background', 'background-black');
}, 2000);
});

