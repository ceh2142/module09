addEventListener('click', createDot);

function createDot(event) {
  var dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = event.pageX + 'px';
  dot.style.top = event.pageY + 'px';
  document.body.appendChild(dot);
}



