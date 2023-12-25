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
    mensajeProductos.innerHTML = "";
    productos.forEach((producto) => {
      mensajeProductos.innerHTML += producto.mostrarDetalles() + "<br>";
    });
  });
}
let punto4 = document.getElementById("btnPunto4");
punto4.addEventListener("click", ejercicio4);

function ejercicio5() {
  class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento) {
      this._nombre = nombre;
      this._edad = edad;
      this._dni = this.generarDNI();
      this._sexo = sexo;
      this._peso = peso;
      this._altura = altura;
      this._nacimiento = nacimiento;
    }
    mostrarGeneracion() {
      if (this._nacimiento >= 1930 && this._nacimiento <= 1948) {
        return `<p>Perteneces a la Generacion Silenciosa y tu rasgo caracteristico es la Austeridad</p>`;
      } else if (this._nacimiento >= 1949 && this._nacimiento <= 1968) {
        return `<p>Perteneces a la Generacion Baby Boom y tu rasgo caracteristico es la Ambición</p>`;
      } else if (this._nacimiento >= 1969 && this._nacimiento <= 1980) {
        return `<p>Perteneces a la Generacion X y tu rasgo caracteristico es la Obsesión por el éxito</p>`;
      } else if (this._nacimiento >= 1981 && this._nacimiento <= 1993) {
        return `<p>Perteneces a la Generacion Y(Millennials) y tu rasgo caracteristico es la Frustración</p>`;
      } else if (this._nacimiento >= 1994 && this._nacimiento <= 2010) {
        return `<p>Perteneces a la Generacion Z y tu rasgo caracteristico es la Irreverencia</p>`;
      } else {
        return `<p>Generacion no especifica sin rasgo caracteristico</p>`;
      }
    }
    esMayorDeEdad() {
      if (this._edad >= 18) {
        return `<p>El usuario tiene ${this._edad} y es mayor de edad</p>`;
      } else {
        return `<p>El usuario tiene ${this._edad} y es menor de edad</p>`;
      }
    }
    mostrarDatos() {
      return `<ul>
                <li>Nombre: ${this._nombre}</li>
                <li>Edad: ${this._edad}</li>
                <li>DNI: ${this._dni}</li>
                <li>Genero: ${this._sexo}</li>
                <li>Peso: ${this._peso}KG</li>
                <li>Altura: ${this._altura}CM</li>
                <li>Año de Nacimiento: ${this._nacimiento}</li>
              </ul>`;
    }
    generarDNI() {
      return parseInt(Math.random() * 99999999);
    }
  }
  let mensajePersona = document.getElementById("mensajePersona");
  let btnIngresarDatos = document.getElementById("btnIngresarDatos");
  btnIngresarDatos.addEventListener("click", function () {
    let nombre = prompt("Ingrese el nombre:") || "No Especifico Datos";
    let edad = parseInt(prompt("Ingrese la edad:")) || "No Especifico Datos";
    let genero =
      prompt("Ingrese el sexo M = Masculino, F = Femenino") ||
      "No Especifico Datos";
    if (genero == "M") {
      genero = "Masculino";
    } else if (genero == "F") {
      genero = "Femenino";
    } else {
      genero = "Sin Genero";
    }
    let peso =
      parseInt(prompt("Ingrese el peso en kg:")) || "No Especifico Datos";
    let altura =
      parseInt(prompt("Ingrese la altura en cm:")) || "No Especifico Datos";
    let nacimiento =
      parseInt(prompt("Ingrese el año de nacimiento: ")) ||
      "No Especifico Datos";
    let individuo = new Persona(nombre, edad, genero, peso, altura, nacimiento);
    mensajePersona.innerHTML = "";
    mensajePersona.innerHTML +=
      individuo.mostrarDatos() +
      individuo.mostrarGeneracion() +
      individuo.esMayorDeEdad();
  });
}
let punto5 = document.getElementById("btnPunto5");
punto5.addEventListener("click", ejercicio5);

function ejercicio6() {
  class Libro {
    constructor(isbm, nombre, autor, paginas) {
      this._isbm = isbm;
      this._nombre = nombre;
      this._autor = autor;
      this._paginas = paginas;
    }
    get obtenerIsbm() {
      return this._isbm;
    }
    get obtenerNombre() {
      return this._nombre;
    }
    get obtenerAutor() {
      return this._autor;
    }
    get obtenerPaginas() {
      return this._paginas;
    }
    set cambiarIsbm(isbmNuevo) {
      this._isbm = isbmNuevo;
    }
    set cambiarNombre(nombreNuevo) {
      this._nombre = nombreNuevo;
    }
    set cambiarAutor(autorNuevo) {
      this._autor = autorNuevo;
    }
    set cambiarPaginas(paginasNuevo) {
      this._paginas = paginasNuevo;
    }
    mostrarLibro() {
      return `El libro ${this._nombre} con ISBN ${this._isbm} creado por el autor ${this._autor} tiene ${this._paginas} paginas`;
    }
  }
  let libros = [];
  let mensajeLibro = document.getElementById("mensajeLibro");
  let btnIngresarLibro = document.getElementById("btnIngresarLibro");
  btnIngresarLibro.addEventListener("click", function () {
    let isbm =
      prompt("Ingrese el isbm del libro:") ||
      "No se ingreso isbm para este libro";
    let nombre =
      prompt("Ingrese el nombre del libro:") ||
      "No se ingreso nombre para este libro";
    let autor =
      prompt("Ingrese el autor del libro:") ||
      "No se ingreso autor para este libro";
    let paginas =
      parseInt(prompt("Ingrese la cantidad de paginas de este libro:")) || 0;
    let libro = new Libro(isbm, nombre, autor, paginas);
    libros.push(libro);
    mensajeLibro.innerHTML = "";
    libros.forEach((libro) => {
      mensajeLibro.innerHTML += libro.mostrarLibro() + "<br>";
    });
    if (libros.length <= 1) {
      mensajeLibro.innerHTML += `El libro con mas paginas es de la posicion ${libros.length}`;
    } else {
      let nPaginas = 0;
      let posicion = 0;
      for (let i = 0; i < libros.length; i++) {
        if (nPaginas < libros[i].obtenerPaginas) {
          posicion = i;
          nPaginas = libros[i].obtenerPaginas;
        }
      }
      mensajeLibro.innerHTML += `El libro con mas paginas esta en la posicion numero ${
        posicion + 1
      }`;
    }
  });
}
let punto6 = document.getElementById("btnPunto6");
punto6.addEventListener("click", ejercicio6);
