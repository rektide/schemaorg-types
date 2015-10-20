"use strict"

var
  ns= require( "./ns")

function tryIdAndValue( entry){
	var
	  id= entry[ ns.id]
	if( id){
		return id
	}
	var
	  val= entry[ ns.value]
	if( val){
		return val
	}
}

function extract(o, ns, forceArray){
	var
	  entries= o&& o[ ns]
	if( !entries|| entries.length=== 0){
		return
	}
	if( entries.length> 1|| forceArray){
		return entries.map( tryIdAndValue)
	}else if( entries.length== 1){
		return tryIdAndValue( entries[0])
	}
}

module.exports= extract
