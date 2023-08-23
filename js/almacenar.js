document.addEventListener('DOMContentLoaded', function() {
    // Elementos HTML
    const inputItem = document.getElementById('item');
    const agregarBtn = document.getElementById('agregar');
    const limpiarBtn = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');

    // Cargar elementos del localStorage
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    // Función para mostrar los ítems en el HTML
    function mostrarItems() {
        contenedor.innerHTML = '';
        itemsArray.forEach(function(item) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = item;
            contenedor.appendChild(li);
        });
    }

    // Función para agregar elementos a la lista y al localStorage
    function agregarItem() {
        const valor = inputItem.value.trim();

        if (valor !== "") {
            itemsArray.push(valor);
            localStorage.setItem('items', JSON.stringify(itemsArray)); // Guarda el array en localStorage
            inputItem.value = "";
            mostrarItems();
        }
    }

    // Función para limpiar la lista y el localStorage
    function limpiarLista() {
        itemsArray = [];
        localStorage.removeItem('items');
        mostrarItems();
    }

    // Event listeners
    agregarBtn.addEventListener('click', agregarItem);
    limpiarBtn.addEventListener('click', limpiarLista);

    // Al cargar la página, mostrar los ítems del localStorage
    mostrarItems();
});