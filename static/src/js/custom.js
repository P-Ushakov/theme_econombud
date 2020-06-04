

//changing navbar container to container-fluid
targetContainer = document.getElementsByClassName("navbar")[0].getElementsByClassName("container")[0];
//console.log(targetContainer);
if (targetContainer) {
    targetContainer.classList.remove('container');
    targetContainer.classList.add('container-fluid');
    //console.log(targetContainer.classList)
}

