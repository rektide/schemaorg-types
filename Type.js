var ns= require("./ns")

function Type(name, store){
	if(store && store[ name]){
		return store[ name]
	}
	if(!(this instanceof Type)){
		return new Type(name, store)
	}
	Object.defineProperty(this, "@type", {value: new String(ns.class)})
	Object.defineProperty(this, "@id", {value: name})
	if(store){
		store[ name]= this
	}
	return this
}

module.exports= Type
