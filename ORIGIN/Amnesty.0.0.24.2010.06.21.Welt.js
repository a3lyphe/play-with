//Amnesty.0.0.24.2010.06.21.Welt.js
alert((
	'°Amnesty.0.0.24.2010.06.21.Welt.js°:'
	+'\n++\t'
	+'\n++\t'
	+'\n++\t'
));

//class:Welt
C.Welt={};

//Welt.Variable
C.Welt.Variable={};

C.Welt.Variable.welches=0;//not used, can be deleted
C.Welt.Variable.trauminselCounter=0;//replaced 32 times
C.Welt.Variable.iZahl=0;

//Welt.Class
C.Welt.Class
=function()
{
	this.id;
	this.xActual;
	this.yActual;
	this.Width;
	this.Height;
	this.zoom;
}

//Welt.Method
C.Welt.Method
={};

C.Welt.Method.says
=function()
{
	return(this.link().getContext('2d'));
}

C.Welt.Method.link
=function()
{
	return(document.getElementById(this.id));
}

C.Welt.Method.filler
=function(x,y)
{
		theMapsBackGround
		.says()
		.fillStyle
		='rgb(0,150,0)';

		theMapsBackGround
		.says()
		.fillRect(
			x*miniMapScale
			,y*miniMapScale
			,miniMapScale
			,miniMapScale
		);
}

C.Welt.Method.mini
=function()
{
	theMapsBackGround
		.link()
		.width
	=mapWidth
		*miniMapScale;

	theMapsBackGround
		.link()
		.height
	=mapHeight
		*miniMapScale;

	theMapsPlayGround
		.link()
		.width
	=theMapsBackGround
		.link()
		.width;

	theMapsPlayGround
		.link()
		.height
	=theMapsBackGround
		.link()
		.height;

	theMapsBackGround
		.link()
		.style
		.width
	=theMapsPlayGround
		.link()
		.style
		.width
	=this
		.link()
		.style
		.width
	=mapWidth
		*miniMapScale
		+'px';

	theMapsBackGround
		.link()
		.style
		.height
	=theMapsPlayGround
		.link()
		.style
		.height
	=this
		.link()
		.style
		.height
	=mapHeight
		*miniMapScale
		+'px';

	theMapsBackGround
	.says()
	.fillStyle
	='transparent';

	theMapsBackGround
	.says()
	.fillRect(
		0
		,0
		,theMapsBackGround
			.link()
			.width
		,theMapsBackGround
			.link()
			.height
	);

	var Tile=[];

	for(y in map)
	{
		for(x in map[y])
		{
			Tile=map[y][x];//map[y][x] should be given as a chained method or function comparable to a foreach loop but 2dimensional; good name would be °plot(map)°

//()0,4,4,18,18),(40,40,49,49,53,53,65,65,69,69,92,92,108,108,132,132,182,182,191,191,197,197,228,228,283,283,
//306,306

			//replaced if(Tile>...&&Tile<...) with switch(Tile)
			switch(Tile)
			{
				case(6):
					if(C.Welt.Variable.trauminselCounter
						&&(
							C.Welt.Variable.trauminselCounter
							==C.Welt.Variable.iZahl
						)
					)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landObenUndLinksWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(7):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landObenWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(8):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landObenUndRechtsWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(9):
					/*
					alert((
						'°C.Welt.Variable.trauminselCounter:°'
						+C.Welt.Variable.trauminselCounter
						+'|'
						+'°C.Welt.Variable.iZahl°'
						+C.Welt.Variable.iZahl
					));
					*///Yo das is ja wohl sinnfrei, vorher gleich mittendrin gleich und danach gleich
					//dann muss da wohl GLEICH mal die if-kacke weggebusselt werden und die counter gemerged zu einem
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landLinksWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
					/*
					alert((
						'°C.Welt.Variable.trauminselCounter:°'
						+C.Welt.Variable.trauminselCounter
						+'|'
						+'°C.Welt.Variable.iZahl°'
						+C.Welt.Variable.iZahl
					));
					*///beweist die beiden Variablen haben immer identische Werte! Herzlichen Glückwunsch Juri, du hast mich wieder mal erfolgreich verwirrt, ahem ah ah argh brubbel...; okay anders rum jetzt test ich mal ob die auch vorher identisch sind bevor das if kommt, wär ja der knaller
				break;
				case(10):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("land").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(11):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landRechtsWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(12):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landUntenUndLinksWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;//}
				case(13):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landUntenWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(14):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landUntenUndRechtsWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(15):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landObenLinksWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(16):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landObenRechtsWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(17):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landUntenLinksWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(18):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						myH1=document.getElementById("landUntenRechtsWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(25):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
				
						myH1=document.getElementById("landBerg02").cloneNode(true);
				
						var Isleid=''+'TestInsel'+nummer;
				
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
				case(26):
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;//ergibt immer 76 zum 1. und 175 zum 2.???
				
						myH1=document.getElementById("landBerg03").cloneNode(true);
				
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;
			}//^switch(Tile)
		}//^for(x in map[y])
	}//^for(y in map)

	this.MiniUpdate();//Update the MiniMap direct after Map-Generation to synchronize visibility of Plots of Land-Tiles

}//^C.Welt.Method.Mini

C.Welt.Method.MiniUpdate
=function()
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
		for(x in map)
		{
			var Tile=map[y][x];
			if(Tile
				&&(
					Tile==1
					||(
						Tile>=6
						&&Tile<=18
					)
					||(
						Tile==20
					)
					||(
						Tile==21
					)
				)
			)
			{
				this.filler(x,y);
			}
		}
	}
}

//Welt.Method.Declaration//bond via °.prototype.°
C.Welt.Class.prototype.says
	=C.Welt.Method.says;
C.Welt.Class.prototype.link
	=C.Welt.Method.link;
C.Welt.Class.prototype.mini
	=C.Welt.Method.mini;
C.Welt.Class.prototype.MiniUpdate
	=C.Welt.Method.MiniUpdate;
C.Welt.Class.prototype.filler
	=C.Welt.Method.filler;

//C.Welt.Instance
C.Welt.Instance={};
