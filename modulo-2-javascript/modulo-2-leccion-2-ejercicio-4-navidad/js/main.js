'use strict';

const totalCuenta = 128
const totalPersonas = 9 
const pagoAdicional = 2

const pagoCuenta = totalCuenta - pagoAdicional
console.log("total cuenta " + pagoCuenta)

const pagoIndividual = pagoCuenta / totalPersonas
console.log("pago por persona " + pagoIndividual)

const pagoAna = pagoIndividual + pagoAdicional
console.log("pago Ana " + pagoAna)