function bindKeys(){
	document.onkeydown=function(e){
		e=e || window.event;
		switch(e.keyCode){
			case 78://"N"
			Kanone1();
			break;
			case 87://"W"
			player.speed=1;
			player.moveSpeed=0.02;
			break;
			case 83://"W"
			player.speed=0;
			player.moveSpeed=0;
			break;
			case 65://"A"
			player.dir=-1;
			break;
			case 68://"D"
			player.dir=1;
			break;
		}
	}
	document.onkeyup=function(e){
		e=e || window.event;
		switch(e.keyCode){
			case 65:
			case 68:
			player.dir=0;
			break;
		}
	}
}