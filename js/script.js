const arrow = document.querySelectorAll('.containerArrows')

arrow.forEach((element) => {
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        element.classList.toggle("arrowsMovement");

        let options = element.nextElementSibling;
        options.classList.toggle("showOptions");
    })
});

//menu desplegable
let iconBurguer=document.querySelector('.menu-burguer');
let iconClose=document.querySelector('.icon-close');
let blackModal= document.querySelector('.background-dark-modal')


iconBurguer.addEventListener('click',()=>{
    blackModal.classList.toggle('test');
})
iconClose.addEventListener('click',()=>{
    blackModal.classList.toggle('test');
})


//show the options in the modal and the arrows movements
let arrowsMobile = document.querySelectorAll('.container-arrows-mobile');

arrowsMobile.forEach(arrowsMobile1=>(
    arrowsMobile1.addEventListener('click',()=>{
        arrowsMobile1.classList.toggle('arrowsMovementMobile')

        let menu1=arrowsMobile1.nextElementSibling;
        console.log(menu1)
        let height=0;
        let menu=arrowsMobile1.nextElementSibling;
        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }
        menu.style.height= `${height}px`;
    })
))