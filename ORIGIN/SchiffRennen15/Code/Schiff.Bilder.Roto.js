function SchiffBilderRoto(){
var SinRot=Math.sin(player.rot);
//Sektor: NORD-OST
if(SinRot<0){
var checker=Math.cos(player.rot).toFixed(3)*1000;
	switch(checker){
		case 105:
			document.images[19].src=player.icon.list[1].src;
			break;
		case 208:
			document.images[19].src=player.icon.list[2].src;
			break;
//18
		case 310:
			document.images[19].src=player.icon.list[3].src;
			break;
//24
		case 407:
			document.images[19].src=player.icon.list[4].src;
			break;
//30
		case 500:
			document.images[19].src=player.icon.list[5].src;
			break;
//36
		case 588:
			document.images[19].src=player.icon.list[6].src;
			break;
//42
		case 670:
			document.images[19].src=player.icon.list[7].src;
			break;
//48
		case 744:
			document.images[19].src=player.icon.list[8].src;
			break;
//54
		case 810:
			document.images[19].src=player.icon.list[9].src;
			break;
//60
		case 867:
			document.images[19].src=player.icon.list[10].src;
			break;
//66
		case 914:
			document.images[19].src=player.icon.list[11].src;
			break;
//72
		case 952:
			document.images[19].src=player.icon.list[12].src;
			break;
//78
		case 979:
			document.images[19].src=player.icon.list[13].src;
			break;
//84
		case 995:
			document.images[19].src=player.icon.list[14].src;
			break;
	}
}
//Sektor: Sued-Ost
if(SinRot>0){
var checker=Math.cos(player.rot).toFixed(3)*1000;
	switch(checker){
		case 995:
			document.images[19].src=player.icon.list[16].src;
			break;
		case 979:
			document.images[19].src=player.icon.list[17].src;
			break;
//18
		case 952:
			document.images[19].src=player.icon.list[18].src;
			break;
//24
		case 914:
			document.images[19].src=player.icon.list[19].src;
			break;
//30
		case 867:
			document.images[19].src=player.icon.list[20].src;
			break;
//36
		case 810:
			document.images[19].src=player.icon.list[21].src;
			break;
//42
		case 744:
			document.images[19].src=player.icon.list[22].src;
			break;
//48
		case 670:
			document.images[19].src=player.icon.list[23].src;
			break;
//54
		case 588:
			document.images[19].src=player.icon.list[24].src;
			break;
//60
		case 500:
			document.images[19].src=player.icon.list[25].src;
			break;
//66
		case 407:
			document.images[19].src=player.icon.list[26].src;
			break;
//72
		case 310:
			document.images[19].src=player.icon.list[27].src;
			break;
//78
		case 208:
			document.images[19].src=player.icon.list[28].src;
			break;
//84
		case 105:
			document.images[19].src=player.icon.list[29].src;
			break;
	}
}
//Sektor: Sued-West
if(SinRot>0){
var checker=Math.cos(player.rot).toFixed(3)*1000*-1;
	switch(checker){
		case 105:
			document.images[19].src=player.icon.list[31].src;
			break;
		case 208:
			document.images[19].src=player.icon.list[32].src;
			break;
//18
		case 310:
			document.images[19].src=player.icon.list[33].src;
			break;
//24
		case 407:
			document.images[19].src=player.icon.list[34].src;
			break;
//30
		case 500:
			document.images[19].src=player.icon.list[35].src;
			break;
//36
		case 588:
			document.images[19].src=player.icon.list[36].src;
			break;
//42
		case 670:
			document.images[19].src=player.icon.list[37].src;
			break;
//48
		case 744:
			document.images[19].src=player.icon.list[38].src;
			break;
//54
		case 810:
			document.images[19].src=player.icon.list[39].src;
			break;
//60
		case 867:
			document.images[19].src=player.icon.list[40].src;
			break;
//66
		case 914:
			document.images[19].src=player.icon.list[41].src;
			break;
//72
		case 952:
			document.images[19].src=player.icon.list[42].src;
			break;
//78
		case 979:
			document.images[19].src=player.icon.list[43].src;
			break;
//84
		case 995:
			document.images[19].src=player.icon.list[44].src;
			break;
	}
}
//Sektor: Sued-West
if(SinRot<0){
var checker=Math.cos(player.rot).toFixed(3)*1000*-1;
	switch(checker){
		case 995:
			document.images[19].src=player.icon.list[46].src;
			break;
		case 979:
			document.images[19].src=player.icon.list[47].src;
			break;
//18
		case 952:
			document.images[19].src=player.icon.list[48].src;
			break;
//24
		case 914:
			document.images[19].src=player.icon.list[49].src;
			break;
//30
		case 867:
			document.images[19].src=player.icon.list[50].src;
			break;
//36
		case 810:
			document.images[19].src=player.icon.list[51].src;
			break;
//42
		case 744:
			document.images[19].src=player.icon.list[52].src;
			break;
//48
		case 670:
			document.images[19].src=player.icon.list[53].src;
			break;
//54
		case 588:
			document.images[19].src=player.icon.list[54].src;
			break;
//60
		case 500:
			document.images[19].src=player.icon.list[55].src;
			break;
//66
		case 407:
			document.images[19].src=player.icon.list[56].src;
			break;
//72
		case 310:
			document.images[19].src=player.icon.list[57].src;
			break;
//78
		case 208:
			document.images[19].src=player.icon.list[58].src;
			break;
//84
		case 105:
			document.images[19].src=player.icon.list[59].src;
			break;
	}
}
//90
		if(Math.cos(player.rot)==1){
			document.images[19].src=player.icon.list[15].src;
			}
//0
		if(SinRot==-1){
			document.images[19].src=player.icon.list[0].src;
			}
//180
		if(SinRot==1){
			document.images[19].src=player.icon.list[30].src;
			}
//270
		if(Math.cos(player.rot)==-1){
			document.images[19].src=player.icon.list[45].src;
			}
}