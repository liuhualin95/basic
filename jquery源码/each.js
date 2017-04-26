//obj是数组或者object{}
$.each = function(obj, callback, args){
	var isArray = isArraylike(obj),//判断是不是数组
		i = 0, length = obj.length, value;
	if(args){
		if(isArray){
			for(;i<length;i++){
				value = callback.apply(obj[i], args);
				if(value === false)//callback的返回值有可能会中断循环
					break;
			}
		}else{
			for(i in obj){
				value = callback.apply(obj[i], args);
				if(value === false)
					break;
			}
		}
	}else{
		if(isArray){
			for(;i<length;i++){
				value = callback.call(obj[i], i, obj[i]);//相当于callback(i, obj[i]),this指向obj[i]
				if(value === false)
					break;
			}
		}else{
			for(i in obj){
				value = callback.call(obj[i], i, obj[i]);
				if(value === false)
					break;
			}
		}
	}
	return obj;
}