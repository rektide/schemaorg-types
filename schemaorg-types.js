var
  schemaorg,
  classVisitor,
  o

function load( schema){	
	schema= schema|| schemaorg|| (schemaorg= require( "schemaorg-jsonld"))
	classVisitor= classVisitor|| (classVisitor= require( "./classVisitor"))
	var
	  o= {
		classes: {}
	  },
	  cv= classVisitor( o.classes)
	for( entry of schema){
		cv( entry)
	}
	return o
}

Object.defineProperty(module.exports, "classes", {
	get: function(){
		if( !o){
			o= load()
		}
		return o.classes
	},
	enumerable: true
})

Object.defineProperty(module.exports, "classVisitor", {
	get: function(){
		return classVisitor|| (classVisitor= require( "./classVisitor"))
	},
	enumerable: true
})
