"use strict"

var
  ns= require( "./ns"),
  arrayOrItemMap= require("./util/arrayOrItemMap"),
  trimUrl= require( "./util/trimUrl"),
  extract= require( "./extract-id-or-value"),
  Type= require("./Type"),
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
		var klass= Type( key, classStore)
		for(var i in ns){
			var
			  n= ns[ i],
			  val= extract( entry, n)
			if( val!== undefined){
				klass[ "@type"][ i]= val
			}
		}
		var subClass= klass[ ns.subClassOf]
		if( klass[ ns.subClassOf]){
			klass[ ns.subClassOf]= arrayOrItemMap( klass[ns.subClassOf], trimUrl)
		}

		return klass
	}
}

module.exports= factory
