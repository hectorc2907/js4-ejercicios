let auto = {
    marca: 'Renault',
    modelo: 'Sandero Stepway',
    color: 'Gris Fer',
    anio: 2022,
    encender: () => {document.write('El Auto se Encuentra Encendio')},
    apagar: () => {document.write('El Auto se Encuentra Apagado')}
}


document.write(`La Marca del Auto es ${auto.marca}<br>`);
document.write(`El Modelo del Auto es ${auto.modelo}<br>`);
document.write(`El Color del Auto es ${auto.color}<br>`);
document.write(`El Año del Auto es ${auto.anio}<br>`);

if(confirm('¿Desea encender el Auto?') == true){
    auto.encender();
}else{
    auto.apagar();
}