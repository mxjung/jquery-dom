
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
$('ol').append("<li class='experimenting'>Look over here</li>");

//step 6
$('aside')
    .empty()
    .append('<p> Lists <i>ARE</i> lame, try chimichangas</p>');

//step 7
let rBgVals = $('.form-control');
let rBgArr = [255, 255, 255];
// rBgVals.on( 'input',  function(){$('body').css('background-color', `${rBgVals[0]}`)  })
rBgVals.on('input', function(){
    let redVal = rBgVals.eq(0).val();
    let blueVal = rBgVals.eq(1).val();
    let greenVal = rBgVals.eq(2).val();
    $('body').css('background-color', `rgb(${redVal} , ${greenVal} , ${blueVal})`);
})