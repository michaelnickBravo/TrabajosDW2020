$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora seras enviado a la pagina de la USAT");
    });
});

//Ocultar / Mostrar bloque
$("#c1b").click(function(){
    $("#cont1").toggle(1500);
});