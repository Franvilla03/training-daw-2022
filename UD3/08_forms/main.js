document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const activarSi = document.getElementById("activarSi");
    const activarNo = document.getElementById("activarNo");
    const check2 = document.getElementById("check2");
    const combo = document.getElementById("combo");
    const enviar = document.getElementById("enviar");
    const mensajeError = document.getElementById("mensajeError");
    const descripcion = document.getElementById("descripcion");
    const contador = document.getElementById("contador");

    function validarBotonEnviar() {
        enviar.disabled = !(activarSi.checked && check2.checked);
    }

    activarSi.addEventListener("change", function () {
        combo.disabled = !activarSi.checked;
        validarBotonEnviar();
    });

    activarNo.addEventListener("change", function () {
        if (activarNo.checked) {
            combo.disabled = true;
        }
        validarBotonEnviar();
    });

    check2.addEventListener("change", validarBotonEnviar);

    descripcion.addEventListener("input", function () {
        contador.textContent = `${descripcion.value.length}/80`;
    });

    document.getElementById("miFormulario").addEventListener("submit", function (event) {
        event.preventDefault();

        if (nombre.value.trim() === "" || apellidos.value.trim() === "") {
            mensajeError.textContent = "Nombre y apellidos son obligatorios.";
            return;
        }

        mensajeError.textContent = "";

        enviar.disabled = true;

        console.log("Formulario enviado correctamente.");
    });
});
