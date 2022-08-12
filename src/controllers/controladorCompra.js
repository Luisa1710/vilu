import { productosCategorias } from "../helpers/Database.js"
import { pintarProductos } from "./controladorCards.js"

//Pregunto si mi carrito tiene productos

if(localStorage.getItem('sumaCarrito')!=null){

    let sumaProductos = document.getElementById('sumaProductos')
    sumaProductos.textContent = localStorage.getItem('sumaCarrito')
   

}
let producto= JSON.parse(localStorage.getItem('infoProducto')) 

let filtroProductosRelacionados = productosCategorias.filter(function(producto2){
    return(producto2.categoria==producto.categoria)
})


let productosRelacionados = filtroProductosRelacionados.splice(5,7)
console.log(productosRelacionados)

//Revisar si hay productos en el carrito
let carrito

if (JSON.parse(localStorage.getItem('carrito')) == null) {    
carrito = []
}
else {

    carrito= JSON.parse(localStorage.getItem('carrito'))

}


// CREAR UNA FUNCIÓN
let foto = document.getElementById ("foto")
foto.src= producto.foto
let nombre = document.getElementById ("nombre")
nombre.textContent = producto.nombre
nombre.classList.add ('fs-2')

let precio = document.getElementById ("precio")
precio.textContent = producto.precio
let descripcion = document.getElementById ("descripcion")
descripcion.classList.add ('fs-6')
descripcion.textContent = producto.descripcion;




// Crear carrito compras





//Agregar un nuevo atributo (cantidad) al objeto 

let botonAgregar = document.getElementById("botonAgregar")
botonAgregar.addEventListener('click', function(evento){
    let alerta = document.getElementById("alerta")
    alerta.classList.remove('invisible')
    setTimeout (function(){
    alerta.classList.add('invisible')
    },3000)


let cantidad = document.getElementById ("cantidad").value
producto.cantidad = cantidad

//agregando elemento a un arreglo
carrito.push(producto)

//almaceni el carrito en el localstorage

localStorage.setItem('carrito',JSON.stringify(carrito))

// Rutina pintar suma carrito

    let suma = 0

 carrito.forEach(function(producto) {
    
   suma =Number(producto.cantidad) + suma
  
  
 });
 localStorage.setItem('sumaCarrito',suma)

 let sumaProductos = document.getElementById('sumaProductos')
 sumaProductos.textContent = suma



 
})









if (producto.popularidad== "1"){
let estrella2= document.getElementById ('estrella2')
estrella2.classList.add('invisible')
let estrella3= document.getElementById ('estrella3')
estrella3.classList.add('invisible')
let estrella4= document.getElementById ('estrella4')
estrella4.classList.add('invisible')
let estrella5= document.getElementById ('estrella5')
estrella5.classList.add('invisible')

}
else if (producto.popularidad== "2"){
   
    let estrella3= document.getElementById ('estrella3')
    estrella3.classList.add('invisible')
    let estrella4= document.getElementById ('estrella4')
    estrella4.classList.add('invisible')
    let estrella5= document.getElementById ('estrella5')
    estrella5.classList.add('invisible')

}
else if (producto.popularidad== "3"){
   
  
    let estrella4= document.getElementById ('estrella4')
    estrella4.classList.add('invisible')
    let estrella5= document.getElementById ('estrella5')
    estrella5.classList.add('invisible')

}
else if (producto.popularidad== "4"){
   
  
    let estrella5= document.getElementById ('estrella5')
    estrella5.classList.add('invisible')

}
else {

 }

pintarProductos(productosRelacionados)