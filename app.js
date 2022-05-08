let navbar= document.querySelector('.navbar')
let corazon = document.getElementById("corazon")

corazon.addEventListener("click", color)

function color(){
    corazon.classList.toggle('active')
}

let corazon2 = document.getElementById("corazon2")

corazon2.addEventListener("click", color2)

function color2(){
    corazon2.classList.toggle('active')
}

let corazon3 = document.getElementById("corazon3")

corazon3.addEventListener("click", color3)

function color3(){
    corazon3.classList.toggle('active')
}


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    search.classList.remove('active')
}

let search= document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active')
    navbar.classList.remove('active')
}


let cart= document.querySelector('.cart-items-conteiner')

document.querySelector('#cart-btn').onclick = () => {
    navbar.classList.remove('active')
    search.classList.remove('active')

    cart.classList.toggle('active')
    Swal.fire({
    title:'Añade algo al carrito',
    icon:'error',
    width: 300,
    }
    )
}

window.onscroll = () => {
    navbar.classList.remove('active')
    search.classList.remove('active')
}


