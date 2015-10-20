var
  ns= {
	label: "http://www.w3.org/2000/01/rdf-schema#label",
	comment: "http://www.w3.org/2000/01/rdf-schema#comment",
	subClassOf: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
	source: "http://purl.org/dc/terms/source",
	domain: new String("http://schema.org/domainIncludes"),
	range: new String("http://schema.org/rangeIncludes"),
	subPropertyOf: "http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
  }


ns.domain.forceArray= true
ns.range.forceArray= true

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

Object.defineProperty(ns, "property", {
	value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
})

module.exports= ns
