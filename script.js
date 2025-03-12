document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const area = document.getElementById('area').value;
    const clave = document.getElementById('clave').value;

    // Definimos las claves válidas para cada área
    const clavesValidas = {
        Almacen: "CADALAP", // Clave para Fabricación
        Logistica: "CADLOCOM",    // Clave para Control Estructural
        RecursosHumanos: "GH2025",    // Clave para Servicio
	Ingenieria: "ININVDES",
	Calidad: "OPCONCAL",
	Estructural: "OPCONCON",
	Fabricacion: "OPFAB",
 	Ensamble: "OPENSAM",
	SubEnsamble: "OPSUBEN",
	Servicio: "SERVTALLCAMMIN"
    	};

    // Definimos los enlaces para cada área
    const enlaces = {
        Almacen: "https://app.powerbi.com/view?r=eyJrIjoiMzAwMTEyMGYtYzE5Yi00MTNlLWJiNDYtYTkyOGU0MjVhZmExIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
        Logistica: "https://app.powerbi.com/view?r=eyJrIjoiODc3YjU4YTktYTI3Ni00NGE1LTkyYzEtYmU5MmVkZTlmZjZhIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
        RecursosHumanos: "https://app.powerbi.com/view?r=eyJrIjoiMDAzYjJmM2MtMWE3NC00NDMyLTg3ZTYtZTc3NGQ0ODA0ZWVhIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	Ingenieria: "https://app.powerbi.com/view?r=eyJrIjoiNGExNDJjYWQtYzUzMi00YmE2LWEzZWItMDljZDQ0M2YyYzA4IiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	Calidad: "https://app.powerbi.com/view?r=eyJrIjoiYTYzYWY3NTAtMTRhMy00NzIzLWI1NTEtM2M5MjFiMzdkODYyIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	Estructural: "https://app.powerbi.com/view?r=eyJrIjoiZDBhYjNiNzQtMjEyMy00YzUzLWIzYTItY2MyYjBjMTBkNjcyIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	Fabricacion: "https://app.powerbi.com/view?r=eyJrIjoiODAwNzg1NzMtZWUyMC00ZTQ4LWIxOWMtYjNjZDM1NDFjODg5IiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	Ensamble: "https://app.powerbi.com/view?r=eyJrIjoiMjJlN2RkNjUtNjdiMS00MGMyLWI2YjYtOWViMGJmNWZiOTAzIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	SubEnsamble: "https://app.powerbi.com/view?r=eyJrIjoiMGU0MjE5MGYtY2M1Yy00MmI5LWJhMTctYmMxNjJkMzIyNTIzIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
	Servicio: "https://app.powerbi.com/view?r=eyJrIjoiZTU3MmYzN2QtYmZmMi00Y2VmLWEzN2EtMDcyYWIxY2UyZTUxIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9"
    	};

    // Validamos la clave
    if (clave === clavesValidas[area]) {
        const enlaceContainer = document.getElementById('enlaceContainer');
        const enlaceAcceso = document.getElementById('enlaceAcceso');

        // Mostrar el enlace correspondiente al área seleccionada
        enlaceAcceso.href = enlaces[area];
        enlaceAcceso.textContent = `Acceder al Área de ${area.charAt(0).toUpperCase() + area.slice(1)}`;
        enlaceContainer.style.display = 'block';
    } else {
        alert('Clave incorrecta. Inténtalo de nuevo.');
    }
});