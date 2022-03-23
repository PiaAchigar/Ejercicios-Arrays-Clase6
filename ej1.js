/*1. Escriba una funcion que permita administrar el inventario de una tienda virtual 
        Su sistema debe permitir lo siguiente: 
            1. Escoger una opcion entre: 
                A. Crear un producto
                B. Listar todos los productos de la tienda
                C. Borrar un producto, dado su id
                D. Modificar un producto, dado su id
                E. FIN
            Los productos deben tener la siguiente estructura: 
            id
            nombre
            precio
            Si el usuario ingresa FIN, debe terminar el proceso
            SI el usuario ingresa una opción inválida debe mostrar un mensaje indicando el error y mostrar el menú de nuevo
    */













            
class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

function menu() {
  let opcion = prompt(
    "Tienda Virtual Gucci. \n ¿Que desea hacer? \n A. Agregar un producto\n B. Listar todos los productos de la tienda \n C. Borrar un producto \n D. Modificar un producto \n E. Salir"
  ).toUpperCase();
  let productos = []; // baseDeDatos = []
}
