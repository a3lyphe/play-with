//Move-Div() bersetzt die Werte aus dem javagott-script in die Divs und Inputs im HTM-Bereich
function moveDiv(){
playerSpeedBerechnung();
$("thePlayer").style.left=(player.x*FeldGroesse)+'px';
$("thePlayer").style.top=(player.y*FeldGroesse)+'px';
$("Pirat1").style.left=(Pirat1.x*FeldGroesse)+'px';
$("Pirat1").style.top=(Pirat1.y*FeldGroesse)+'px';
$("bewegungsCounter").value=bewegungsCounter;
if(player.speed==1){
bewegungsCounter+=1;
}
}