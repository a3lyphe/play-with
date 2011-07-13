//class:Welt
C.Welt={};
//Core/Core.Welt.js
	/*TODO
		//v//comment out alert('hulu')
		//delete alert('hulu')
		//v//scope 'Welt' via 'var'
		//NameSpace for prototyped methods (put into module-pattern or similar)
		//push anything into virtual NameSpace °C°//°C° stands for Class|Collection|Cut|Corn|Child
		//var wo - delete comments if functionality is given; check why definition is doubled
		//var wo und $(Isleid) is the same - merge to one
		//v//merge $ and document.getElementById() - it is the same - only one coding-style should be tTile
		//var nummer is build via: var nummer=iZahl+1; -- should be iZahl++;
		//var nummer has always 2 values which are any time the same sequence - seems to depend on the if it is nested in (check relation to iZahl)
		//found corrupted °/Icon/Schiff/162Schiff.gif°
		//found corrupted °/Icon/Schiff/204Schiff.gif°
	*/
	/*DONE
		//transfered back into external script
		//file-name versioned
		//prototyped methods
		//nested correctly
		//line-endings are semi-colonized
		//bracelets are corrected
		//double defined variable wo is commented
		//2010.06.21.07.49.37//commented out alert('hulu')
		//2010.06.21.07.53.38//scoped Welt via var
		//2010.06.21.07.57.27//replaced °$(° with °document.getElementById(° (31 matches)
		
	*/

//Welt.Variable
C.Welt.Variable={};

//var welches=0;
C.Welt.Variable.welches=0;//not used, can be deleted
//var trauminselCounter=0;//???
C.Welt.Variable.trauminselCounter=0;//replaced 32 times
var iZahl=0;//???
//Welt.Constructor.Definition
var Welt=function()
{
	this.id;
	this.xActual;
	this.yActual;
	this.Width;
	this.Height;
	this.zoom;
}

//Welt.Method.Definition
var says=function()
{
	return(this.link().getContext('2d'));
}

var link=function()
{
	return(document.getElementById(this.id));
}

var filler=function(x,y)
{
		theMapsBackGround.says().fillStyle='rgb(0,150,0)';
		theMapsBackGround.says().fillRect(
			x*miniMapScale
			,y*miniMapScale
			,miniMapScale
			,miniMapScale
		);
}

var mini=function()
{
	theMapsBackGround.link().width=mapWidth*miniMapScale;
	theMapsBackGround.link().height=mapHeight*miniMapScale;
	theMapsPlayGround.link().width=theMapsBackGround.link().width;
	theMapsPlayGround.link().height=theMapsBackGround.link().height;
	theMapsBackGround.link().style.width=theMapsPlayGround.link().style.width=this.link().style.width=(mapWidth*miniMapScale)+'px';
	theMapsBackGround.link().style.height=theMapsPlayGround.link().style.height=this.link().style.height=(mapHeight*miniMapScale)+'px';
	theMapsBackGround.says().fillStyle='transparent';
	theMapsBackGround.says().fillRect(0,0,theMapsBackGround.link().width,theMapsBackGround.link().height);

	for(y in map)
	{
		for(x in map[y])
		{
			var Tile=map[y][x];
			if(Tile>0&&Tile<2)
			{
				this.filler(x,y);
			}
			if(Tile>5&&Tile<7)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landObenUndLinksWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>6&&Tile<8)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landObenWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>7&&Tile<9)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landObenUndRechtsWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>8&&Tile<10)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landLinksWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>9&&Tile<11)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("land").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>10&&Tile<12)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landRechtsWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>11&&Tile<13)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landUntenUndLinksWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>12&&Tile<14)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landUntenWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>13&&Tile<15)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landUntenUndRechtsWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>14&&Tile<16)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landObenLinksWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>15&&Tile<17)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					myH1=document.getElementById("landObenRechtsWasser").cloneNode(true);
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>16&&Tile<18)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					
					myH1=document.getElementById("landUntenLinksWasser").cloneNode(true);
					
					var Isleid=''+'TestInsel'+nummer;
					
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>17&&Tile<19)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					
					myH1=document.getElementById("landUntenRechtsWasser").cloneNode(true);
					
					var Isleid=''+'TestInsel'+nummer;
					/*
					var wo=''+'Ausgabebereich'+nummer;
					*///wird in der nächsten Zeile überschrieben, deshalb auskommentiert
					
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>19&&Tile<21)
			{
				this.filler(x,y);
			}
			if(Tile>20&&Tile<22)
			{
				this.filler(x,y);
			}
			if(Tile>24&&Tile<26)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					var nummer=iZahl+1;
					
					myH1=document.getElementById("landBerg02").cloneNode(true);
					
					var Isleid=''+'TestInsel'+nummer;
					
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
			if(Tile>25&&Tile<27)
			{
				this.filler(x,y);
				if(C.Welt.Variable.trauminselCounter==iZahl)
				{
					//alert('hulu');
					var nummer=iZahl+1;//ergibt immer 76 zum 1. und 175 zum 2.???
					
					myH1=document.getElementById("landBerg03").cloneNode(true);
					
					var Isleid=''+'TestInsel'+nummer;
					document.getElementById(Isleid).appendChild(myH1);
					document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
					document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
				}
				C.Welt.Variable.trauminselCounter+=1;
				iZahl+=1;
			}
		}
	}
}

var MiniUpdate=function()
{
	theMapsBackGround.link().width=mapWidth*miniMapScale;
	theMapsBackGround.link().height=mapHeight*miniMapScale;
	theMapsPlayGround.link().width=theMapsBackGround.link().width;
	theMapsPlayGround.link().height=theMapsBackGround.link().height;
	theMapsBackGround.link().style.width=theMapsPlayGround.link().style.width=this.link().style.width=(mapWidth*miniMapScale)+'px';
	theMapsBackGround.link().style.height=theMapsPlayGround.link().style.height=this.link().style.height=(mapHeight*miniMapScale)+'px';

	theMapsBackGround.says().fillStyle='transparent';
	theMapsBackGround.says().fillRect(0,0,theMapsBackGround.link().width,theMapsBackGround.link().height);
	for(var y=0;y<mapHeight;y++)
	{
		for(var x=0;x<mapWidth;x++)
		{
			var Tile=map[y][x];
			if(Tile>0&&Tile<2)
			{
				this.filler(x,y);
			}
			if(Tile>5&&Tile<7)
			{
				this.filler(x,y);
			}
			if(Tile>6&&Tile<8)
			{
				this.filler(x,y);
			}
			if(Tile>7&&Tile<9)
			{
				this.filler(x,y);
			}
			if(Tile>8&&Tile<10)
			{
				this.filler(x,y);
			}
			if(Tile>9&&Tile<11)
			{
				this.filler(x,y);
			}
			if(Tile>10&&Tile<12)
			{
				this.filler(x,y);
			}
			if(Tile>11&&Tile<13)
			{
				theMapsBackGround.says().fillStyle='rgb(0,150,0)';
				theMapsBackGround.says().fillRect(
					x*miniMapScale,
					y*miniMapScale,
					miniMapScale,miniMapScale
				);
			}
			if(Tile>12&&Tile<14)
			{
				this.filler(x,y);
			}
			if(Tile>13&&Tile<15)
			{
				this.filler(x,y);
			}
			if(Tile>14&&Tile<16)
			{
				this.filler(x,y);
			}
			if(Tile>15&&Tile<17)
			{
				this.filler(x,y);
			}
			if(Tile>16&&Tile<18)
			{
				this.filler(x,y);
			}
			if(Tile>17&&Tile<19)
			{
				this.filler(x,y);
			}
			if(Tile>19&&Tile<21)
			{
				theMapsBackGround.says().fillStyle='rgb(156,156,12)';
				theMapsBackGround.says().fillRect(
					x*miniMapScale
					,y*miniMapScale
					,miniMapScale
					,miniMapScale
				);
			}
			if(Tile>20&&Tile<22)
			{
				this.filler(x,y);
			}
		}
	}
}

//Welt.Method.Declaration//bond via °.prototype.°
Welt.prototype.says=says;
Welt.prototype.link=link;
Welt.prototype.mini=mini;
Welt.prototype.MiniUpdate=MiniUpdate;
Welt.prototype.filler=filler;
