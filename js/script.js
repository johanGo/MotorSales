//show options in the desktop
const arrow = document.querySelectorAll('.containerArrows');
const containerVenta = document.querySelector('.containerVenta');
const containerMantenimiento = document.querySelector('.containerMantenimiento');
const containerTramicars = document.querySelector('.containerTramicars');
const arrowVenta = document.getElementById('arrowVentaDesk');
const arrowMantenimiento = document.getElementById('arrowMantenimientoDesk');
const arrowTramicars = document.getElementById('arrowTramicarsDesk');
const buttonSubmit = document.querySelector('#button-submit')

containerVenta.addEventListener('click', (e)=>{
    e.preventDefault();
    // containerVenta.classList.toggle("arrowsMovement");

    // if(arrowVenta.style.transform==='rotate(180deg)'){
    //     arrowVenta.style.transform='rotate(0deg)'
    // }else{
    //     arrowVenta.style.transform='rotate(180deg)'
    // }
    arrowVenta.style.transform = (arrowVenta.style.transform==='rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
    arrowMantenimiento.style.transform='rotate(0deg)';
    arrowTramicars.style.transform='rotate(0deg)';


    if(containerVenta.nextElementSibling.style.display ==='block'){
        containerVenta.nextElementSibling.style.display='none'
    }else{
        containerVenta.nextElementSibling.style.display='block'
    }
    containerMantenimiento.nextElementSibling.style.display='none';
    containerTramicars.nextElementSibling.style.display='none';
    console.log(arrowVenta);
});

containerMantenimiento.addEventListener('click', (e)=>{
    e.preventDefault();
    // containerMantenimiento.classList.toggle("arrowsMovement");

    arrowMantenimiento.style.transform = (arrowMantenimiento.style.transform==='rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)' ;
    arrowVenta.style.transform='rotate(0deg)';
    arrowTramicars.style.transform='rotate(0deg)';


    if(containerMantenimiento.nextElementSibling.style.display === 'block'){
        containerMantenimiento.nextElementSibling.style.display='none'
    }else{
        containerMantenimiento.nextElementSibling.style.display='block'
    }
    containerVenta.nextElementSibling.style.display='none';
    containerTramicars.nextElementSibling.style.display='none';
    console.log('se presiono Mantenimiento');
});

containerTramicars.addEventListener('click', (e)=>{
    e.preventDefault();
    // containerTramicars.classList.toggle("arrowsMovement");

    arrowTramicars.style.transform=(arrowTramicars.style.transform==='rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)' ;
    arrowVenta.style.transform='rotate(0deg)';
    arrowMantenimiento.style.transform='rotate(0deg)';
    

    if(containerTramicars.nextElementSibling.style.display === 'block'){
        containerTramicars.nextElementSibling.style.display='none'
    }else{
        containerTramicars.nextElementSibling.style.display='block'
    }
    containerVenta.nextElementSibling.style.display='none';
    containerMantenimiento.nextElementSibling.style.display='none';
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

//------CAROUSEL MAINTENANCE
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
// const galleryControls = ['Left', 'Right'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el=>{
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            // el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0,5).forEach((el, i)=>{
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control=>{
            galleryControlsContainer.appendChild(document.createElement('button')).className=`gallery-controls-${control}`;            
            // document.querySelector(`.gallery-controls-${control}`).innerText = control;
        })
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control=>{
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

//-------IMPORT JSON FILE------

//-------se recomienda que las dimensiones de las imagenes sean 316x197-------
import data from '../json/section-cars.json' assert {type:'json'};
const containerCars = document.getElementById('section-cars-container');

data.forEach((element)=>{
    containerCars.innerHTML+=`
        <div class="container-img">
            <img class="content-img" src="imgs/cars-imgs/${`${element.title} ${element.specifications.kilometraje}`}.jpg" alt="">
            <div class="container-desc">
                <h2 class="title-car">${element.title}</h2>
                <p class="description-car">${element.description}</p>
                <div class="specifications-car">
                    <div>${element.specifications.kilometraje}km</div>
                    <div>${element.specifications.model}</div>
                    <div>${element.specifications.plate}</div>
                    <div>${element.specifications.city}</div>
                </div>
                <p class="price-car">$${element.price}</p>
                <button>
                    <div>
                        contactar 
                        <img src="imgs/arrow.svg" alt="arrow icon">
                    </div>
                    <img src="imgs/whatsapp.svg" alt="whatsapp icon">
                </button>
            </div>
        </div>
    `
    // console.log(`${element.title} ${element.specifications.kilometraje}`)
});


//--------section search--------

const iconSearch = document.querySelector('.icon-search');
const inputSearch = document.querySelector('#input-filter');
let cards = document.querySelectorAll('.container-img');
let elements = document.querySelectorAll('.title-car');
let mensaje = document.querySelector('.mensaje');
let myArray = [];



iconSearch.addEventListener('click', ()=>{
    elements.forEach((element, index)=>{
        if(element.innerHTML.includes(inputSearch.value.toLowerCase())){
            cards[index].style.display='grid';
            console.log(myArray.push(index))
        }else{
            cards[index].style.display='none';
        }
    });
    //Verificar si hay carros o no para mostrar el mensaje 'No hay carros con el nombre insertado'    
    console.log(myArray)
    if(myArray.length == 0){
        console.log('No hay carros');
        mensaje.style.display='block';
        
    }else{
        console.log('Hay carros');
        mensaje.style.display='none';
    }
    myArray.splice(0, data.length)
    
});



inputSearch.addEventListener("keydown", function(e) {
    let teclaEnter = e.keyCode;
    if (teclaEnter == '13') {
        // console.log(inputSearch.value.toLowerCase());
        elements.forEach((element, index)=>{
            if(element.innerHTML.includes(inputSearch.value.toLowerCase())){
                cards[index].style.display='grid'; 
                console.log(myArray.push(index))
            }else{
                cards[index].style.display='none';             
            }
        });
        //Verificar si hay carros o no para mostrar el mensaje 'No hay carros con el nombre insertado'
        console.log(myArray);
        if(myArray.length == 0){
            console.log('No hay carros');
            mensaje.style.display='block';
            
        }else{
            console.log('Hay carros');
            mensaje.style.display='none';
        }
        myArray.splice(0, data.length);
    }
});

const filterContainer = document.querySelector('.filter-container');
iconSearch.addEventListener('click', function(event) {
    filterContainer.classList.add('appear');
    event.stopPropagation();
});
document.addEventListener('click', function(event) {
    if (!filterContainer.contains(event.target)) {
        filterContainer.classList.remove('appear');

    }
});


// buttonSubmit.addEventListener('click',(e)=>{
//     e.preventDefault;
//     alert('presionado')

//     fetch("https://formsubmit.co/ajax/josegorm@hotmail.com",{
//         method:"POST",
//         body: new FormData(e.target)
//     })
//     .then(res=>res.ok ? res.json(): Promise.reject(res))
//     .then(json => {
//         console.log(json)
//         // $response.classList.remove("none")
//         // $form.reset()
//     })
//     .catch(err => {
//         console.log(err);
//     });
// })

const d =document;

d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("enviando formulario")

    const $response=d.querySelector(".contact-form-response");
    const $form=d.querySelector(".form-container");

    fetch("https://formsubmit.co/ajax/johansebastiangonzalezormaza@gmail.com",{
        method:"POST",
        body: new FormData(e.target)
    })
    .then(res=>res.ok ? res.json(): Promise.reject(res))
    .then(json => {
        console.log(json)
        $response.classList.remove("none")
        $form.reset()
    })
    .catch(err => {
        console.log(err);
    });

})













// //functions
// function mymessage(){
//     if(myArray.length == 0){
//         console.log('No hay carros');
//         mensaje.style.display='block';
        
//     }else{
//         console.log('Hay carros');
//         mensaje.style.display='none';
//     }
//     myArray.splice(0, data.length)
// }
// mymessage();

