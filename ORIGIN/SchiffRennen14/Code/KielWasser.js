function Kielwasser(){
KielWasserCounter+=1;
FootPrint('KielWasser',KielWasserCounter,player);
if(KielWasserCounter==19){
KielWasserCounter=0;
}
}
function FootPrint(that,much,from){
var id=that.toString()+much.toString();
$(id).style.left=(from.x*FeldGroesse)+65+'px';//75 entspricht x.offset für gewuenschtes zentrum(vorderer Mast des Schiffes)
$(id).style.top=(from.y*FeldGroesse)+60+'px';//70 entspricht y.offset für gewuenschtes zentrum(vorderer Mast des Schiffes)
}