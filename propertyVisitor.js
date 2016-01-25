"use strict"

var
  ns= require( "./ns"),
  arrayOrItemMap= require( "./util/arrayOrItemMap"),
  trimUrl= require( "./util/trimUrl"),
  extract= require( "./extract-id-or-value"),
  Type= require("./Type"),
  keySlot= "label"

function factory( propertyStore, classStore){
	if( !classStore){
		throw new Error( "Require a 'classStore'")
	}
	if( !propertyStore){
		throw new Error( "Require a 'propertyStore'")
	}

	return function propertyVisitor( entry){
		if( entry[ ns.type].indexOf( ns.property)=== -1){
			return
		}
		var
		  key= extract( entry, ns[ keySlot])
		if( !key){
			return
		}

		var
		  property= propertyStore[ key]|| (propertyStore[ key]= {})
		for( var i in ns){
			var
			  n= ns[ i],
			  val= extract( entry, n, n.forceArray)
			if( val!== undefined){
				property[ i]= val
			}
		}
	

		for( var i= 0; i< (property.domain&& property.domain.length); ++i){
			var
			  domain= property.domain[ i],
			  name= trimUrl( domain),
			  klass= Type( name, classStore)
			klass[ key]= property.range
		}
		for( var i= 0; i< (property.range&& property.range.length); ++i){
			var
			  range= property.range[ i],
			  name= trimUrl( range),
			  klass= Type( name, classStore),
			  use= klass[ "@type"].use|| (klass[ "@type"].use= {})

			var uses= use[ key]
			if(!uses){
				use[ key]= property.domain
			}else{
				for(var j in property.domain){
					var user= property.domain[j]
					if(uses.indexOf(user) === -1){
						uses.push(user)
					}
				}
				use[ key]= uses
			}
		}
		return property
	}
}

module.exports= factory
