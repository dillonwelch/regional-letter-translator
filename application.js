document.getElementById('input').addEventListener('input', function() {
  letters = this.value.split('').map(function(letter) {
    if(letter.match(/[a-z]/i)) {
      return ':regional_indicator_' + letter.toLowerCase() + ':';
    } else {
      return letter
    }
  });
  document.getElementById('output').innerHTML = letters.join(' ');
});
