var Ischtuk={
Kaffee:0,
Tabak:0,
Zuckerrohr:0,
Rum:0,
Baumwolle:0,
Perlen:0,
Segeltuch:0,
Hanf:0,
Teer:0,
Holz:0,
Pulver:0,
Kugeln:0,
Kanonen:0,
Leute:200,
Geld:1734,
Nahrung:1545,
ReparierKurs:5,
KaufKurs:5
}
function IschtukExit(){
$('Ischtuk').style.visibility='hidden';
	player.xActual=7;
	player.yActual=16;
	player.rot=0;
	player.dir=0;
}
function IschtukTaverne(){
$('IschtukTaverne').style.visibility='visible';
if(IschtukAnheuernCounter<1){
$('IschtukTaverneLeute').style.visibility='visible';
}
}
function IschtukAnheuern(){
IschtukAnheuernCounter+=1;
player.Leute+=parseInt(Math.random()*10)
alert('Jetzt sind'+player.Leute+'in deiner Crew');
if(IschtukAnheuernCounter>0){
$('IschtukTaverneLeute').style.visibility='hidden';
}
}
function IschtukTaverneBarceeper(){
alert('Barceeper');
}
function IschtukTaverneSchatzkarte(){
alert('Schatzkarte');
}
function IschtukTavernePersonal(){
alert('Personal');
}
function IschtukTaverneHund(){
alert('Hund');
}
function IschtukTaverneBilderRahmenSchiff(){
alert('BilderRahmenSchiff');
}
function IschtukTaverneBilderRahmenSchiff2(){
alert('BilderRahmenSchiff2');
}
function IschtukTaverneFenster(){
alert('BildDraussen');
}
function IschtukTaverneFenster2(){
alert('FensterRahmen');
}
function IschtukTaverneExit(){
$('IschtukTaverne').style.visibility='hidden';
$('IschtukTaverneLeute').style.visibility='hidden';
}
function IschtukKontor(){
$('IschtukKontor').style.visibility='visible';
}
function IschtukKontorExit(){
$('IschtukKontor').style.visibility='hidden';
}
function IschtukHafen(){
	$('IschtukHafen').style.visibility='visible';
}
function MiniGame(){
	$('IschtukHafen').style.visibility='hidden';
	$('Ischtuk').style.visibility='hidden';
	$('Minigame').style.visibility='visible';
	ZeitCounter=0;
	SchiffWenderCounter=0;
	KisterImSchiffCounter=0;
	HimmelCounter=0;
	KistenCounter=0;
	KirchenCounter=0;
	BodenCounter=0;
	BildNummer1=1;
	BildNummer2=12;
	BildNummer3=23;
	BildNummer4=34;
	BildNummer5=45;
	BildNummer6=56;
	BildNummer7=67;
	$('Kiste1').style.visibility='visible';
	$('Kiste2').style.visibility='visible';
	$('Kiste3').style.visibility='visible';
	$('Kiste4').style.visibility='visible';
	$('Kiste5').style.visibility='visible';
	$('Kiste6').style.visibility='visible';
	init();
}
function IschtukHafenExit(){
$('IschtukHafen').style.visibility='hidden';
$('IschtukTakelageFenster').style.visibility='hidden';
$('IschtukRumpfFenster').style.visibility='hidden';
$('IschtukServiceFenster').style.visibility='hidden';
$('HafenUpgradeFenster').style.visibility='hidden';
$('IschtukHafenUpgradeExitKnopf').style.visibility='hidden';
}
function IschtukHafenUpgradeExit(){
$('HafenUpgradeFenster').style.visibility='hidden';
$('IschtukHafenUpgradeExitKnopf').style.visibility='hidden';
}
function HafenUpgrade(){
$('HafenUpgradeFenster').style.visibility='visible';
$('IschtukHafenUpgradeExitKnopf').style.visibility='visible';
}
function Takelage(){
$('IschtukTakelageFenster').style.visibility='visible';
}
function Rumpf(){
$('IschtukRumpfFenster').style.visibility='visible';
}
function Service(){
$('IschtukServiceFenster').style.visibility='visible';
}function TakelageZu(){
$('IschtukTakelageFenster').style.visibility='hidden';
}
function RumpfZu(){
$('IschtukRumpfFenster').style.visibility='hidden';
}
function ServiceZu(){
$('IschtukServiceFenster').style.visibility='hidden';
}
function TakelageUpgrade(){
	if(player.Geld-1000>=0){
		player.Geld-=1000;
		MaximalGeschwindigkeit+=0.1;
	}
}
function RumpfUpgrade(){
	if(player.Geld-1000>=0){
		player.Geld-=1000;
		MaximalLadung+=1000;
	}
}
function SeviceUpgrade(){
	if(player.Geld-1000>=0){
		player.Geld-=1000;
		ServiceWert+=1;
	}
}
function IschtukHafenExpeditionsSchiff(){
alert('Expedition Starten');
}
function IschtukHafenAngeln(){
alert('Angeln');
}
function IschtukHafenReparieren(){
	if((player.Geld-Ischtuk.ReparierKurs)>=0){
Ischtuk.Geld+=Ischtuk.ReparierKurs;
player.Geld-=Ischtuk.ReparierKurs;
SchiffZustand+=5;
}
}
function IschtukGovernour(){
$('IschtukGovernour').style.visibility='visible';
}
function IschtukGovernourExit(){
$('IschtukGovernour').style.visibility='hidden';
}
function IschtukGovernourInfo(){
}
function IschtukGovernourHome(){
}

kaufen=function(that,what,ware,menge,wertenderung){

var IschtukGesamtGewicht=((player.Kaffee*IschtukGewicht.Kaffee)+(player.Tabak*IschtukGewicht.Tabak)+(player.Zuckerrohr*IschtukGewicht.Zuckerrohr)+(player.Rum*IschtukGewicht.Rum)+(player.Baumwolle*IschtukGewicht.Baumwolle)+(player.Perlen*IschtukGewicht.Perlen)+(player.Segeltuch*IschtukGewicht.Segeltuch)+(player.Hanf*IschtukGewicht.Hanf)+(player.Teer*IschtukGewicht.Teer)+(player.Holz*IschtukGewicht.Holz)+(player.Pulver*IschtukGewicht.Pulver)+(player.Kugeln*IschtukGewicht.Kugeln)+(player.Kanonen*IschtukGewicht.Kanonen)+(player.Nahrung*IschtukGewicht.Nahrung));

	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
					if(ware=='Kaffee'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Kaffee*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kaffee*menge>=0){
						warenliste[i].Kaffee+=menge;
						warenliste[i].Geld-=preisliste[j].Kaffee*menge;
						warenliste[i-1].Geld+=preisliste[j].Kaffee*menge;
						preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Tabak'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Tabak*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Tabak*menge>=0){
							warenliste[i].Tabak+=menge;
							warenliste[i].Geld-=preisliste[j].Tabak*menge;
							warenliste[i-1].Geld+=preisliste[j].Tabak*menge;
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Zuckerrohr*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Zuckerrohr*menge>=0){
							warenliste[i].Zuckerrohr+=menge;
							warenliste[i].Geld-=preisliste[j].Zuckerrohr*menge;
							warenliste[i-1].Geld+=preisliste[j].Zuckerrohr*menge;
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Rum'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Rum*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Rum*menge>=0){
							warenliste[i].Rum+=menge;
							warenliste[i].Geld-=preisliste[j].Rum*menge;
							warenliste[i-1].Geld+=preisliste[j].Rum*menge;
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Baumwolle*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Baumwolle*menge>=0){
							warenliste[i].Baumwolle+=menge;
							warenliste[i].Geld-=preisliste[j].Baumwolle*menge;
							warenliste[i-1].Geld+=preisliste[j].Baumwolle*menge;
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Perlen'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Perlen*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Perlen*menge>=0){
							warenliste[i].Perlen+=menge;
							warenliste[i].Geld-=preisliste[j].Perlen*menge;
							warenliste[i-1].Geld+=preisliste[j].Perlen*menge;
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Segeltuch*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Segeltuch*menge>=0){
							warenliste[i].Segeltuch+=menge;
							warenliste[i].Geld-=preisliste[j].Segeltuch*menge;
							warenliste[i-1].Geld+=preisliste[j].Segeltuch*menge;
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Hanf'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Hanf*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Hanf*menge>=0){
							warenliste[i].Hanf+=menge;
							warenliste[i].Geld-=preisliste[j].Hanf*menge;
							warenliste[i-1].Geld+=preisliste[j].Hanf*menge;
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Teer'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Teer*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Teer*menge>=0){
							warenliste[i].Teer+=menge;
							warenliste[i].Geld-=preisliste[j].Teer*menge;
							warenliste[i-1].Geld+=preisliste[j].Teer*menge;
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Holz'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Holz*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Holz*menge>=0){
							warenliste[i].Holz+=menge;
							warenliste[i].Geld-=preisliste[j].Holz*menge;
							warenliste[i-1].Geld+=preisliste[j].Holz*menge;
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Pulver'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Pulver*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Pulver*menge>=0){
							warenliste[i].Pulver+=menge;
							warenliste[i].Geld-=preisliste[j].Pulver*menge;
							warenliste[i-1].Geld+=preisliste[j].Pulver*menge;
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kugeln'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Kugeln*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Kugeln*menge>=0){
							warenliste[i].Kugeln+=menge;
							warenliste[i].Geld-=preisliste[j].Kugeln*menge;
							warenliste[i-1].Geld+=preisliste[j].Kugeln*menge;
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kanonen'){
						if(IschtukGesamtGewicht+(IschtukGewicht.Kanonen*menge)<=MaximalLadung){
							if(warenliste[i].Geld-preisliste[j].Kanonen*menge>=0){
								warenliste[i].Kanonen+=menge;
								warenliste[i].Geld-=preisliste[j].Kanonen*menge;
								warenliste[i-1].Geld+=preisliste[j].Kanonen*menge;
								preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(2);
							}
						}
					}
					if(ware=='Nahrung'){
					if(IschtukGesamtGewicht+(IschtukGewicht.Nahrung*menge)<=MaximalLadung){
						if(warenliste[i].Geld-preisliste[j].Nahrung*menge>=0){
							warenliste[i].Nahrung+=menge;
							warenliste[i].Geld-=preisliste[j].Nahrung*menge;
							warenliste[i-1].Geld+=preisliste[j].Nahrung*menge;
							preisliste[j].Nahrung=(preisliste[j].Nahrung*wertenderung).toFixed(2);
						}
						}
					}
				}
			}
		}
	}
	WerteCheckerIschtuk();
}

verkaufen=function(that,what,ware,menge,wertenderung){
	for(var i=0;i<warenliste.length;i++){
		if(warenliste[i].id==that){
			for(var j=0;j<preisliste.length;j++){
				if(preisliste[j].id==what){
				
					if(ware=='Kaffee'){
						if(Ischtuk.Geld-preisliste[j].Kaffee*menge>=0){
							if(warenliste[i].Kaffee-menge>=0){
								warenliste[i].Kaffee-=menge;
								warenliste[i].Geld+=eval(preisliste[j].Kaffee*menge);
								warenliste[i-1].Geld-=eval(preisliste[j].Kaffee*menge);
								preisliste[j].Kaffee=(preisliste[j].Kaffee*wertenderung).toFixed(2);
								
							}
						}
					}
					if(ware=='Tabak'){
					if(Ischtuk.Geld-preisliste[j].Tabak*menge>=0){
						if(warenliste[i].Tabak-menge>=0){
							warenliste[i].Tabak-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Tabak*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Tabak*menge);
							preisliste[j].Tabak=(preisliste[j].Tabak*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Zuckerrohr'){
					if(Ischtuk.Geld-preisliste[j].Zuckerrohr*menge>=0){
						if(warenliste[i].Zuckerrohr-menge>=0){
							warenliste[i].Zuckerrohr-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Zuckerrohr*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Zuckerrohr*menge);
							preisliste[j].Zuckerrohr=(preisliste[j].Zuckerrohr*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Rum'){
					if(Ischtuk.Geld-preisliste[j].Rum*menge>=0){
						if(warenliste[i].Rum-menge>=0){
							warenliste[i].Rum-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Rum*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Rum*menge);
							preisliste[j].Rum=(preisliste[j].Rum*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Baumwolle'){
					if(Ischtuk.Geld-preisliste[j].Baumwolle*menge>=0){
						if(warenliste[i].Baumwolle-menge>=0){
							warenliste[i].Baumwolle-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Baumwolle*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Baumwolle*menge);
							preisliste[j].Baumwolle=(preisliste[j].Baumwolle*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Perlen'){
					if(Ischtuk.Geld-preisliste[j].Perlen*menge>=0){
						if(warenliste[i].Perlen-menge>=0){
							warenliste[i].Perlen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Perlen*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Perlen*menge);
							preisliste[j].Perlen=(preisliste[j].Perlen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Segeltuch'){
					if(Ischtuk.Geld-preisliste[j].Segeltuch*menge>=0){
						if(warenliste[i].Segeltuch-menge>=0){
							warenliste[i].Segeltuch-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Segeltuch*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Segeltuch*menge);
							preisliste[j].Segeltuch=(preisliste[j].Segeltuch*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Hanf'){
					if(Ischtuk.Geld-preisliste[j].Hanf*menge>=0){
						if(warenliste[i].Hanf-menge>=0){
							warenliste[i].Hanf-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Hanf*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Hanf*menge);
							preisliste[j].Hanf=(preisliste[j].Hanf*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Teer'){
					if(Ischtuk.Geld-preisliste[j].Teer*menge>=0){
						if(warenliste[i].Teer-menge>=0){
							warenliste[i].Teer-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Teer*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Teer*menge);
							preisliste[j].Teer=(preisliste[j].Teer*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Holz'){
					if(Ischtuk.Geld-preisliste[j].Holz*menge>=0){
						if(warenliste[i].Holz-menge>=0){
							warenliste[i].Holz-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Holz*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Holz*menge);
							preisliste[j].Holz=(preisliste[j].Holz*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Pulver'){
					if(Ischtuk.Geld-preisliste[j].Pulver*menge>=0){
						if(warenliste[i].Pulver-menge>=0){
							warenliste[i].Pulver-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Pulver*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Pulver*menge);
							preisliste[j].Pulver=(preisliste[j].Pulver*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kugeln'){
					if(Ischtuk.Geld-preisliste[j].Kugeln*menge>=0){
						if(warenliste[i].Kugeln-menge>=0){
							warenliste[i].Kugeln-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kugeln*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Kugeln*menge);
							preisliste[j].Kugeln=(preisliste[j].Kugeln*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Kanonen'){
					if(Ischtuk.Geld-preisliste[j].Kanonen*menge>=0){
						if(warenliste[i].Kanonen-menge>=0){
							warenliste[i].Kanonen-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Kanonen*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Kanonen*menge);
							preisliste[j].Kanonen=(preisliste[j].Kanonen*wertenderung).toFixed(2);
						}
						}
					}
					if(ware=='Nahrung'){
					if(Ischtuk.Geld-preisliste[j].Nahrung*menge>=0){
						if(warenliste[i].Nahrung-menge>=0){
							warenliste[i].Nahrung-=menge;
							warenliste[i].Geld+=eval(preisliste[j].Nahrung*menge);
							warenliste[i-1].Geld-=eval(preisliste[j].Nahrung*menge);
							preisliste[j].Nahrung=(preisliste[j].Nahrung*wertenderung).toFixed(2);
						}
						}
					}
				}
			}
		}
	}
	WerteCheckerIschtuk();
}
function WerteCheckerIschtuk(){

}
function Oberinit(){
	WerteCheckerIschtuk()
	warenliste=new Array(Ischtuk,player);
	preisliste=new Array(IschtukPreise);
}