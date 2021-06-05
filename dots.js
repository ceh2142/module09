var dot = document.getElementById("dot");
       addEventListener('click', function(event){
          dot.style.visibility="visible";
          box.left = event.pageX;
          box.top = event.pageY;
   });