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
