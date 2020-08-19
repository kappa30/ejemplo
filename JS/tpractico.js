// nombre del supermercado
var nombreSuper = document.querySelector('h1');
nombreSuper.innerHTML = "Almacen Don Java CSS.A (css anonima)";

//variable de productos de ejemplo sera cambiada por la luego dada
var productos = [
            {
                id:1,
                nombre: "Lomo",
                cantidad: 10,
                precioUnitario: 500,
            },
            {
                id:2,
                nombre: "Aceite",
                cantidad: 5,
                precioUnitario: 100,
            },
            {
                id:3,
                nombre: "Tapa pascualina",
                cantidad: 10,
                precioUnitario: 80,
            },
            {
                id:4,
                nombre: "Manteca",
                cantidad: 10,
                precioUnitario: 185,
            },
            {
                id:5,
                nombre: "Cerveza",
                cantidad: 5,
                precioUnitario: 100,
            },
            {
                id:6,
                nombre: "Vacio",
                cantidad: 10,
                precioUnitario: 450,
            },
            {
                id:7,
                nombre: "Bola de Lomo",
                cantidad: 15,
                precioUnitario: 395,
            },
            {
                id:8,
                nombre: "Vino Tinto sarasa",
                cantidad: 5,
                precioUnitario: 320,
            },
            {
                id:9,
                nombre: "Yerba",
                cantidad: 10,
                precioUnitario: 150,
            },
            {
                id:10,
                nombre: "Chocolate con Mani",
                cantidad: 30,
                precioUnitario: 235,
            },
            {
                id:11,
                nombre: "Nutela",
                cantidad: 5,
                precioUnitario: 1200,
            },
            {
                id:12,
                nombre: "Leche larga Vida",
                cantidad: 25,
                precioUnitario: 230,
            },
            
            ];
//creo la variable a completar para el carrito
 var productosEnCarro = [];

 //funcion para crear los elementos en tabla           
function crearElementoTabla(producto){

    //creo el nombre
    var tdNombre = document.createElement('td');
    var txtNombre = document.createTextNode(producto.nombre);
    tdNombre.appendChild(txtNombre);

//Creo Precio
    var tdPrecio = document.createElement('td');
    var txtPrecio = document.createTextNode(producto.precioUnitario);
    tdPrecio.appendChild(txtPrecio);

    //Crear Cantidad
    var tdCantidad = document.createElement('td');
    var txtCantidad = document.createTextNode(producto.cantidad);
    tdCantidad.appendChild(txtCantidad);
 
//Creo el boton
var tdComprar = document.createElement('td');
var btnComprar = document.createElement('button');
var txtComprar = document.createTextNode('Comprar');
btnComprar.setAttribute('class', 'btn btn-success') // atributo ccs color
btnComprar.setAttribute('id', producto.id);
btnComprar.appendChild(txtComprar);
tdComprar.appendChild(btnComprar);
tdComprar.addEventListener("click", agregarCarrito); // evento funcion para agregar al carrito


//creo el input
var tdInput = document.createElement('td');
var inputElement = document.createElement('input');
tdInput.appendChild(inputElement);
inputElement.setAttribute('type', 'Number'); // atriburo de tipo numero
inputElement.setAttribute('min', "1"); // atriburo de tipo valor minimo 1
inputElement.setAttribute('id', 'input'); // le doy id
inputElement.setAttribute('placeholder', 'cantidad'); // atributo para mostrar de fondo sugerencia cantidad

//Creo el tr
var tr = document.createElement('tr');
    // meto los td dentro del tr
tr.appendChild(tdNombre);
tr.appendChild(tdPrecio);
tr.appendChild(tdCantidad);
tr.appendChild(tdInput);
tr.appendChild(tdComprar);

//meto el tr en el tbody de la tabla 1 que corresponde por id a tb1
var tbody = document.getElementById('tb1');
tbody.appendChild(tr);
}

//recorro con la funcion para mostrar en tabla
productos.forEach(item=>{
    crearElementoTabla(item);
});


//funcion de agregar del boton comprar
function agregarCarrito(e){
    
    //obtengo el id del producto elegido
   var idElegido= e.target.id;
    //console.log(idElegido);
    //obtengo la posicion mediante una variable
    var index = productos.findIndex(item=> item.id==e.target.id);

// obtengo la descripcion del producto segun la posicion
var producto = productos[index];

//obtengo el contenido del input que ingresa la persona que va a comprar;
var textInput = e.target.parentNode.previousSibling.firstChild;
var cantidadInput = textInput.value;
//console.log(cantidadInput); 

//creo unas variables para luego armar el prod final
var id = producto.id;
var nombre = producto.nombre;
var cantidad = producto.cantidad;
var precio = producto.precioUnitario;

   
// creo poducto final

var productoFinal = 
{
    id: id,
    nombre: nombre,
    precioUnitario: precio,
    cantidad: cantidadInput,

};



// se asegura que se ingrese algun valor  y que el mismo sea mayor a cero
var span = document.querySelector('span');

if (cantidadInput <= '0' || cantidadInput == '')
{   
    alert ('Debe ingresar un numero mayor a cero');
    return;
} 
else
{
    span.innerHTML= 'El producto '+producto.nombre+' se agrego al carrito';
    }


;

var yaComprados = productosEnCarro.findIndex(item => item.id == e.target.id);
//console.log(indAux);
    if (yaComprados != -1) {
        alert("El producto ya existe en el carrito!");
        return; 
    }
 //verifico en una variable que la cantidad elegida en el imput en esa posicion no sea mayor al stock   
var stock = productos[index].cantidad - textInput.value;
    if (stock <0) {
        alert("Esta seleccionando mas unidades de las que tenemos en stock!");
        console.log(stock);
        return;
        
    }
// se agrega el producto a la lista definitiva
productosEnCarro.push(productoFinal);
 
 //console.log(productosEnCarro);


//funcion para meter el producto final en el carrito
crearTablacarro(productoFinal);
//console.log(productosEnCarro)


var stockFinal = cantidad - cantidadInput;
 console.log(stockFinal);

}; 



//funcion de crear elemento en tabla para tabla carrito con id tb2       
function crearTablacarro(producto){

    //crear Nombre
    var tdNombre = document.createElement('td');
    var txtNombre = document.createTextNode(producto.nombre);
    tdNombre.appendChild(txtNombre);

    //Crear Cantidad
    var tdCantidad = document.createElement('td');
    var txtCantidad = document.createTextNode(producto.cantidad);
    tdCantidad.appendChild(txtCantidad);

//Crear Precio
    var tdPrecio = document.createElement('td');
    var txtPrecio = document.createTextNode(producto.precioUnitario);
    tdPrecio.appendChild(txtPrecio);

//Crear PrecioTotal
var tdPrecioTotal = document.createElement('td');
var txtPrecioTotal = document.createTextNode(producto.precioUnitario * producto.cantidad);
tdPrecioTotal.appendChild(txtPrecioTotal);

    
//Creo el boton Borrar
var tdBorrar = document.createElement('td');
var btnBorrar = document.createElement('button');
var txtBorrar = document.createTextNode('Borrar');
btnBorrar.setAttribute('class', 'btn btn-danger')
btnBorrar.setAttribute('id', producto.id);
//btnBorrar.setAttribute('id', producto.id);
btnBorrar.appendChild(txtBorrar);
tdBorrar.appendChild(btnBorrar);
tdBorrar.addEventListener("click", borrarCarrito); // funcion para eliminar los productos del carrito

//Creo el tr
var tr = document.createElement('tr');
    
tr.appendChild(tdNombre);
tr.appendChild(tdCantidad);
tr.appendChild(tdPrecio);
tr.appendChild(tdPrecioTotal);
tr.appendChild(tdBorrar);

var tbody = document.querySelector('#tb2');
tbody.appendChild(tr);
};





function borrarCarrito(e){
    
    //busco el indice/posicion del producto a eliminar y lo elimino del array
    var itemBorrar = productosEnCarro.findIndex(item => item.id == e.target.id);
    console.log(productosEnCarro);
    productosEnCarro.splice(itemBorrar,1)
    console.log(itemBorrar);
    ItemBorrar = e.target.parentNode.parentNode;
    console.log(ItemBorrar)
    //le doy remover al item fila completa
    ItemBorrar.parentNode.removeChild(ItemBorrar)
    
};
   
 

//funcion para calcular el total de la compra
function calcularTotal(){
    var h4 = document.querySelector('h4');
    var total = 0;
    productosEnCarro.forEach(item =>
    {
        total += item.precioUnitario * item.cantidad;
    });
    h4.innerHTML = "El total a pagar es de "+total+ ' pesos. Muchas gracias por la compra';
    }