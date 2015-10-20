var
  ns= require( "./ns"),
  extract= require( "./extract-id-or-value"),
  keySlot= "label"

function factory( classStore){
	if( !classStore){
		throw new Error( "Require a 'classStore'")
	}
	return function classVisitor( entry){
		if( entry[ ns.type].indexOf( ns.class)=== -1){
			return
		}
		var
		  key= extract( entry[ ns[ keySlot]])
		if( !key){
			return
		}
		console.log("KEY", ns[ keySlot], entry[ ns[ keySlot]])
		var
		  found= classStore[ key]|| (classStore[ key]= {})
		for(var i in ns){
			var
			  n = ns[ i],
			  first= entry[ n],
			  val= extract( first)
			if( val!== undefined)
				found[ i]= val
		}
		console.log(found)
		return found
	}
}

module.exports= factory
