window.onload = function() {
    const enlaces = document.querySelectorAll("a");
    console.log("Número de enlaces de la página:", enlaces.length);

    console.log("Dirección del penúltimo enlace:", enlaces[enlaces.length - 2].href);

    const enlacesPrueba = Array.from(enlaces).filter(enlace => enlace.href === "http://prueba/");
    console.log("Número de enlaces que apuntan a http://prueba:", enlacesPrueba.length);

    const enlacesTercerParrafo = document.querySelectorAll("p:nth-of-type(3) a");
    console.log("Número de enlaces en el tercer párrafo:", enlacesTercerParrafo.length);

    const nuevoDiv = document.createElement("div");
    nuevoDiv.innerHTML = "<p>Este es un párrafo dentro de un nuevo div.</p>";
    document.body.appendChild(nuevoDiv);
};
