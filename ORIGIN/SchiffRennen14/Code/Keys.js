//bind keyboard events to game functions(movement,etc)
function bindKeys(){
document.onkeydown=function(e){
e=e || window.event;
switch(e.keyCode){//which key was pressed?
//Player1
case 78://"N",move player forward,ie. increase speed
Kanone1();
break;
case 87://"W",move player forward,ie. increase speed
player.speed=1;
player.moveSpeed=0.02;
break;
case 83://"W",move player forward,ie. increase speed
player.speed=0;
player.moveSpeed=0;
break;
case 65://"A",rotate player left
player.dir=-1;
break;
case 68://"D",rotate player right
player.dir=1;
break;
}
}
document.onkeyup=function(e){
e=e || window.event;
switch(e.keyCode){
case 65:
case 68:
player.dir=0;////stop the player rotation when up/down key is released
break;
}
}
}