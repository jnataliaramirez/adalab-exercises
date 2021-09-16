'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '300x300.jpg';
// sin avatar
userAvatar = ''

let userAvatarHtml = document.querySelector('.user__avatar')

// Agregar atributos
userAvatarHtml.src=`${userAvatar || DEFAULT_AVATAR}` 



