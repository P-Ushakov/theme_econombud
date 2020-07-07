
/* 
//changing navbar container to container-fluid
targetContainer = document.getElementsByClassName("navbar")[0].getElementsByClassName("container")[0];
//console.log(targetContainer);
if (targetContainer) {
    targetContainer.classList.remove('container');
    targetContainer.classList.add('container-fluid');
    //console.log(targetContainer.classList)
} */

// ZOOMing lib
// Listen to images after DOM content is fully loaded
/* document.addEventListener('DOMContentLoaded', function () {
    new Zooming({
      // options...
    }).listen('.img-zoomable')
  }) */

  zooming_func = function () {
    new Zooming({
      // options...
    }).listen('.img-zoomable')
  }

  /* zooming_func() */