// Manejo de libros en una estantería
const estanteria = {
    libros: [
        { nombre: "El Quijote", autor: "Miguel de Cervantes", leido: false },
        { nombre: "1984", autor: "George Orwell", leido: true },
        { nombre: "Cien años de soledad", autor: "Gabriel García Márquez", leido: false }
    ],
    log: function() {
        this.libros.forEach(libro => {
            if (libro.leido) {
                console.log(`Ya has leído ${libro.nombre} de ${libro.autor}.`);
            } else {
                console.log(`Aún no has leído ${libro.nombre} de ${libro.autor}.`);
            }
        });
    },
    sugerencia: function() {
        const sinLeer = this.libros.filter(libro => !libro.leido);
        if (sinLeer.length === 0) {
            console.log("¡Ya has leído todos los libros!");
            return;
        }
        const aleatorio = Math.floor(Math.random() * sinLeer.length);
        const libro = sinLeer[aleatorio];
        console.log(`Te sugerimos leer: ${libro.nombre} de ${libro.autor}.`);
    }
};

// Métodos
estanteria.log();
estanteria.sugerencia();

//Resultados en la página
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "";
estanteria.libros.forEach(libro => {
    if (libro.leido) {
        resultadoDiv.innerHTML += `Ya has leído ${libro.nombre} de ${libro.autor}.<br>`;
    } else {
        resultadoDiv.innerHTML += `Aún no has leído ${libro.nombre} de ${libro.autor}.<br>`;
    }
});
resultadoDiv.innerHTML += "Libro sugerido: ";
const sinLeer = estanteria.libros.filter(libro => !libro.leido);
if (sinLeer.length > 0) {
    const aleatorio = Math.floor(Math.random() * sinLeer.length);
    const sugerido = sinLeer[aleatorio];
    resultadoDiv.innerHTML += `${sugerido.nombre} de ${sugerido.autor}.`;
} else {
    resultadoDiv.innerHTML += "¡Ya has leído todos los libros!";
}
