class rectangulos{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    perimetro(){
        return (2*(this.base)+2*(this.altura));
    }
    area(){
        return (this.base*this.altura);
    }
}

let a = parseInt(prompt('Ingrese el valor de Altura'));
let b = parseInt(prompt('Ingrese el valor de Base'));

const x = new rectangulos(b,a)

document.write(`El Perimetro del Rectangulo es ${x.perimetro()}<br>`);
document.write(`El Area del Rectangulo es ${x.area()}`);