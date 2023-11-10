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
