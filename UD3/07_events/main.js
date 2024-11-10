window.onload = function(e) {
    console.log('documento cargado');
    
    document.getElementById('enlace_1').onclick = function() {
        toggleSection('contenidos_1', 'enlace_1');
    };

    document.getElementById('enlace_2').onclick = function() {
        toggleSection('contenidos_2', 'enlace_2');
    };

    document.getElementById('enlace_3').onclick = function() {
        toggleSection('contenidos_3', 'enlace_3');
    };
}
function toggleSection(sectionId, linkId) {
    const section = document.getElementById(sectionId);
    const link = document.getElementById(linkId);

    if (section.style.display === 'none') {
        section.style.display = 'block';
        link.innerHTML = 'Ocultar contenidos';
    } else {
        section.style.display = 'none';
        link.innerHTML = 'Mostrar contenidos';
    }
}
