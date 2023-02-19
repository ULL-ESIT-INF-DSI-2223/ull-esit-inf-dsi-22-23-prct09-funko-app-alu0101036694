/* Ejercicio 5 - Un solo golpe

Chuck Norris es el tío más duro del mundo, una vez golpeó a un caballo en la barbilla y sus descendientes se conocen hoy en día como jirafas.

Como sus puñetazos, Chuck NUNCA necesita más de una línea de código. La tarea que debes realizar, para complacer a Chuck Norris, es crear una 
única función que haga uso de cuatro métodos encadenados en una única línea de código. Puedes utilizar varias líneas, pero no querrás cabrear a 
Chuck Norris.

Chuck espera como resultado una cadena de caracteres con sus cosas favoritas separadas, ordenadas, unidas de nuevo y, además, que se eliminen 
todas las apariciones de las letras e y a. Si alguien se atreve a retar a Chuck Norris con una cadena vacía la función devuelve “Broken!”.

Se espera un comportamiento como el siguiente:

onePunch('Beard Jeans Hairbrush Knuckleduster Sand') deberá retornar 'Brd Hirbrush Jns Knuckldustr Snd'.
onePunch('Sock Beard Vest Lady Sage') deberá retornar 'Brd Ldy Sg Sock Vst'.
onePunch('Beard Sack Gun Parachute Face-Kicking-Shoes') deberá retornar 'Brd Fc-Kicking-Shos Gun Prchut Sck'.
onePunch('Snot Snow Soda Tank Beard') deberá retornar 'Brd Snot Snow Sod Tnk'.
onePunch('') deberá retornar 'Broken!'. */


// Código en mas de una línea
/* let salida = '';

function onePunch(entrada: string) {
  if(entrada === ' '){ 
   salida = 'Broken!';
  }
  else{
   for(let i = 0; i < entrada.length; i++){
    salida = entrada.replace('e', '');
   }
   for(let j = 0; j < salida.length; j++){
    salida = salida.replace('a', '');
   }
  }
  return salida;
} */


// Código en una sola línea
function onePunch(cadena: string): string {
    return cadena.split(' ').sort().join(' ').replace(/[ae\s]/g, '') || 'Broken!';
  }

console.log("onePunch(Beard Jeans Hairbrush Knuckleduster Sand) = " + onePunch("Beard Jeans Hairbrush Knuckleduster Sand"));
console.log("onePunch('Sock Beard Vest Lady Sage') = " + onePunch("Sock Beard Vest Lady Sage"));
console.log("onePunch('Beard Sack Gun Parachute Face-Kicking-Shoes') = " + onePunch("Beard Sack Gun Parachute Face-Kicking-Shoes"));
console.log("onePunch('Snot Snow Soda Tank Beard') = " + onePunch("Snot Snow Soda Tank Beard"));
console.log("onePunch(' ') = " + onePunch(" "));