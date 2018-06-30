$('document').ready(function() {
  $('#input').bind('input propertychange', function() {
    area = $(this)
    letters = area.val().split('').map(function(letter) {
      if(letter.match(/[a-z]/i)) {
        return ':regional_indicator_' + letter + ':';
      } else {
        return letter
      }
    });
    $('#output').val(letters.join(' '));
  })
});
