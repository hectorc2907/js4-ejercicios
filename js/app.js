function ejercicio1() {
  let mensajePunto1 = document.getElementById("mensajePunto1");
  let mensajeEstadoAuto = document.getElementById("mensajeEstadoAuto");
  let objeto = "";

  let auto = {
    marca: "",
    modelo: "",
    color: "",
    estado: "El Auto esta Apagado",
    encendido() {
      this.estado = "El Auto esta Encendido";
      mensajeEstadoAuto.textContent = this.estado;
    },
    apagado() {
      this.estado = "El Auto esta Apagado";
      mensajeEstadoAuto.textContent = this.estado;
    },
  };

  auto.marca = prompt("Ingrese la Marca de su Auto: ") || "Desconocido";
  objeto += `La Marca es: ` + auto.marca + `<br>`;
  auto.modelo = prompt("Ingrese el Modelo de su Auto: ") || "Desconocido";
  objeto += `El Modelo es: ` + auto.modelo + `<br>`;
  auto.color += prompt("Ingrese el Color de su Auto: ") || "Desconocido";
  objeto += `El Color es: ` + auto.color + `<br>`;
  mensajePunto1.innerHTML = objeto;
  let btnEncendido = document.getElementById("btnAutoEncendido");
  btnEncendido.addEventListener("click", function () {
    auto.encendido();
  });

  let btnApagado = document.getElementById("btnAutoApagado");
  btnApagado.addEventListener("click", function () {
    auto.apagado();
  });
  mensajeEstadoAuto.textContent = auto.estado;
}
let punto1 = document.getElementById("btnPunto1");
punto1.addEventListener("click", ejercicio1);

function ejercicio2() {
  let mensajePunto2 = document.getElementById("mensajePunto2");
  let mensajeEstadoCuenta = document.getElementById("mensajeEstadoCuenta");
  let cuenta = {
    titular: "",
    saldo: 0,
    ingresarSaldo() {
      this.saldo += parseInt(prompt("Ingresar Saldo: "));
      this.informarSaldo();
    },
    extraerSaldo() {
      this.saldo -= parseInt(prompt("Extraer Saldo: "));
      this.informarSaldo();
    },
    informarSaldo() {
      if (this.saldo === 0) {
        mensajeEstadoCuenta.textContent = `La cuenta se encuentra en 0`;
      } else if (this.saldo > 0) {
        mensajeEstadoCuenta.textContent = `La cuenta es positiva con $${this.saldo}`;
      } else {
        mensajeEstadoCuenta.textContent = `La cuenta es negativa con -$${this.saldo}`;
      }
    },
  };
  cuenta.titular =
    prompt("Ingrese el Nombre del titular de la cuenta: ") || "Desconocido";
  mensajePunto2.innerHTML = `Titular: ${cuenta.titular}<br>Saldo: ${cuenta.saldo}<br>`;
  let btnIngresar = document.getElementById("btnIngresarDinero");
  btnIngresar.addEventListener("click", function () {
    cuenta.ingresarSaldo();
  });
  let btnInforme = document.getElementById("btnInforme");
  btnInforme.addEventListener("click", function () {
    cuenta.informarSaldo();
  });
  let btnExtraerDinero = document.getElementById("btnExtraerDinero");
  btnExtraerDinero.addEventListener("click", function () {
    cuenta.extraerSaldo();
  });
  mensajePunto2.innerHTML = `Titular: ${cuenta.titular}<br>Saldo: ${cuenta.saldo}<br>`;
}
let punto2 = document.getElementById("btnPunto2");
punto2.addEventListener("click", ejercicio2);

function ejercicio3() {
  let mPerimetro = document.getElementById("mensajePerimetro");
  let mArea = document.getElementById("mensajeArea");
  class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    set cambiarAltura(nuevaAltura) {
      this.alto = nuevaAltura;
    }
    set cambiarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
    get altoRectangulo() {
      return this.alto;
    }
    get anchoRectangulo() {
      return this.ancho;
    }
    get area() {
      return this.alto * this.ancho;
    }
    get perimetro() {
      return 2 * (this.alto + this.ancho);
    }
    detalle() {
      return `<p>El rectangulo tiene una altura de ${this.altoRectangulo} cm y un ancho de ${this.anchoRectangulo} cm</p>`;
    }
  }
  let alto = parseInt(prompt("Ingrese el Valor del alto"));
  let ancho = parseInt(prompt("Ingrese el Valor del ancho"));
  let rectangulo = new Rectangulo(alto, ancho);
  mPerimetro.innerHTML = `${rectangulo.detalle()} dan como resultado un perimetro de ${
    rectangulo.perimetro
  }`;
  mArea.innerHTML = `${rectangulo.detalle()} dan como resultado un area de ${
    rectangulo.area
  }`;
  let btnAltoNuevo = document.getElementById("btnAltoNuevo");
  btnAltoNuevo.addEventListener("click", function () {
    let nuevoAlto = parseInt(
      prompt("Ingrese el alto nuevo que desea utilizar")
    );
    rectangulo.cambiarAltura = nuevoAlto;
    actualizarResultados();
  });
  let btnAnchoNuevo = document.getElementById("btnAnchoNuevo");
  btnAnchoNuevo.addEventListener("click", function () {
    let nuevoAncho = parseInt(
      prompt("Ingrese el ancho nuevo que desea utilizar")
    );
    rectangulo.cambiarAncho = nuevoAncho;
    actualizarResultados();
  });
  function actualizarResultados() {
    mPerimetro.innerHTML = `${rectangulo.detalle()} dan como resultado un perimetro de ${
      rectangulo.perimetro
    }`;
    mArea.innerHTML = `${rectangulo.detalle()} dan como resultado un area de ${
      rectangulo.area
    }`;
  }
}
let punto3 = document.getElementById("btnPunto3");
punto3.addEventListener("click", ejercicio3);

function ejercicio4() {
  let productos = [];
  class Producto {
    constructor(codigo, nombre, precio) {
      this._codigo = codigo;
      this._nombre = nombre;
      this._precio = precio;
    }
    mostrarDetalles() {
      return `<ul>
                <li>Codigo = ${this._codigo}</li>
                <li>Nombre = ${this._nombre}</li>
                <li>Precio = ${this._precio}</li>
              </ul>`;
    }
  }
  let mensajeProductos = document.getElementById("mensajeProductos");
  let btnAgregarDatos = document.getElementById("btnAgregarDatos");
  btnAgregarDatos.addEventListener("click", function (e) {
    e.preventDefault();
    let codigo = parseInt(prompt("Ingrese el Codigo numerico:")) || 0;
    let nombre = prompt("Ingrese el Nombre del producto:") || "Sin Nombre";
    let precio = parseInt(prompt("Ingrese el Precio:")) || 0;
    let nuevoProducto = new Producto(codigo, nombre, precio);
    productos.push(nuevoProducto);
    console.log(productos);
    mensajeProductos.innerHTML = "";
    productos.forEach((producto) => {
      mensajeProductos.innerHTML += producto.mostrarDetalles() + "<br>";
    });
  });
}
let punto4 = document.getElementById("btnPunto4");
punto4.addEventListener("click", ejercicio4);
