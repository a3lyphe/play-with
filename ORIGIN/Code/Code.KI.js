KI=function(){
	for(var i=0;i<dieGegnerAnzahl;i++){
		var vari=''+'window.setInterval(\''+'G'+(i+1)+'.'+'KI()\',4000)';
		eval(vari);
		var vari2=''+'window.setInterval(\''+'G'+(i+1)+'.'+'KIdir()\',200)';
		eval(vari2);
	}
}