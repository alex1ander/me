document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('body');
  var lightbulb = document.querySelector('.lightbulb');
  var classes = ['yellow', 'blue', 'white'];
  var currentIndex = 0;

  lightbulb.addEventListener('click', function() {
    container.classList.remove(classes[currentIndex]);
    currentIndex = (currentIndex + 1) % classes.length;
    container.classList.add(classes[currentIndex]);
    console.log(123);
  });
});
