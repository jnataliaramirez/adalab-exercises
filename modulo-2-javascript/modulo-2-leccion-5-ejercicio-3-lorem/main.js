'use strict';

const lorem = document.querySelector('.lorem')

function raton() {
    lorem.innerHTML += '<p>Nuevo texto dolor sit amet consectetur adipisicing elit. Excepturi obcaecati ipsa laborum blanditiis cum tempora eaque debitis cumque consequatur id quod dolores ut, illum modi, architecto rerum iure voluptas quas</p>'
}

lorem.addEventListener('mouseout', raton)