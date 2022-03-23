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
    "Tienda Virtual Gucci. \n ¿Que desea hacer? \n A. Crear un producto\n B. Listar todos los productos de la tienda\n C. Borrar un producto, dado su id\n D. Modificar un producto, dado su id\n E. FIN"
  ).toUpperCase();
  let productos = [];
  while (opcion != "FIN") {
    switch (opcion) {
      case "A":
        productos = crear(productos);
        break;
      case "B":
        listar(productos);
        break;
      case "C":
        productos = borrar(productos);
        break;
      case "D":
        productos = modificar(productos);
        break;
      case "E":
        alert("Gracias.");
        opcion = "FIN";
        break;
      default:
        alert("Opción invalida. Debe ingresar A, B, C, D o E");
        break;
    }
    if (opcion != "FIN") {
      opcion = prompt(
        "Tienda Virtual Gucci. \n ¿Desea realizar alguna otra operación? \n A. Crear un producto\n B. Listar todos los productos de la tienda\n C. Borrar un producto, dado su id\n D. Modificar un producto, dado su id\n E. FIN"
      ).toUpperCase();
    }
  }
  alert("Finalizamos...");
}

function crear(arrayProd) {
  let id = Number(prompt("Ingrese el Id de su producto"));
  let nombre = prompt("Ingrese el nombre de su producto");
  let precio = prompt("Ingrese el precio de su producto");
  let prod = new Producto(id, nombre, precio);
  arrayProd.push(prod);
  alert("Su producto fue agregado con éxito!");
  return arrayProd;
}

function listar(arrayProd) {
  alert("Por consola verá su lista");
  for (let i = 0; i < arrayProd.length; i++) {
    console.log(
      `Producto:${arrayProd[i].nombre} \n id:${arrayProd[i].id} \n precio:${arrayProd[i].precio}`
    );
  }
}
function borrar(arrayProd) {
  let idBorrar = Number(
    prompt("Ingrese el id del producto que desea ELIMINAR")
  );
  if (isNaN(idBorrar)) {
    idBorrar = Number(prompt("El Id debe ser un numero, gracias"));
  }
  for (let i = 0; i < arrayProd.length; i++) {
    if (arrayProd[i].id === idBorrar) {
      arrayProd.splice(i, 1);
      alert(`Su producto de id = ${idBorrar} a sido eliminado con éxito`);
    }
  }
  return arrayProd;
}

function modificar() {}
menu();
