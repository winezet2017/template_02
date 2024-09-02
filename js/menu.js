$(document).ready(function () {
  $('.btn').click(function () {
    $('.menu').addClass('open-menu');
  });

  $('.close-btn').click(function () {
    $('.menu').removeClass('open-menu');
  });
});

