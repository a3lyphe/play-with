//classes

	Stadt=function(){
		this.id;
		this.Leute;
		this.Geld;
		this.Nahrung;
		this.ReparierKurs;
		this.KaufKurs;
		this.Kaffee;
		this.Tabak;
		this.Zuckerrohr;
		this.Rum;
		this.Baumwolle;
		this.Perlen;
		this.Segeltuch;
		this.Hanf;
		this.Teer;
		this.Holz;
		this.Pulver;
		this.Kugeln;
		this.Kanonen;
	}
	Ware=function(){
		this.id;
		this.gewicht;
		this.menge
		
	}
var IschtukAnheuernCounter=0;
var MaximalLadung=10000;
var MaximalGeschwindigkeit=0.4;
var ServiceWert=0;
var SchiffZustand=0;

	Ischtuk=new Stadt();
	Ischtuk.id='Ischtuk';
	Ischtuk.Leute=200;
	Ischtuk.Geld=1734;
	Ischtuk.Nahrung=1545;
	Ischtuk.ReparierKurs=5;
	Ischtuk.KaufKurs=5;
	Ischtuk.Kaffee=5;
	Ischtuk.Tabak=4;
	Ischtuk.Zuckerrohr=4;
	Ischtuk.Rum=32;
	Ischtuk.Baumwolle=2;
	Ischtuk.Perlen=356;
	Ischtuk.Segeltuch=9;
	Ischtuk.Hanf=4;
	Ischtuk.Teer=20;
	Ischtuk.Holz=23;
	Ischtuk.Pulver=50;
	Ischtuk.Kugeln=60;
	Ischtuk.Kanonen=414;


IschtukPreise=new Ware();
	IschtukPreise.id='IschtukPreise';
	IschtukPreise.Name='Preise';
	IschtukPreise.Nahrung=15;
	IschtukPreise.Kaffee=15;
	IschtukPreise.Tabak=14;
	IschtukPreise.Zuckerrohr=14;
	IschtukPreise.Rum=32;
	IschtukPreise.Baumwolle=12;
	IschtukPreise.Perlen=356;
	IschtukPreise.Segeltuch=9;
	IschtukPreise.Hanf=4;
	IschtukPreise.Teer=20;
	IschtukPreise.Holz=23;
	IschtukPreise.Pulver=50;
	IschtukPreise.Kugeln=60;
	IschtukPreise.Kanonen=414;
	

IschtukGewicht=new Ware();
	IschtukGewicht.id='IschtukGewicht';
	IschtukGewicht.Name='Gewicht';
	IschtukGewicht.Nahrung=5;
	IschtukGewicht.Kaffee=5;
	IschtukGewicht.Tabak=5;
	IschtukGewicht.Zuckerrohr=5;
	IschtukGewicht.Rum=5;
	IschtukGewicht.Baumwolle=5;
	IschtukGewicht.Perlen=1;
	IschtukGewicht.Segeltuch=10;
	IschtukGewicht.Hanf=4;
	IschtukGewicht.Teer=10;
	IschtukGewicht.Holz=10;
	IschtukGewicht.Pulver=50;
	IschtukGewicht.Kugeln=50;
	IschtukGewicht.Kanonen=200;

function WerteCheckerIschtuk(){
var IschtukGesamtGewicht=((player.Kaffee*IschtukGewicht.Kaffee)+(player.Tabak*IschtukGewicht.Tabak)+(player.Zuckerrohr*IschtukGewicht.Zuckerrohr)+(player.Rum*IschtukGewicht.Rum)+(player.Baumwolle*IschtukGewicht.Baumwolle)+(player.Perlen*IschtukGewicht.Perlen)+(player.Segeltuch*IschtukGewicht.Segeltuch)+(player.Hanf*IschtukGewicht.Hanf)+(player.Teer*IschtukGewicht.Teer)+(player.Holz*IschtukGewicht.Holz)+(player.Pulver*IschtukGewicht.Pulver)+(player.Kugeln*IschtukGewicht.Kugeln)+(player.Kanonen*IschtukGewicht.Kanonen)+(player.Nahrung*IschtukGewicht.Nahrung));

$('IschtukLeute').value=Ischtuk.Leute;
$('IschtukGeld').value=Ischtuk.Geld;
$('IschtukNahrung').value=Ischtuk.Nahrung;

$('playerKaffeeMenge').value=player.Kaffee;
$('playerTabakMenge').value=player.Tabak;
$('playerZuckerrohrMenge').value=player.Zuckerrohr;
$('playerRumMenge').value=player.Rum;
$('playerBaumwolleMenge').value=player.Baumwolle;
$('playerPerlenMenge').value=player.Perlen;
$('playerSegeltuchMenge').value=player.Segeltuch;
$('playerHanfMenge').value=player.Hanf;
$('playerTeerMenge').value=player.Teer;
$('playerHolzMenge').value=player.Holz;
$('playerPulverMenge').value=player.Pulver;
$('playerKugelnMenge').value=player.Kugeln;
$('playerKanonenMenge').value=player.Kanonen;
$('playerNahrungMenge').value=player.Nahrung;
$('playerGeldMenge').value=player.Geld.toFixed(2);

$('LogLeute').value=player.Leute;
$('LogKaffee').value=player.Kaffee;
$('LogTabak').value=player.Tabak;
$('LogZuckerrohr').value=player.Zuckerrohr;
$('LogRum').value=player.Rum;
$('LogBaumwolle').value=player.Baumwolle;
$('LogPerlen').value=player.Perlen;
$('LogSegeltuch').value=player.Segeltuch;
$('LogHanf').value=player.Hanf;
$('LogTeer').value=player.Teer;
$('LogHolz').value=player.Holz;
$('LogPulver').value=player.Pulver;
$('LogKugeln').value=player.Kugeln;
$('LogKanonen').value=player.Kanonen;
$('LogNahrung').value=player.Nahrung;
$('LogGeld').value=player.Geld.toFixed(2);


$('Takelage').value=MaximalGeschwindigkeit;
$('Rumpf').value=MaximalLadung;
$('Service').value=ServiceWert;
$('SchiffZustand').value=SchiffZustand;



$('IschtukKaffeePreis').value=IschtukPreise.Kaffee;
$('IschtukTabakPreis').value=IschtukPreise.Tabak;
$('IschtukZuckerrohrPreis').value=IschtukPreise.Zuckerrohr;
$('IschtukRumPreis').value=IschtukPreise.Rum;
$('IschtukBaumwollePreis').value=IschtukPreise.Baumwolle;
$('IschtukPerlenPreis').value=IschtukPreise.Perlen;
$('IschtukSegeltuchPreis').value=IschtukPreise.Segeltuch;
$('IschtukHanfPreis').value=IschtukPreise.Hanf;
$('IschtukTeerPreis').value=IschtukPreise.Teer;
$('IschtukHolzPreis').value=IschtukPreise.Holz;
$('IschtukPulverPreis').value=IschtukPreise.Pulver;
$('IschtukKugelnPreis').value=IschtukPreise.Kugeln;
$('IschtukKanonenPreis').value=IschtukPreise.Kanonen;
$('IschtukNahrungPreis').value=IschtukPreise.Nahrung;
$('playerGesamtGewicht').value=IschtukGesamtGewicht;

//window.setTimeout(WerteCheckerIschtuk,200);
}
function Oberinit(){
	WerteCheckerIschtuk()
	warenliste=new Array(Ischtuk,player);
	preisliste=new Array(IschtukPreise);
}