let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(cantidad) {
        this.saldo = this.saldo + cantidad;
        return this.saldo;
    },
    extraer: function(cantidad) {
        this.saldo = this.saldo - cantidad;
        return this.saldo;
    },
    informar: function(){document.write(`El Saldo es $${this.saldo} del Titular ${this.titular}`)}
}
let valor = parseFloat(prompt('Ingrese el monto a Depositar'))
cuenta.ingresar(valor);
valor = parseFloat(prompt('Ingrese el monto a Retirar'))
cuenta.extraer(valor);
cuenta.informar();