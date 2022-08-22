import{pintarResumenCompra} from './controladorPintarResumen.js'

let carrito = JSON.parse(localStorage.getItem('carrito'))
// Crear una referencia para almacenar el contenedor

let contenedor= document.getElementById('contenedor')


console.log(carrito)

    let totalCompra = 0   

if (carrito == null) {    

     


    pintarResumenCompra('../../assets/img/vacio.png','No hay productos a pagar',true,false,null,false,null)

  

}
else {
    
  
    carrito.forEach (function(producto){

        

        let fila = document.createElement ("div");
        fila.classList.add('row');

        let columna = document.createElement("div");
        columna.classList.add('col-12');

        let card = document.createElement ("div");
        card.classList.add('card', 'mb-3','p-5' );

        let rowcard1 = document.createElement("div")
        rowcard1.classList.add ("row",'g-0')

        let colcard1 = document.createElement ('div')
        colcard1.classList.add('col-md-4')

        let foto = document.createElement("img")
        foto.classList.add ("img-fluid",'rounded-start')
        foto.src = producto.foto

        let colcard2 = document.createElement ('div')
        colcard2.classList.add('col-md-8')

        let bodycard = document.createElement ('div')
        bodycard.classList.add ('card-body', 'p-5')

        let nombre = document.createElement ('h5')
        nombre.classList.add ("card-title","fw-bold")
        nombre.textContent = producto.nombre

        let precio =document.createElement("h3")
        precio.classList.add("card-text","fw-bold")
        precio.textContent = producto.precio
        
        let cantidad = document.createElement ('p')
        cantidad.classList.add("card-text","fw-bold")
        cantidad.textContent = 'Cantidad: '+ producto.cantidad

        let subtotal = document.createElement('h5')
        subtotal.classList.add ("card-text","fw-bold",'subtotal')
        totalCompra = totalCompra + (Number(producto.cantidad)* Number(producto.precio.split('$')[1].split('COP')[0])) 
        subtotal.textContent= 'Subtotal: $ ' +  (Number(producto.cantidad)* Number(producto.precio.split('$')[1].split('COP')[0])) 

       
        

      bodycard.appendChild (nombre)
      bodycard.appendChild (precio)
      bodycard.appendChild (cantidad)
      bodycard.appendChild(subtotal)
      colcard2.appendChild (bodycard)
      colcard1.appendChild (foto)
      rowcard1.appendChild (colcard1)
      rowcard1.appendChild (colcard2)
      card.appendChild(rowcard1)
      columna.appendChild (card)
      fila.appendChild(columna)
      contenedor.appendChild(fila)

    })

    let total = document.getElementById('total')
    total.textContent = 'Total: ' + '$' +  totalCompra


}
    
let botonLimpiar=document.getElementById("botonLimpiar")
botonLimpiar.addEventListener("click",function(evento){
    sessionStorage.removeItem("carrito")

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    localStorage.removeItem('carrito')
    localStorage.removeItem('sumaCarrito')
    
    pintarResumenCompra('../../assets/img/vacio.png','Carrito vacio',true,false,null,false,null)

})
console.log (totalCompra)
let botonCOP= document.getElementById('botonCOP')

botonCOP.addEventListener('click',function(evento){

 total.textContent  = '$' + Math.round(totalCompra/4204) + '  US'

})

botonCOP.addEventListener('dblclick',function(evento){

    total.textContent = 'Total: ' + '$' +  totalCompra
   
   })

//traer COP
//traer total

