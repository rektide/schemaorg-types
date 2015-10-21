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

function extract(o, ns){
	var
	  entries= o&& o[ ns]
	if( !entries){
		return
	}
	if( entries.length> 1){
		return entries.map( tryIdAndValue)
	}else if( entries.length== 1){
		return tryIdAndValue( entries[0])
	}
}

module.exports= extract
