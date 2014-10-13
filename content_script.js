var regex_sjw = /\bsjw\b/gi // i flag makes it case insensitive
var regex_spelled_out = /\bsocial justice warrior\b/gi
var roles = Array("Paladin", "Mage", "Rogue", "Thief", "Assassin", "Warlock", "Wizard", "Ranger", "Cleric", "Priest", "Knight", "Druid", "Necromancer");
walk(document.body);



function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			if(regex_sjw.test(node.nodeValue)){
				node.data = node.data.replace(regex_sjw, "PB&J");
			}

			if(regex_spelled_out.test(node.nodeValue)){
				var role = roles[Math.floor(Math.random()*roles.length)];
				node.data = node.data.replace(regex_spelled_out, "Social Justice " + role);
			}
	}
}