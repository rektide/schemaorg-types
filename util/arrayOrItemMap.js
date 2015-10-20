function arrayOrItemMap(o, map){
	if( o.push&& o.splice){
		console.log(o, o.map(map))
		return o.map(map)
	}else{
		return map(o)
	}
}

module.exports= arrayOrItemMap
