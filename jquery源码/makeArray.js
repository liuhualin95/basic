$.makeArray = function(arr, result){
	var res = result || [];
	if(arr != null){
		if(isArraylike(Object(arr))){//是类数组对象的时候
			$.merge(res,
				typeof arr === "string" ? //判断是否为字符串
				[arr] : arr
			);
		}else{//不是类数组对象，放到数组末尾返回
			core_push.call(res, arr); //相当于res.push(arr)；
		}
	}
	return res;
}