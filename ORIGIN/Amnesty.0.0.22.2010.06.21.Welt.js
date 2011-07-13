alert((
	'°Amnesty.0.0.22.2010.06.21.Welt.js°:'
	+'\n++\ttranscoded °C.Welt.Method.mini° from °if°-Range-Selector to °switch-case°-Selector'
	+'\n++\t°theWelt°(the only one allowed and used instance of °C.Welt.Class°), which was hard-coded into methods of °C.Welt° is replaced with C.Welt.Instance as kind of a buffer for the first own instance of the class it is used in'
	+'\n++\t'
));

//class:Welt
C.Welt={};

//Core/Core.Welt.js
	/*TODO
		//delete alert('hulu')
		//NameSpace for prototyped methods (put into module-pattern or similar)
		//push anything into virtual NameSpace °C°//°C° stands for Class|Collection|Cut|Corn|Child
		//var wo - delete comments if functionality is given; check why definition is doubled
		//var wo und $(Isleid) is the same - merge to one
		//var nummer has always 2 values which are any time the same sequence - seems to depend on the °if° it is nested in (check relation to C.Welt.Variable.iZahl)
		//found corrupted °/Icon/Schiff/162Schiff.gif°
		//found corrupted °/Icon/Schiff/204Schiff.gif°
		//theWelt is used many times, but using an object variable to an instance inside a class is nonsense;to make this modular theWelt has to be transfered for usage in the class -- means build acceptor or buffer-variable is necessary
		//theWelt has to be a Singleton, because it is not possible neither necessary to control more than one world from one single broser-view; for management or preview-purposes a streamed variant of the actual view of single players or regions is more than enough; in the actual coding style it would only make sense if used server-side
		//see what happens if the °filler°-calls are commented out inside the °mini°-method
		//image for compass|windhose is missing
	*/
	/*DONE
	//
	*/

//Welt.Variable
C.Welt.Variable={};

//var welches=0;
C.Welt.Variable.welches=0;//not used, can be deleted
//var trauminselCounter=0;//???
C.Welt.Variable.trauminselCounter=0;//replaced 32 times
//var iZahl=0;//???
C.Welt.Variable.iZahl=0;
//Welt.Class
//var Welt=function()
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
				case(1)://if(Tile>0&&Tile<2){
					//this.filler(x,y);
				break;//}
				case(6)://if(Tile>5&&Tile<7){
					//this.filler(x,y);
					//alert(C.Welt.Variable.iZahl);
					if(C.Welt.Variable.trauminselCounter
						&&(
							C.Welt.Variable.trauminselCounter
							==C.Welt.Variable.iZahl
						)
					)
					{
						var nummer=C.Welt.Variable.iZahl+1;
						//alert(C.Welt.Variable.iZahl);
						myH1=document.getElementById("landObenUndLinksWasser").cloneNode(true);
						var Isleid=''+'TestInsel'+nummer;
						document.getElementById(Isleid).appendChild(myH1);
						document.getElementById(Isleid).style.top=y*FeldGroesse*theWelt.zoom+100;
						document.getElementById(Isleid).style.left=x*FeldGroesse*theWelt.zoom+100;
					}
					C.Welt.Variable.trauminselCounter+=1;
					C.Welt.Variable.iZahl++;
				break;//}
				case(7)://if(Tile>6&&Tile<8){
					//this.filler(x,y);
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
				break;//}
				case(8)://if(Tile>7&&Tile<9){
					//this.filler(x,y);
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
				break;//}
				case(9)://if(Tile>8&&Tile<10){
					//this.filler(x,y);
					alert((
						'°C.Welt.Variable.trauminselCounter:°'
						+C.Welt.Variable.trauminselCounter
						+'|'
						+'°C.Welt.Variable.iZahl°'
						+C.Welt.Variable.iZahl
					));
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
				break;//}
				case(10)://if(Tile>9&&Tile<11){
					//this.filler(x,y);
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
				break;//}
				case(11)://if(Tile>10&&Tile<12){
					//this.filler(x,y);
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
				break;//}
				case(12)://if(Tile>11&&Tile<13){
					//this.filler(x,y);
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
				case(13)://if(Tile>12&&Tile<14){
					//this.filler(x,y);
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
				break;//}
				case(14)://if(Tile>13&&Tile<15){
					//this.filler(x,y);
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
				break;//}
				case(15)://if(Tile>14&&Tile<16){
					//this.filler(x,y);
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
				break;//}
				case(16)://if(Tile>15&&Tile<17){
					//this.filler(x,y);
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
				break;//}
				case(17)://if(Tile>16&&Tile<18){
					//this.filler(x,y);
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
				break;//}
				case(18)://if(Tile>17&&Tile<19){
					//this.filler(x,y);
					if(C.Welt.Variable.trauminselCounter==C.Welt.Variable.iZahl)
					{
						var nummer=C.Welt.Variable.iZahl+1;
				
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
					C.Welt.Variable.iZahl++;
				break;//}
				case(20)://if(Tile>19&&Tile<21){
					//this.filler(x,y);
				break;//}
				case(21)://if(Tile>20&&Tile<22){
					//this.filler(x,y);
				break;//}
				case(25)://if(Tile>24&&Tile<26){
					//this.filler(x,y);
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
				break;//}
				case(26)://if(Tile>25&&Tile<27){
					//this.filler(x,y);
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
				break;//}
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
			/*TODO
			//This makes no sense for integer-values
			//Because map is a 2D-Array it can only deliver Integer-Values so there has to be simpler and shorter way
			//As long as the same °filler°-method is called without different values (other than the position) this loop does nothing but marking Tiles on the MiniMap as 'there is something'
			//In case there should be diverse markups, like a legend of colors for different types of land, ware or something else a switch-case will do it far better
			//that all said, here are the solutions:
			*/
			/*
			if(Tile>0&&Tile<2)
			{//1
				this.filler(x,y);
			}
			if(Tile>5&&Tile<7)
			{//6
				this.filler(x,y);
			}
			if(Tile>6&&Tile<8)
			{//7
				this.filler(x,y);
			}
			if(Tile>7&&Tile<9)
			{//8
				this.filler(x,y);
			}
			if(Tile>8&&Tile<10)
			{//9
				this.filler(x,y);
			}
			if(Tile>9&&Tile<11)
			{//10
				this.filler(x,y);
			}
			if(Tile>10&&Tile<12)
			{//11
				this.filler(x,y);
			}
			if(Tile>11&&Tile<13)
			{//12
				this.filler(x,y);
			}
			if(Tile>12&&Tile<14)
			{//13
				this.filler(x,y);
			}
			if(Tile>13&&Tile<15)
			{//14
				this.filler(x,y);
			}
			if(Tile>14&&Tile<16)
			{//15
				this.filler(x,y);
			}
			if(Tile>15&&Tile<17)
			{//16
				this.filler(x,y);
			}
			if(Tile>16&&Tile<18)
			{//17
				this.filler(x,y);
			}
			if(Tile>17&&Tile<19)
			{//18
				this.filler(x,y);
			}
			if(Tile>19&&Tile<21)
			{//20
				this.filler(x,y);
			}
			if(Tile>20&&Tile<22)
			{//21
				this.filler(x,y);
			}
			*///[1,6-18,20,21]
			//replacement:
			if(Tile
				&&(//Tile must exist AND one of the following conditions has to match
					Tile==1			//Tile-Type:1
					||(//OR Tile-Type is between and including
						Tile>=6		//6
						&&Tile<=18	//AND 18
					)
					||(//OR Tile-Type is:
						Tile==20		//20
					)
					||(//OR Tile-Type is:
						Tile==21		//21
					)
				)
			)
			{
				this.filler(x,y);//in all given cases|TRUE-matches call the °filler°-method with the map-raster-position of the proven Tile
			}//This is the way to call one and the same routine for cases based on numbers and ranges of numbers

			//2nd Way: Switch-Case
			/*
			switch(Tile)
			{
				case(1)://Tile-Type is: 1...
					this.filler(x,y);//so go on fill that Plot...
				break;//yeah fa sho, it would make more sense if some special routine for this case would be processed, because ...
				case(6)://in our situation it could be the case that the Type is 6...
					this.filler(x,y);//so we fill as always, but wouldn't it be nicer to...
				break;//use these cases for individual outputs?
				case(7)://I mean the benefit of a switch-case is definately given where exakt matches are thrown in,
					this.filler(x,y);//but as already told it lacks of fun, if we always process the same.
				break;//so for the future, with legendary map-tile-usage, where
				case(8)://any number corresponds to a special process, where...
					this.filler(x,y);//in any way something else has to be done
				break;//and no ranges of numbers a re specified
				case(9)://the switch-cases
					this.filler(x,y);//will be the one that hits all
				break;//not by performance
				case(10)://but
					this.filler(x,y);//by
				break;//readability
				case(11)://and
					this.filler(x,y);//the
				break;//over
				case(12)://a
					this.filler(x,y);//dozen
				break;//times
				case(13)://dozens
					this.filler(x,y);//tasks
				break;//you wanna write down in a manner
				case(14)://where
					this.filler(x,y);//the state of art
				break;//is
				case(15)://to just fullfill the tasks
					this.filler(x,y);//which are listed
				break;//clearly
				case(16)://and brilliant
					this.filler(x,y);//in the switch-case-branch
				break;
				case(17)://Phew...
					this.filler(x,y);//It is really annoying
				break;//to sketch some thoughts in sentences
				case(18)://as a comment behind nearly identical
					this.filler(x,y);//calls after cases
				break;//and breaks...
				case(20)://But sometimes some words can help
					this.filler(x,y);//to check out the necessity
				break;//of using standardized patterns
				case(21)://i mean
					this.filler(x,y);//you got it?
				break;//or not?
			}//In the end the sky clears, right...
			//In the next version the switch-case will be used for the map-generator above, where special ids have to be transfered; Though in the end a static-table would be much more efficient i think...
			*/
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
