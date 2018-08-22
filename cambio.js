var importe = parseInt(prompt("Introduce un importe exacto de euros"));
var monedas = [500,200,100,50,20,10,5,2,1];
var numMonedas = [0,0,0,0,0,0,0,0,0];

document.write("El importe es " + importe);
document.write("<br />");

for(var i = 0;i < monedas.length;i++)
{
	var cambio = 0;
	while(importe >= monedas[i])
	{
		cambio++;
		numMonedas[i] = cambio;
		importe = importe - monedas[i]; 
	}
}

for(var x = 0;x < numMonedas.length;x++)
{
	document.write("De " + monedas[x] + " hay " + numMonedas[x]);
	document.write("<br />");
}