

// Grab title and ratings when button is pressed

$('.submit').on('click', function () {
  let movieTitle = $('input').eq(0).val();
  let movieRating = $('input').eq(1).val();

  if (movieRating > 10 || movieRating < 0 || movieTitle.length < 2) {
    return;
  }

  let movieInput = $(`<div class='movies' id='${movieRating}'>Movie: ${movieTitle} / Rating: ${movieRating}</div>`);
  let removeButton = $('<button class="remove">Remove</button>').on('click', function () { this.closest('div').remove() });
  movieInput.append(removeButton);

  // $('.movie-list').append(`<div class='movies'>Movie: ${movieTitle} / Rating: ${movieRating}</div>`);
  $('.movie-list').append(movieInput);
});

$('.sort-button').on('click', function () {
  $(".movie-list .movies").sort(function (a, b) {
    return parseInt(a.id) > parseInt(b.id);
  }).each(function () {
    var elem = $(this);
    console.log(elem);
    elem.remove();
    $(".movie-list").append(elem);
  });
})