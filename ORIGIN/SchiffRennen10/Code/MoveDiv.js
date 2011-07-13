//Move-Div() bersetzt die Werte aus dem javagott-script in die Divs und Inputs im HTM-Bereich
function moveDiv(){
$("thePlayer").style.left=(player.xActual*FeldGroesse)+'px';
$("thePlayer").style.top=(player.yActual*FeldGroesse)+'px';
$("theGegner").style.left=(G1.xActual*FeldGroesse)+'px';
$("theGegner").style.top=(G1.yActual*FeldGroesse)+'px';
$("theGegner2").style.left=(G2.xActual*FeldGroesse)+'px';
$("theGegner2").style.top=(G2.yActual*FeldGroesse)+'px';

$("Schiffchen").style.width=(player.width)+'px';
$("Schiffchen").style.height=(player.height)+'px';
$("Pirat1").style.left=(Pirat1.xActual*FeldGroesse)+'px';
$("Pirat1").style.top=(Pirat1.yActual*FeldGroesse)+'px';
$("bewegungsCounter").value=bewegungsCounter;
if(player.speed==1){
bewegungsCounter+=1;
}
}