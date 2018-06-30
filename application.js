$('#input').bind('input propertychange', function() {
  letters = $(this).val().split('').map(function(letter) {
    if(letter.match(/[a-z]/i)) {
      return ':regional_indicator_' + letter + ':';
    } else {
      return letter
    }
  });
  $('#output').val(letters.join(' '));
})
