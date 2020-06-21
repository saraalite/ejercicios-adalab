'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '';
//userAvatar = 'http://www.fillmurray.com/300/300';

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
document.querySelector('.user__avatar').src = userAvatar || DEFAULT_AVATAR;