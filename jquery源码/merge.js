$.merge = function(first, second){//这里最好还是传入两个数组
	var i = first.length,
		j = second.length,
		k = 0;
	if(typeof j === "number"){//是数组的话
		for(;k<j;k++){
			first[i++] = second[k];
		}
	}else{
		//second={} second[0]=1 second[1]=2
		while(second[k]!==undefined){
			first[i++] = second[k++];
		}
	}
	first.length = i;
	return first;//会修改第一个数组
}