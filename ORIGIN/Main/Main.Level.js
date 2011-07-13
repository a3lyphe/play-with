MapScaler=function(){
	$('Karte').style.width=map[0].length*FeldGroesse;
	$('Karte').style.height=map.length*FeldGroesse;
	$('Karte').style.backgroundImage='url(Icon/Meer.png)';
}