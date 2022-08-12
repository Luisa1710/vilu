export function pintarResumenCompra(fotoURL,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto){

    
    let contenedor=document.getElementById("contenedor")
    contenedor.classList.add ('contenedor')
   
    let fila=document.createElement("div")
    fila.classList.add("row","mb-3", )

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6","align-self-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL

    let nombre=document.createElement("h3")
    // nombre.classList.add("text-center")
    nombre.textContent=nombreMensaje

    let boton=document.createElement("a")
    boton.classList.add("boton","third","w-50")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href","../../productos.html")

    let precio=document.createElement("h3")
    precio.textContent="Precio Und: "+precioProducto

    let cantidad=document.createElement("h3")
    cantidad.textContent="Cantidad: "+cantidadProducto

    //padres e hijos
    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    if(banderaBoton==true){
        columna2.appendChild(boton)
    }
    if(banderaPrecio==true){
        columna2.appendChild(precio)
    }
    if(banderaCantidad==true){
        columna2.appendChild(cantidad)
    }
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
    


    
}