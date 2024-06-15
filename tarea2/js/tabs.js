function opciones (evt, info){


//* Declaracion de variables
//i controla el for
// tabcontent controla el contenido de los TABS
// tablinks controla los enlaces de los TABS

var i, tabcontent, tablinks;

//obtener todos los elementos con la clase "tabcontent" y ocultarlos
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

//apunta a todos los elementos con la clase "tablinks" y elimina la clase "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

//apunta a todos los elementos con la clase "tablinks" y elimina la clase "active"
//muestra la pestaña actual y agrega una clase "active" al botón que abrió la pestaña
document.getElementById(info).style.display = "block";
evt.currentTarget.className += " active";
}