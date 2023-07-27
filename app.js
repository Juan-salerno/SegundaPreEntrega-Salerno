class Usuario {
  constructor() {
    this.usuarios = [];
  }

  agregarUsuario() {
    const nombre = prompt('Ingrese el nombre del usuario:');
    const edad = parseInt(prompt('Ingrese la edad de ' + nombre + ':'));

    if (isNaN(edad) || edad <= 0) {
      alert('La edad debe ser un número válido y mayor que 0.');
    }

    const usuario = { nombre, edad };
    this.usuarios.push(usuario);

    alert('Usuario agregado correctamente.');
  }

  mostrarUsuarios() {
    let usuariosInfo = 'Usuarios:\n';
    this.usuarios.forEach((usuario) => {
      usuariosInfo += `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}\n`;
    });
    alert(usuariosInfo);
  }

  mostrarMayoresDe18() {
    const mayoresDe18 = this.usuarios.filter(usuario => usuario.edad >= 18);
    let usuariosInfo = 'Usuarios mayores de 18 años:\n';
    mayoresDe18.forEach((usuario) => {
      usuariosInfo += `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}\n`;
    });
    alert(usuariosInfo);
  }
}


const simulador = new Usuario();


let rta = ""

do {
  simulador.agregarUsuario();
  rta = prompt("¿Desea agregar otro usuario? Si no es asi ingrese 'ESC'").toUpperCase();
} while (rta != 'ESC');

simulador.mostrarUsuarios();
simulador.mostrarMayoresDe18();
