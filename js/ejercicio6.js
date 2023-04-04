class libro{
    constructor(isbn,titulo,autor,numPaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
    }
    set isbn(nuevoISBN){
        this._isbn = nuevoISBN;
    }
    get isbn(){
        return this._isbn;
    }
    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo;
    }
    get titulo(){
        return this._titulo;
    }
    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
    get autor(){
        return this._autor;
    }
    set numPaginas(nuevoNumPaginas){
        this._numPaginas = nuevoNumPaginas;
    }
    get numPaginas(){
        return this._numPaginas;
    }
    mostrarLibro(){
        document.write(`El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._numPaginas} paginas<br>`);
    }
}
const libro1 = new libro(123456789,'Jurassic Park','Michael Keaton',100);
const libro2 = new libro(987654321,'El Mundo Perdido','Michael Keaton',98);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.numPaginas>libro2.numPaginas){
    document.write('El libro 1 tiene mas paginas que el libro 2');
}else{
    document.write('El libro 2 tiene mas paginas que el libro 1');
}