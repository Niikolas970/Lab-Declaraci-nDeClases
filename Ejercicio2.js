class Contenido {
    constructor(titulo,genero,anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha(){
        return `Título: ${this.titulo} | Género: ${this.genero} | Año: ${this.anio}`
    }
    retirar(){
        this.disponible = false;
        return `La pelicula ${this.titulo} ya fue retirada`
    }
    estado(){
        return `Ahora mismo la pelicula se encuentra ${this.disponible ? "Disponible": "Retirada"}`
    }
}

class Pelicula extends Contenido {
    constructor(titulo,genero,anio,duracion) {
        super (titulo,genero,anio)
        this.duracion = duracion; 
    }
    duracionFormateada(){
        return `${Math.floor(this.duracion / 60)}h ${this.duracion % 60}min`
    }
    ficha() {
        return `${super.ficha()} - Duración: ${this.duracionFormateada()}`
    }
}

class Serie extends Contenido{
    constructor(titulo,genero,anio,temporada) {
        super(titulo,genero,anio)
        this.temporada = temporada;
        this.episodioPorTemporada = 0;
    }
    registrarEpisodios(cantidad){
        this.episodioPorTemporada = cantidad; 
        return `La cantidad de episodios que contiene la serie ${this.titulo} tiene una cantidad de ${this.episodioPorTemporada}`
    }
    totalEpisodios(){
        return this.temporada * this.episodioPorTemporada;
    }
    ficha(){
        return `${super.ficha()} - Temporadas ${this.temporada} - Total de episodios ${this.totalEpisodios()}`
    }

}

const pelicula1 = new Pelicula("Inception", "Ciencia Ficción", 2010, 148);
const pelicula2 = new Pelicula("El Padrino", "Drama", 1972, 175);
const pelicula3 = new Pelicula("Interstellar", "Ciencia Ficción", 2014, 169);


const serie1 = new Serie("Breaking Bad", "Drama", 2008, 5);
const serie2 = new Serie("Stranger Things", "Terror", 2016, 4);
const serie3 = new Serie("The Office", "Comedia", 2005, 9);


serie1.registrarEpisodios(13);
serie2.registrarEpisodios(9);
serie3.registrarEpisodios(24);


const catalogo = [pelicula1, pelicula2, pelicula3, serie1, serie2, serie3];
for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}

console.log(pelicula2.retirar());
console.log(serie3.retirar());
console.log(pelicula2.estado());
console.log(serie3.estado());

let disponibles = 0;
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible) {
        disponibles++;
    }
}
console.log(` Disponibilidad`);
console.log(`Contenidos disponibles: ${disponibles} de ${catalogo.length}`);