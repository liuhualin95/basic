$.merge = function(first, second){
	var i = first.length,
		j = second.length,
		k = 0;
	if(typeof j==="number"){
		for(;k<j;k++){
			first[i++]=second[k];
		}
	}else{
		while(second[k]!==undefined){
			first[i++]=second[k++];
		}
	}
	first.length = i;
	return first;
}