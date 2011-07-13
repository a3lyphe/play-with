function SchiffBilderRoto(){//+Animation
//Mit Hilfe des Sinus und Cosinusses wird das aktuelle bild ermittelt
var SinRot=Math.sin(player.rot);

//Sektor: NORD-OST
if(SinRot<0){
var checker=Math.cos(player.rot).toFixed(3)*1000;
	switch(checker){
		case 105:
			document.images[19].src=SchiffBilder[1].src;
			break;
		case 208:
			document.images[19].src=SchiffBilder[2].src;
			break;
			//18
		case 310:
			document.images[19].src=SchiffBilder[3].src;
			break;
			//24
		case 407:
			document.images[19].src=SchiffBilder[4].src;
			break;
			//30
		case 500:
			document.images[19].src=SchiffBilder[5].src;
			break;
			//36
		case 588:
			document.images[19].src=SchiffBilder[6].src;
			break;
			//42
		case 670:
			document.images[19].src=SchiffBilder[7].src;
			break;
			//48
		case 744:
			document.images[19].src=SchiffBilder[8].src;
			break;
			//54
		case 810:
			document.images[19].src=SchiffBilder[9].src;
			break;
			//60
		case 867:
			document.images[19].src=SchiffBilder[10].src;
			break;
			//66
		case 914:
			document.images[19].src=SchiffBilder[11].src;
			break;
			//72
		case 952:
			document.images[19].src=SchiffBilder[12].src;
			break;
			//78
		case 979:
			document.images[19].src=SchiffBilder[13].src;
			break;
			//84
		case 995:
			document.images[19].src=SchiffBilder[14].src;
			break;
	}
}
//Sektor: Sued-Ost
if(SinRot>0){
var checker=Math.cos(player.rot).toFixed(3)*1000;
	switch(checker){
		case 995:
			document.images[19].src=SchiffBilder[16].src;
			break;
		case 979:
			document.images[19].src=SchiffBilder[17].src;
			break;
			//18
		case 952:
			document.images[19].src=SchiffBilder[18].src;
			break;
			//24
		case 914:
			document.images[19].src=SchiffBilder[19].src;
			break;
			//30
		case 867:
			document.images[19].src=SchiffBilder[20].src;
			break;
			//36
		case 810:
			document.images[19].src=SchiffBilder[21].src;
			break;
			//42
		case 744:
			document.images[19].src=SchiffBilder[22].src;
			break;
			//48
		case 670:
			document.images[19].src=SchiffBilder[23].src;
			break;
			//54
		case 588:
			document.images[19].src=SchiffBilder[24].src;
			break;
			//60
		case 500:
			document.images[19].src=SchiffBilder[25].src;
			break;
			//66
		case 407:
			document.images[19].src=SchiffBilder[26].src;
			break;
			//72
		case 310:
			document.images[19].src=SchiffBilder[27].src;
			break;
			//78
		case 208:
			document.images[19].src=SchiffBilder[28].src;
			break;
			//84
		case 105:
			document.images[19].src=SchiffBilder[29].src;
			break;
	}
}
//Sektor: Sued-West
if(SinRot>0){
var checker=Math.cos(player.rot).toFixed(3)*1000*-1;
	switch(checker){
		case 105:
			document.images[19].src=SchiffBilder[31].src;
			break;
		case 208:
			document.images[19].src=SchiffBilder[32].src;
			break;
			//18
		case 310:
			document.images[19].src=SchiffBilder[33].src;
			break;
			//24
		case 407:
			document.images[19].src=SchiffBilder[34].src;
			break;
			//30
		case 500:
			document.images[19].src=SchiffBilder[35].src;
			break;
			//36
		case 588:
			document.images[19].src=SchiffBilder[36].src;
			break;
			//42
		case 670:
			document.images[19].src=SchiffBilder[37].src;
			break;
			//48
		case 744:
			document.images[19].src=SchiffBilder[38].src;
			break;
			//54
		case 810:
			document.images[19].src=SchiffBilder[39].src;
			break;
			//60
		case 867:
			document.images[19].src=SchiffBilder[40].src;
			break;
			//66
		case 914:
			document.images[19].src=SchiffBilder[41].src;
			break;
			//72
		case 952:
			document.images[19].src=SchiffBilder[42].src;
			break;
			//78
		case 979:
			document.images[19].src=SchiffBilder[43].src;
			break;
			//84
		case 995:
			document.images[19].src=SchiffBilder[44].src;
			break;
	}
}
//Sektor: Sued-West
if(SinRot<0){
var checker=Math.cos(player.rot).toFixed(3)*1000*-1;
	switch(checker){
		case 995:
			document.images[19].src=SchiffBilder[46].src;
			break;
		case 979:
			document.images[19].src=SchiffBilder[47].src;
			break;
			//18
		case 952:
			document.images[19].src=SchiffBilder[48].src;
			break;
			//24
		case 914:
			document.images[19].src=SchiffBilder[49].src;
			break;
			//30
		case 867:
			document.images[19].src=SchiffBilder[50].src;
			break;
			//36
		case 810:
			document.images[19].src=SchiffBilder[51].src;
			break;
			//42
		case 744:
			document.images[19].src=SchiffBilder[52].src;
			break;
			//48
		case 670:
			document.images[19].src=SchiffBilder[53].src;
			break;
			//54
		case 588:
			document.images[19].src=SchiffBilder[54].src;
			break;
			//60
		case 500:
			document.images[19].src=SchiffBilder[55].src;
			break;
			//66
		case 407:
			document.images[19].src=SchiffBilder[56].src;
			break;
			//72
		case 310:
			document.images[19].src=SchiffBilder[57].src;
			break;
			//78
		case 208:
			document.images[19].src=SchiffBilder[58].src;
			break;
			//84
		case 105:
			document.images[19].src=SchiffBilder[59].src;
			break;
	}
}
			//90
		if(Math.cos(player.rot)==1){
			document.images[19].src=SchiffBilder[15].src;
			}
			//0
		if(SinRot==-1){
			document.images[19].src=SchiffBilder[0].src;
			}
			//180
		if(SinRot==1){
			document.images[19].src=SchiffBilder[30].src;
			}
			//270
		if(Math.cos(player.rot)==-1){
			document.images[19].src=SchiffBilder[45].src;
			}
}//-Animation