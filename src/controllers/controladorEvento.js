export function ampliarInfoProducto(evento){

    let producto = {
        foto : evento.target.parentElement.querySelector('img').src,
        nombre: evento.target.parentElement.querySelector('h3').textContent,
        precio: evento.target.parentElement.querySelector('h2').textContent,
        descripcion: evento.target.parentElement.querySelector('p').textContent,
       popularidad: evento.target.parentElement.querySelector('i').textContent,
       categoria: evento.target.parentElement.querySelector('h5').textContent
    }
    return (producto)
    }