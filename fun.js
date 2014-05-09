var chicas = new Array(db.length);
for (var i = 0; i < db.length; i++) {
	chicas[i] = db[i].nombre;
};
//var chicas = ["seis","cinco","cuatro","tres","dos","uno"];
//Debo de el entero sacar el residuo [1,2,3], [3,2]:1 realizar las combinaciones con dichos elementos
//Luego debo de combinar 2:[3] y obtendriamos todos los arreglos
//tamaño - 1, de 0 hasta el nuevo tamaño, combinar;
var t = 0;
var full = 0;
for (var i = chicas.length-1; i > 0; i--) {
		t = t + i;
	};

var com = function(uno,dos) {
	if (full < t) {
		console.log(uno+" VS "+dos);
		full++;
	}else if (full == t) {
		console.log("FIN");
	};
	
}

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
