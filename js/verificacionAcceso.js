// Verificacion de acceso
const edad = 18;
const tieneEntrada = true;
const esVip = false;
 //regals
const puedeEntrar = edad > 18 && tieneEntrada;
const accesoVip = puedeEntrar && esVip;
const esMenor = edad < 18; 
const accesoNegado = !puedeEntrar || esMenor;
console.log(`¿Puede entrar?: ${puedeEntrar}`);
console.log(`¿Acceso VIP?: ${accesoVip}`);
console.log(`¿Acceso denegado?: ${accesoNegado}`);

