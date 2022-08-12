import { productosCategorias } from "../helpers/Database.js"
import { pintarProductos } from "./controladorCards.js"


export function filtrarCategoria (){

let botonRostro = document.getElementById('botonRostro')

botonRostro.addEventListener('click',function(evento){

    
    let filtroCategoria = productosCategorias.filter(function(producto){

        return (producto.categoria == "1" )
    })
   
    pintarProductos(filtroCategoria)

})


let botonOjos = document.getElementById('botonOjos')

botonOjos.addEventListener('click',function(evento){

    // let categoriaBuscada= evento.target.value
    
    let filtroCategoria = productosCategorias.filter(function(producto){

        return (producto.categoria == "2" )
    })
   
    pintarProductos(filtroCategoria)

})


let botonBrochas = document.getElementById('botonBrochas')

botonBrochas.addEventListener('click',function(evento){

    
    let filtroCategoria = productosCategorias.filter(function(producto){

        return (producto.categoria == "3" )
    })
   
    pintarProductos(filtroCategoria)

})


let botonLabios = document.getElementById('botonLabios')

botonLabios.addEventListener('click',function(evento){

    
    let filtroCategoria = productosCategorias.filter(function(producto){

        return (producto.categoria == "4" )
    })
   
    pintarProductos(filtroCategoria)

})

let botonCategorias = document.getElementById ('botonCategorias')

botonCategorias.addEventListener('click',function(){

    pintarProductos(productosCategorias)


})

}