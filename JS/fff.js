// nombre del supermercado
var nombreSuper = document.querySelector('h1');
nombreSuper.innerHTML = "Almacen Don Java CSS.A (css anonima)";

//variable de productos de ejemplo sera cambiada por la luego dada
var productos = [
            {
                id:1,
                nombre: "Bolsa para hielo KINE-SPORTS ®",
                cantidad: 10,
                precioUnitario: 500,
            },
            {
                id:2,
                nombre: "Spray BANDERGREEN",
                cantidad: 5,
                precioUnitario: 100,
            },
            {
                id:3,
                nombre: "TELA ADHESIVA",
                cantidad: 10,
                precioUnitario: 900,
            },
            ];

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
inputElement.setAttribute('type', 'text'); // atriburo de tipo texto
inputElement.setAttribute('id', 'input'); // le doy id
inputElement.setAttribute('placeholder', 'cantidad'); // atriburo para mostrar de fondo

//Creo el tr
var tr = document.createElement('tr');
    // meto los td dentro del tr
tr.appendChild(tdNombre);
tr.appendChild(tdPrecio);
tr.appendChild(tdCantidad);
tr.appendChild(tdInput);
tr.appendChild(tdComprar);

//meto el tr en el tbody de la tabla que corresponde por id
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
    //obtengo la posicion
    var index = productos.findIndex(item=> item.id==idElegido);
//console.log(index);
// obtengo la descripcion del producto
var producto = productos[index];
//console.log(descripcion);
//obtengo el contenido del input;
var textInput = e.target.parentNode.previousSibling.firstChild;
var cantidadInput = textInput.value;
console.log(cantidadInput); 

//armo el producto por item
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
console.log(productoFinal); 

 // se agrega el producto a la lista definitiva
 productosEnCarro.push(productoFinal);

 console.log(productosEnCarro);


// se asegura que se ingrese algun valor.
var p = document.querySelector('p');
var h3 = document.querySelector('h3');
if (cantidadInput <= '0' || cantidadInput == '')
{   
    p.innerHTML= 'Debe ingresar un numero mayor a cero';
    //alert ('Debe ingresar un numero mayor a cero');
    return;

} 
else
{
    p.innerHTML= 'El producto se agrego al carrito';
    
}
crearTablacarro(productoFinal);
}; 



//funcion de crear elemento en tabla           
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
btnBorrar.appendChild(txtBorrar);
tdBorrar.appendChild(btnBorrar);
//tdBorrar.addEventListener("click", borrarCarrito);

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



function borrarCarrito(e)
{
    // se obtiene el id del button
    var id_button = e.target.id;
    // el id de los botones para borrar productos comprados tiene el formato 'xxx_delete'
    // donde 'xxx'='id es el id del producto'.
    var id_button_number = id_button.replace('_delete', '');
    // se obtiene el indice de un producto de acuerdo a su id.
    var index = cantidadInput.findIndex(p => p.id == id_button_number);
    // se borra el producto deseado del vector.
    cantidadInput.splice(index, 1);

    // a partir de su id obtenemos el button
    var button = document.getElementById(id_button);
    // a partir del button obtenemos <td> -> <tr>
    var nodo_tr = button.parentNode.parentNode; // <tr>

    // se obtienen todos los nodos del <tr> y se van borrando uno a uno
    nodo_tr.childNodes.forEach(nodo_td => 
    {
        // se obtienen todos los nodos del <td> y se van borrando uno a uno
        nodo_td.childNodes.forEach(n =>
        {
            nodo_td.removeChild(n);
        });
    });

    // se actualiza el total de la compra.
    //updateTotal();
}

 /*  
// se verifica si el producto ya fue comprado o no.
var yacomprados = cantidadElegida.findIndex(item=> item.id == ProductosCarro);
if (yacomprados != -1)
{
    p.innerHTML='Este producto ya exoiste en el carro, si desea modificar la cantidad debera eliminarlo y volver a ingresarlo';
}   */

    




//----------esto ya esta listo es una prueba despues tengo qeu actualizar con los campos correctos-----------

//funcion para calcular el total
var h2 = document.querySelector('h3');
function calcularTotal(){
    var total = 0;
    productos.forEach (item => {
     var compraIndiv = item.precioUnitario*item.cantidad;
      total = total + compraIndiv;
      h2.innerHTML = "El total de la compra es de "+total;
      });
    console.log(total);
    };

    
