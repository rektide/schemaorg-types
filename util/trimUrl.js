function trimName( klass){
	if( klass&& klass.startsWith( "http://")|| klass.startsWith("https://")){
		var
		  nextSlash= klass.indexOf( "/", 8)
		klass= klass.substring( nextSlash+ 1)
	}
	return klass
}

module.exports= trimName
