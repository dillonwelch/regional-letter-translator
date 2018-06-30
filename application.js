$('document').ready(function() {
  $('#input').bind('input propertychange', function() {
    area = $(this)
    letters = area.val().split('').map(function(letter) {
      if(letter === ' ') {
        return ' ';
      } else {
        return ':regional_indicator_' + letter + ':';
      }
    });
    $('#output').val(letters.join(' '));
  })
});
