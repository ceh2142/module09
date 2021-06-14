addEventListener('click', createDot);

function createDot(event) {
  var dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = event.pageX + 'px';
  dot.style.top = event.pageY + 'px';
  document.body.appendChild(dot);
}

var mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByClassName("dot");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

