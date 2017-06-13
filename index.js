(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.querySelector('#stopButton')
  var stopLight = document.querySelector('#stopLight')

  var slowButton = document.querySelector('#slowButton')
  var slowLight = document.querySelector('#slowLight')

  var goButton = document.querySelector('#goButton')
  var goLight = document.querySelector('#goLight')

  stopButton.addEventListener('click', function(){
    if (stopLight.classList.contains('stop')) {
      stopLight.classList.remove('stop')
    } else {
      stopLight.classList.add('stop')
    }
  })

  slowButton.addEventListener('click', function(){
    if (slowLight.classList.contains('slow')) {
      slowLight.classList.remove('slow')
    } else {
      slowLight.classList.add('slow')
    }
  })

  goButton.addEventListener('click', function(){
    if (goLight.classList.contains('go')) {
      goLight.classList.remove('go')
    } else {
      goLight.classList.add('go')
    }
  })
})();
