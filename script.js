class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
        this.nombre = nombre || "Sin nombre";
        this.edad = Number(edad) || 0;
        this.dni = dni || "00000000";
        this.sexo = sexo === "M" ? "M" : "H";
        this.peso = Number(peso) || 0;
        this.altura = Number(altura) || 0;
        this.nacimiento = Number(nacimiento) || new Date().getFullYear();
    }

    mostrarGeneracion() {
        const anio = this.nacimiento;
        let generacion = "No definida";
        let rasgo = "Sin rasgo característico";

        if (anio >= 1994 && anio <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (anio >= 1981 && anio <= 1993) {
            generacion = "Generación Y (millennials)";
            rasgo = "Frustración";
        } else if (anio >= 1969 && anio <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (anio >= 1949 && anio <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (anio >= 1930 && anio <= 1948) {
            generacion = "Silent Generation";
            rasgo = "Austeridad";
        }

        return `La persona pertenece a ${generacion} y su rasgo característico es: ${rasgo}.`;
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `La persona ${this.nombre} es mayor de edad.`;
        }
        return `La persona ${this.nombre} NO es mayor de edad.`;
    }

    mostrarDatos() {
        return `Datos de la persona:\nNombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} m\nAño de nacimiento: ${this.nacimiento}`;
    }
}

const form = document.getElementById("persona-form");
const botonCrear = document.getElementById("boton-crear");
const botonGeneracion = document.getElementById("boton-generacion");
const botonEdad = document.getElementById("boton-edad");
const botonDatos = document.getElementById("boton-datos");
const cajaResultado = document.getElementById("resultado");
let personaCreada = null;

function actualizarBotones() {
    const habilitado = Boolean(personaCreada);
    botonGeneracion.disabled = !habilitado;
    botonEdad.disabled = !habilitado;
    botonDatos.disabled = !habilitado;
}

botonCrear.addEventListener("click", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const sexo = document.getElementById("sexo").value;
    const peso = document.getElementById("peso").value.trim();
    const altura = document.getElementById("altura").value.trim();
    const nacimiento = document.getElementById("nacimiento").value.trim();

    if (!nombre || !edad || !dni || !peso || !altura || !nacimiento) {
        alert("Por favor completa todos los campos antes de crear la persona.");
        return;
    }

    personaCreada = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
    cajaResultado.textContent = `Persona creada: ${personaCreada.nombre} (${personaCreada.edad} años)`;
    alert("Persona creada correctamente.");
    actualizarBotones();
});

botonGeneracion.addEventListener("click", function () {
    if (!personaCreada) return;
    const mensaje = personaCreada.mostrarGeneracion();
    alert(mensaje);
    cajaResultado.textContent = mensaje;
});

botonEdad.addEventListener("click", function () {
    if (!personaCreada) return;
    const mensaje = personaCreada.esMayorDeEdad();
    alert(mensaje);
    cajaResultado.textContent = mensaje;
});

botonDatos.addEventListener("click", function () {
    if (!personaCreada) return;
    const mensaje = personaCreada.mostrarDatos();
    alert(mensaje);
    cajaResultado.textContent = mensaje;
});

actualizarBotones();
