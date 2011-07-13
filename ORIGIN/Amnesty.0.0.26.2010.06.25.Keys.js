//Amnesty.0.0.26.2010.06.25.Keys.js
alert((
	'°Amnesty.0.0.26.2010.06.25.Keys.js°:'
	+'\n++sorted and nested code linewise\t'
	+'\n++renamed versioned and saved to Amnesty.0.0.26.2010.06.25.Keys.js from /Code/Keys.js\t'
	+'\n++\t'
));
var bindKeys
=
function
(
	
)
{
	document
	.onkeydown
	=
	function
	(
		e
	)
	{
		e
		=
			e
			||
			window
			.event
		;
		switch
		(e.keyCode)
		{
			case 78://"N"
				Kanone1
				(
					
				)
				;
			break;
			case 87://"W"
				player
				.speed
				=
					1
				;
				player
				.moveSpeed
				=
					0.02
				;
			break;
			case 83://"S"
				player
				.speed
				=
					0
				;
				player
				.moveSpeed
				=
					0
				;
			break;
			case 65://"A"
				player
				.dir
				=
					-1
				;
			break;
			case 68://"D"
				player
				.dir
				=
					1
				;
			break;
		}
	}
	document
	.onkeyup
	=
	function
	(
		e
	)
	{
		e
		=
			e
			||
			window
			.event
		;
		switch(e.keyCode){
			case 68:
				alert('is it spinning ... ???');
				player
				.dir
				=
					0
				;
			break;
			case 65:
				player
				.dir
				=
					0
				;
			break;
		}
	}
}
