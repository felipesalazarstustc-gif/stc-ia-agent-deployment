// Agente de monitoreo IA
console.log(">>> Sistema de IA en Node.js Activo");

function procesarDatos() {
    const tareas = ["Analizando logs", "Verificando seguridad", "Optimizando recursos"];
    const tareaRandom = tareas[Math.floor(Math.random() * tareas.length)];
    console.log(`[IA-Node]: ${tareaRandom}...`);
}

// Ejecutar cada 12 segundos
setInterval(procesarDatos, 12000);