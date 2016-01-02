$(function() {

  $('.front').on('click', function() {
    var track = $('#classic-track').get(0);
    if ($(this).parent().hasClass('playing')) {
      track.pause();
      track.currentTime = 0;
      $(this).parent().removeClass('playing');
    } else {
      $(this).parent().addClass('playing');
      track.play();
    }
  });

});
