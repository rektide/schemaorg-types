function arrayOrItemMap(o, map){
	if( o.push&& o.splice){
		return o.map(map)
	}else{
		return map(o)
	}
}

module.exports= arrayOrItemMap
