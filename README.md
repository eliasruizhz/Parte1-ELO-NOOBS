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
### Combinaciones posibles sin repeticion en pares:

 * [1, 2, 3, 4]
 * [1, 2]
 * [1, 3]
 * [1, 4]
 * [2, 3]
 * [2, 4]
 * [3, 4]

#### Se observa que el objeto [0] del arreglo se convina con los 3 porteriores, restando 1 obtenermos que el objeto [1] con los 2 posteriores y asi continuamente, destacando que esta formula depende de el tamaño del arreglo.

```js

var com = function(uno,dos) {
	if (full < t) {
		console.log(uno+" VS "+dos);
		full++;
	}else if (full == t) {
		console.log("FIN");
	};
	
};

var tamaño = chicas.length-1;//3
var i = 0;
while(i < tamaño){
	com(chicas[tamaño],chicas[i]);
	i++;
	if(i == tamaño){
		i = 0;
		--tamaño;
		if (tamaño == 1) {
		com(chicas[tamaño],chicas[i]);
		console.log("Son: "+t+" combinaciones");
		};
	};
};

```
