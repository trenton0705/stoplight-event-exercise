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

  stopButton.addEventListener('mouseenter', function(){
    console.log('Entered ' + stopButton.textContent + ' button.')
  })

  stopButton.addEventListener('mouseleave', function(){
    console.log('Left ' + stopButton.textContent + ' button.')
  })

  slowButton.addEventListener('click', function(){
    if (slowLight.classList.contains('slow')) {
      slowLight.classList.remove('slow')
    } else {
      slowLight.classList.add('slow')
    }
  })

  slowButton.addEventListener('mouseenter', function(){
    console.log('Entered ' + slowButton.textContent + ' button.')
  })

  slowButton.addEventListener('mouseleave', function(){
    console.log('Left ' + slowButton.textContent + ' button.')
  })

  goButton.addEventListener('click', function(){
    if (goLight.classList.contains('go')) {
      goLight.classList.remove('go')
    } else {
      goLight.classList.add('go')
    }
  })

  goButton.addEventListener('mouseenter', function(){
    console.log('Entered ' + goButton.textContent + ' button.')
  })

  goButton.addEventListener('mouseleave', function(){
    console.log('Left ' + goButton.textContent + ' button.')
  })
})();
