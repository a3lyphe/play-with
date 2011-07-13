function refresher(){
$("Leute1").value=player.Leute;
$("Geld1").value=player.Geld;
$("Nahrung1").value=player.Nahrung;
$("HavannaLeute").value=Havanna.Leute;
$("HavannaGeld").value=Havanna.Geld;
$("HavannaNahrung").value=Havanna.Nahrung;
$("IschtukLeute").value=Ischtuk.Leute;
$("IschtukGeld").value=Ischtuk.Geld;
$("IschtukNahrung").value=Ischtuk.Nahrung;

player.Nahrung-=parseInt(player.Leute/10);
if(player.Nahrung<0){
player.Nahrung=0;
}
if(player.Nahrung==0){
player.Leute-=parseInt(player.Leute/10);
}
}