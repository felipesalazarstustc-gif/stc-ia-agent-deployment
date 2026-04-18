console.log(">>> Sistema de IA en Node.js Activo");

function procesarDatos() {
    const tareas = ["Analizando logs", "Verificando seguridad", "Optimizando recursos"];
    const tareaRandom = tareas[Math.floor(Math.random() * tareas.length)];
    console.log(`[IA-Node]: ${tareaRandom}...`);
}

setInterval(procesarDatos, 12000);
