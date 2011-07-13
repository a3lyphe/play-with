function WindHose(){
ZufallsZahl=(Math.random()*12)-6;
WindRichtungNeu=parseInt(ZufallsZahl)+parseInt(Windrichtung);
for(var i=0;i<=12;i++){
if(WindRichtungNeu==Maximum+i){
WindRichtungNeu=0+i;
}
if(WindRichtungNeu==-i){
WindRichtungNeu=Maximum-i;
}
}
Windrichtung=WindRichtungNeu;
}