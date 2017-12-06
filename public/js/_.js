// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


// DEBUG
var trace = function(msg){ console.log(msg); };


class Star
{
	// MAIN
	constructor(x, y)
	{
		this.x = x;
		this.y = y;

		this.store = new Array();
		this.store.push(x);
		this.store.push(y);
	}

	// FUNCTION OR METHOD INSIDE CLASS:
	callOut()
	{
		alert(this.x + " " + this.y);
	}

	lister()
	{
		trace(this.store);
	}

	// GETTER
	get deets()
	{
		// CALL TO INNER FUNCTON - METHOD
		return this.lister();
	}
}

// EXTENDING A CLASS

class SuperStar extends Star
{
	callOut()
	{
		// CALLS OUT callOut() IN ORIGINAL CLASS
		super.callOut();
		
		alert(this.x + " " + this.y + " " + this.x + this.y);
	}
}


function pageLoad_init()
{
	trace("pageLoad_init();");

	testClass();
}

function testClass()
{
	// NEW INSTANCE OF STAR
	var s = new Star(100, 100);
	// FUNCTION CALL
	s.callOut();
	trace(s);
	trace("test === " + s.deets);

	var ss = new SuperStar(20, 20); // USES ORIGINAL CLASS CONSTRUCTOR
	ss.callOut();
}

