
			//Amnesty.0.0.25.2010.06.22
			alert((
				'°Amnesty.0.0.25.2010.06.22.htm°:'
				+'\n++\tadded meta-Tag for script- and style-type and deleted inline-Attributes for Type in those'
				+'\n++\trefined code to line-wise view with nested attributes and function calls'
				+'\n++\tinserted a loop-through of document.images to estimate if calback of img-placeholders is possible'
			));
			//Virtual NameSpace °C°:Class|Collection|Container|Catcher|Cage
			var C={};
		


Spry.Utils.addLoadListener(function() {

			//testing a loop through document.images with switch-case on value of name-Attribute; should be enhanced to a universal callback/pointer/tracer that can be called from any function/inside any routine globally available to look for img-place-holders
			for(image in document.images)
			{
				var Name=document.images[image].name;
				switch(Name)
				{
					case('Kompass'):
						alert('Yop isn Kompass da... (theoretisch!)')
					break;
					default:
						//alert('besser nich koennten batzen sein! ...Ach hab ich ja scho gesacht :) ');
					break;
				}
			}
		

});
