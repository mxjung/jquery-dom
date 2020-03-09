
//step 1
$(document).ready(function(){
    console.log("Let's get ready to party with Jquery");
})

// step 2
$('article img').addClass('image-center');

//step 3
let $artPs = $('article p');
$artPs[$artPs.length-1].remove();

//step 4
let randomHun = Math.floor(Math.random()*100);
$('#title').css('font-size', `${randomHun}px`);

//step5 add item to list saying whatevs
