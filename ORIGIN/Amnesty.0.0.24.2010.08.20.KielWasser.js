//Amnesty.0.0.24.2010.08.20.KielWasser.js
alert((
	'°Amnesty.0.0.24.2010.08.20.KielWasser.js°:'
	+'\n++\tchanged function Kielwasser();now dependa on var dieGegnerAnzahl set in Amnesty.0.0.23.2010.06.21.Code.js'
	+'\n++\t'
	+'\n++\t'
));

function Kielwasser(){
	KielWasserCounter+=1;
	
	for(var i=0;i<dieGegnerAnzahl;i++)
	{
		var id='KielWasser'+(i+1).toString();
		FootPrint(id,KielWasserCounter,dieGegner[i]);
	}
	/*
	FootPrint('KielWasser1',KielWasserCounter,G1);
	FootPrint('KielWasser2',KielWasserCounter,G2);
	FootPrint('KielWasser3',KielWasserCounter,G3);
	FootPrint('KielWasser4',KielWasserCounter,G4);
	FootPrint('KielWasser5',KielWasserCounter,G5);
	FootPrint('KielWasser6',KielWasserCounter,G6);
	FootPrint('KielWasser7',KielWasserCounter,G7);
	FootPrint('KielWasser8',KielWasserCounter,G8);
	FootPrint('KielWasser9',KielWasserCounter,G9);
	FootPrint('KielWasser10',KielWasserCounter,G10);
	FootPrint('KielWasser11',KielWasserCounter,G11);
	FootPrint('KielWasser12',KielWasserCounter,G12);
	FootPrint('KielWasser13',KielWasserCounter,G13);
	FootPrint('KielWasser14',KielWasserCounter,G14);
	FootPrint('KielWasser15',KielWasserCounter,G15);
	FootPrint('KielWasser16',KielWasserCounter,G16);
	FootPrint('KielWasser17',KielWasserCounter,G17);
	FootPrint('KielWasser18',KielWasserCounter,G18);
	FootPrint('KielWasser19',KielWasserCounter,G19);
	FootPrint('KielWasser20',KielWasserCounter,G20);
	FootPrint('KielWasser21',KielWasserCounter,G21);
	FootPrint('KielWasser22',KielWasserCounter,G22);
	FootPrint('KielWasser23',KielWasserCounter,G23);
	FootPrint('KielWasser24',KielWasserCounter,G24);
	FootPrint('KielWasser25',KielWasserCounter,G25);
	FootPrint('KielWasser26',KielWasserCounter,G26);
	FootPrint('KielWasser27',KielWasserCounter,G27);
	FootPrint('KielWasser28',KielWasserCounter,G28);
	FootPrint('KielWasser29',KielWasserCounter,G29);
	FootPrint('KielWasser30',KielWasserCounter,G30);
	*/
	FootPrint('KielWasserPlayer',KielWasserCounter,player);
	if(KielWasserCounter==19){
		KielWasserCounter=0;
	}
}
function FootPrint(that,much,from){
	var id=that.toString()+much.toString();
	$(id).style.left=(from.xActual*FeldGroesse)+66+'px';
	$(id).style.top=(from.yActual*FeldGroesse)+56+'px';
}
