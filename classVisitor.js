var
  klass= "http://www.w3.org/2000/01/rdf-schema#Class",
  ns= {
	"label": "http://www.w3.org/2000/01/rdf-schema#label",
	"comment": "http://www.w3.org/2000/01/rdf-schema#comment",
	"subClassOf": "http://www.w3.org/2000/01/rdf-schema#subClassOf",
	"source": "http://purl.org/dc/terms/source"
  }

function key( o){
	return o.label
}

function factory( o){
	if( !o){
		throw new Error( "Require an 'o'")
	}
	return function classVisitor( entry){
		if( entry[ "@type"].indexOf( klass)=== -1){
			return
		}
		var
		  found= {
			"@id": entry["@id"],
			label: entry[ ns.label][ 0][ "@value"],
			comment: entry[ ns.comment][ 0][ "@value"],
			subClassOf: null,
			source: null
		  },
		  subClassOf= entry[ ns.subClassOf],
		  source= entry[ ns.source],
		  pk= key( found)
		if( subClassOf){
			found.subClassOf= subClassOf[ 0][ "@id"]
		}
		if( source){
			found.source= source[ 0][ "@id"]
		}
		o[ pk]= found
		return found
	}
}

module.exports= factory
