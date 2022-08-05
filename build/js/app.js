



document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})


function iniciarApp(){
    crearGaleria();
    scrollNav()
}

function scrollNav (){
    const enlaces = document.querySelectorAll('.navegacionPrincipal a')
    
    enlaces.forEach (enlace =>{
        enlace.addEventListener('click', function(e){
            e.preventDefault()
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({behavior: "smooth"})
        })
    })
}
function crearGaleria(){
    const galeria = document.querySelector('.galeriaImagenes')
    
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement ('picture')
        imagen.innerHTML = `
        
        <img src="build/img/thumb/${i}.webp" alt="imagen galeria">

        `
        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen)
    }
    
}

function mostrarImagen ( id ){
    const imagen = document.createElement ('picture')
    imagen.innerHTML = `
    
    <img src="build/img/grande/${id}.webp" alt="imagen galeria">

    `

    const overlay = document.createElement ('DIV')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')
    overlay.onclick = function(){
              const body = document.querySelector('body')
        
        body.classList.remove('fijarBody')
        overlay.remove()
    }

    //btotn para cerrar el overlay

    const cerrarModal = document.createElement('P')
    cerrarModal.textContent = 'X'
    cerrarModal.classList.add('btn-cerrar')

    cerrarModal.onclick = function(){
        const body = document.querySelector('body')
        
        body.classList.remove('fijarBody')
        overlay.remove()
    }

    overlay.appendChild (cerrarModal)


    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijarBody')

    
}