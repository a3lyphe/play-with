//Amnesty.0.0.24.2010.06.21.Kompass.js
alert((
	'°Amnesty.0.0.25.2010.06.22.Kompass.js°:'
	+'\n++\t'
	+'\n++\t'
	+'\n++\t'
));


C.Kompass={};

C.Kompass.Image={};

var KompassBilderOrdner='Icon/Kompass/Pfeil/';
C.Kompass.Image.Folder='Icon/Kompass/Pfeil/';
/*
document.addEventHandler(
	'load'
	,(
		function()
		{
			C.Kompass.Image.Holder=document.images['Kompass'];
		}
	)
	,true
);
*///has to be fixed! Not knowing by now the correct usage of addEventHandler
/*
setTimeout(
	(
		function()
		{
			C.Kompass.Image.Holder=document.images['Kompass'];
			alert(C.Kompass.Image.Holder);
		}
	),10000
);
*///everything clear; but should be avoided, because in this case onLoad is necessary (right after parsing of HtML/DOM)
var Kompass=function()
{
	var KompassBilder=[];
	for(var i=0;i<=60;i++)
	{
		KompassBilder[i]=new Image();
		var j=i*6;
		KompassBilder[i].src=''+KompassBilderOrdner+j.toString()+'.gif';
	}
	for(var i=0;i<=60;i++)
	{
		var j=i*6;
		var k=(i+1)*6;
		if(WindRichtungNeu>j&&WindRichtungNeu<k)
		{
			document.images[20].src=KompassBilder[i].src;
		}
	}
}//-Kompass
