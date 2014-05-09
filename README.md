Sistema de puntaje
================

Parte 1 - Sistema de puntuación Elo  Árpád Élő (1903-1992) 

```js
//Ejemplo : var ra = 300, rb = 400;

var res = Math.pow((1/1)+10,(ra-rb)/400);
var ros = Math.pow((1/1)+10,(rb-ra)/400);

var Ea = res;
var Eb = ros;

var C = 30;
var ga = 1.0,gb = 0.0;
//S = 1,0 para ganar, 0,5 para empate y 0,0 para la derrota.
var Rna = ra + C * ( ga - Ea);
var Rnb = rb + C * ( gb - Eb );

if (Rna > Rnb) {
console.log("Gano: Rna"+Rna+" Perdio: Rnb"+Rnb);
}else if(Rna > Rnb){
console.log("Gano: Rnb"+Rnb+" Perdio: Rna"+Rnb);
}else if(Rna == Rnb){
console.log("Empate: Rna"+Rna+" Empate: Rnb"+Rnb);
}
```
