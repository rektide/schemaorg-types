var
  ns= require( "./ns")

function extract(entry){
	entry= entry&& entry[0]
	if( !entry){
		return
	}
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

module.exports= extract
