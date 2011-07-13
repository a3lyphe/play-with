center=function(element,object){
	var weltpuffery=0;
	var weltpufferx=0;
		weltpuffery=parseInt((window.innerHeight/2)-((object.yActual)*FeldGroesse)-(object.link().offsetHeight/2));
		weltpufferx=parseInt((window.innerWidth/2)-((object.xActual)*FeldGroesse)-(object.link().offsetWidth/2));
	$(element).style.top=weltpuffery+'px';
	$(element).style.left=weltpufferx+'px';
}