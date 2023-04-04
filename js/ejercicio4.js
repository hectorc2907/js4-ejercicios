class producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimirDatos(){
        document.write(`El codigo del producto es ${this.codigo}, el nombre del producto ${this.nombre} y el precio es ${this.precio}<br>`);
    }
}

const datos = [];

while(confirm('Desea ingresar un producto?') == true){
    let cod = prompt('Ingrese el codigo del producto');
    let nom = prompt('Ingrese el nombre del producto');
    let pre = prompt('Ingrese el precio del producto');
    datos.push(new producto(cod,nom,pre));
}

for(const producto of datos){
    producto.imprimirDatos();
}