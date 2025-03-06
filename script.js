document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const area = document.getElementById('area').value;
    const clave = document.getElementById('clave').value;

    // Definimos las claves válidas para cada área
    const clavesValidas = {
        Almacen: "Alm123", // Clave para Fabricación
        Calidad: "ctrl456",    // Clave para Control Estructural
        Servicio: "Servicio"    // Clave para Servicio
    };

    // Definimos los enlaces para cada área
    const enlaces = {
        Almacen: "https://app.powerbi.com/view?r=eyJrIjoiMzAwMTEyMGYtYzE5Yi00MTNlLWJiNDYtYTkyOGU0MjVhZmExIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
        Calidad: "https://app.powerbi.com/view?r=eyJrIjoiZTdkYjlmNzctYzNmNS00NjE0LTllNmMtMjAwMmEzMWQ4ZGQwIiwidCI6IjU0NWQ1NWI1LWMyNzAtNGY3YS1hYTVkLWIzM2FhYWRkYTllNyIsImMiOjR9",
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