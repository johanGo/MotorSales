const arrow = document.querySelectorAll('.containerArrows')

arrow.forEach((element) => {
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        element.classList.toggle("arrowMovement");

        let options = element.nextElementSibling;
        options.classList.toggle("showOptions");
    })
});