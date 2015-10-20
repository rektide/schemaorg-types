var
  schemaorg,
  classVisitor,
  propertyVisitor,
  o

function load( schema){	
	schema= schema|| schemaorg|| (schemaorg= require( "schemaorg-jsonld"))
	classVisitor= classVisitor|| (classVisitor= require( "./classVisitor"))
	propertyVisitor= propertyVisitor|| (propertyVisitor= require( "./propertyVisitor"))
	var
	  o= {
		class: {},
		property: {}
	  },
	  cv= classVisitor( o.class),
	  pv= propertyVisitor( o.property, o.class)
	for( entry of schema){
		cv( entry)
		pv( entry)
	}
	return o
}

Object.defineProperty(module.exports, "class", {
	get: function(){
		if( !o){
			o= load()
		}
		return o.class
	},
	enumerable: true
})

Object.defineProperty(module.exports, "property", {
	get: function(){
		if( !o){
			o= load()
		}
		return o.property
	},
	enumerable: true
})

Object.defineProperty(module.exports, "classVisitor", {
	get: function(){
		return classVisitor|| (classVisitor= require( "./classVisitor"))
	},
	enumerable: true
})
