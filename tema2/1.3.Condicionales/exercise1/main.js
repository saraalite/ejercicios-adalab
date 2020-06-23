"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "";
//userAvatar = 'http://www.fillmurray.com/300/300';

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
document.querySelector(".user__avatar").src = userAvatar || DEFAULT_AVATAR;

/* Obtenemos el elemento con el que queremos trabajar, seleccionamos su clase y después decimos que su ubicación es src = userAvatar, que es el que elige el usuario al registrarse. Si no podemos acceder a este se pone el DEFAULT */
