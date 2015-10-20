var
  ns= {
	"label": "http://www.w3.org/2000/01/rdf-schema#label",
	"comment": "http://www.w3.org/2000/01/rdf-schema#comment",
	"subClassOf": "http://www.w3.org/2000/01/rdf-schema#subClassOf",
	"source": "http://purl.org/dc/terms/source"
  }

Object.defineProperty(ns, "id", {
	value: "@id"
})

Object.defineProperty(ns, "value", {
	value: "@value"
})

Object.defineProperty(ns, "type", {
	value: "@type"
})

Object.defineProperty(ns, "class", {
	value: "http://www.w3.org/2000/01/rdf-schema#Class"
})

module.exports= ns
