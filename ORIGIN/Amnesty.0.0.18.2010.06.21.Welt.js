//class:Welt

//Core/Core.Welt.js
	//DONE:
		//+transfered back into external script
		//+file-name versioned
		//+prototyped methods
		//+nested correctly
		//+line-endings are semi-colonized
		//+bracelets are corrected
		//+double defined variable wo is commented
	//TODO:
		//+del alert('hulu')
		//+NameSpace
		//+var wo - delete comments if functionality is given; check why definition is doubled
		//+var wo und $(Isleid) is the same - merge to one
		//+merge document.getElementById and $() - it is the same - only one coding-style should be there
		//+var nummer is build via: var nummer=iZahl+1; -- should be iZahl++;
		//+var nummer has always 2 values which are any time the same sequence - seems to depend on the if it is nested in (check relation to iZahl)

var welches=0;//???
var trauminselCounter=0;//???
var iZahl=0;//???
Welt=function()
{
	this.id;
	this.xActual;
	this.yActual;
	this.Width;
	this.Height;
	this.zoom;
}
//Methods
var says=function()
{
	return(this.link().getContext('2d'));
}
var link=function()
{
	return($(this.id));
}
var mini=function()
{
	var welt=this.link();
	var weltBack=theMapsBackGround.link();
	var weltPlay=theMapsPlayGround.link();
	weltBack.width=mapWidth*miniMapScale;
	weltBack.height=mapHeight*miniMapScale;
	weltPlay.width=weltBack.width;
	weltPlay.height=weltBack.height;
	var w=(mapWidth*miniMapScale)+'px';
	var h=(mapHeight*miniMapScale)+'px';
	weltBack.style.width=weltPlay.style.width=welt.style.width=w;
	weltBack.style.height=weltPlay.style.height=welt.style.height=h;
	var weltSays=theMapsBackGround.says();
	weltSays.fillStyle='transparent';
	weltSays.fillRect(0,0,weltBack.width,weltBack.height);
	for(var y=0;y<mapHeight;y++)
	{
		for(var x=0;x<mapWidth;x++)
		{
			var wall=map[y][x];
			if(wall>0&&wall<2)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>5&&wall<7)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landObenUndLinksWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>6&&wall<8)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landObenWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>7&&wall<9)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landObenUndRechtsWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>8&&wall<10)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landLinksWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>9&&wall<11)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("land").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>10&&wall<12)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landRechtsWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>11&&wall<13)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landUntenUndLinksWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>12&&wall<14)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landUntenWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>13&&wall<15)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landUntenUndRechtsWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>14&&wall<16)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landObenLinksWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>15&&wall<17)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landObenRechtsWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>16&&wall<18)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landUntenLinksWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>17&&wall<19)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landUntenRechtsWasser").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>19&&wall<21)
			{
				weltSays.fillStyle='rgb(156,0,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>20&&wall<22)
			{
				weltSays.fillStyle='rgb(156,0,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>24&&wall<26)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landBerg02").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
			if(wall>25&&wall<27)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
				if(trauminselCounter==iZahl)
				{
					alert('hulu');
					var nummer=iZahl+1;//ergibt immer 76 zum 1. und 175 zum 2.???
					var was=''+'neueInsel'+nummer;
					was=document.getElementById("landBerg03").cloneNode(true);
					var myH1=was;
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					var wo=document.getElementById(Isleid);
					wo.appendChild(myH1);
					$(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					$(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				trauminselCounter+=1;
				iZahl+=1;
			}
		}
	}
}
var MiniUpdate=function()
{
	var welt=this.link();
	var weltBack=theMapsBackGround.link();
	var weltPlay=theMapsPlayGround.link();
	weltBack.width=mapWidth*miniMapScale;
	weltBack.height=mapHeight*miniMapScale;
	weltPlay.width=weltBack.width;
	weltPlay.height=weltBack.height;
	var w=(mapWidth*miniMapScale)+'px';
	var h=(mapHeight*miniMapScale)+'px';
	weltBack.style.width=weltPlay.style.width=welt.style.width=w;
	weltBack.style.height=weltPlay.style.height=welt.style.height=h;
	var weltSays=theMapsBackGround.says();
	weltSays.fillStyle='transparent';
	weltSays.fillRect(0,0,weltBack.width,weltBack.height);
	for(var y=0;y<mapHeight;y++)
	{
		for(var x=0;x<mapWidth;x++)
		{
			var wall=map[y][x];
			if(wall>0&&wall<2)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>5&&wall<7)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>6&&wall<8)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>7&&wall<9)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>8&&wall<10)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>9&&wall<11)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>10&&wall<12)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>11&&wall<13)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(wall>12&&wall<14)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>13&&wall<15)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>14&&wall<16)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>15&&wall<17)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>16&&wall<18)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>17&&wall<19)
			{
				weltSays.fillStyle='rgb(0,150,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>19&&wall<21)
			{
				weltSays.fillStyle='rgb(156,156,12)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(wall>20&&wall<22)
			{
				weltSays.fillStyle='rgb(156,0,0)';
				weltSays.fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
		}
	}
}
//Welt.Methods
Welt.prototype.says=says;
Welt.prototype.link=link;
Welt.prototype.mini=mini;
Welt.prototype.MiniUpdate=MiniUpdate;
