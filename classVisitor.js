"use strict"

var
  ns= require( "./ns"),
  arrayOrItemMap= require("./util/arrayOrItemMap"),
  trimUrl= require( "./util/trimUrl"),
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
		  klass= classStore[ key]|| (classStore[ key]= {})
		for(var i in ns){
			var
			  n= ns[ i],
			  val= extract( entry, n)
			if( val!== undefined){
				klass[ i]= val
			}
		}
		if( klass.subClassOf){
			klass.subClassOf= arrayOrItemMap( klass.subClassOf, trimUrl)
		}

		return klass
	}
}

module.exports= factory
