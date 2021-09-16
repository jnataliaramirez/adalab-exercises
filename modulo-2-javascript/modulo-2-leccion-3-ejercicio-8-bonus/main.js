'use strict';

const anioComprobar = 2021;

if( anioComprobar % 4 === 0 ) {
    console.log(`${anioComprobar} es un año bisiesto`);
}
else if( anioComprobar+1 % 4 === 0 ) {
    console.log(`El siguiente año bisiesto es ${anioComprobar+1}`);
}
else if( anioComprobar+2 % 4 === 0 ) {
    console.log(`El siguiente año bisiesto es ${anioComprobar+2}`);
}
else {
    console.log(`El siguiente año bisiesto es ${anioComprobar+3}`);
}




