"use strict"

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
		  key= extract( entry, ns[ keySlot])
		if( !key){
			return
		}
		var
		  found= classStore[ key]|| (classStore[ key]= {})
		for(var i in ns){
			var
			  n= ns[ i],
			  val= extract( entry, n)
			if( val!== undefined){
				found[ i]= val
			}
		}
		return found
	}
}

module.exports= factory
