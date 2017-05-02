core_deletedIds = [];
core_concat = core_deletedIds.concat;
$.map = function(obj, callback, args){
	var isArray = isArraylike(obj), value,
		i = 0, len = obj.length, res = [];
	if(isArray){
		for(;i<len;i++){
			value = callback(obj[i], i, args);//这里直接调用callback
			if(value != null){
				res[res.length] = value;//返回值不是null添加到新数组里
				// res.push(obj[i]); 这样写似乎也没问题吧，上面还要在算一遍res.length
			}
		}
	}else{
		for(i in obj){
			value = callback(obj[i], i, args);//这里直接调用callback
			if(value != null){
				res[res.length] = value;
			}
		}
	}
	return core_concat.apply([], res);
	//这里apply可是有讲究的，不能用call
	// $.map( [0,1,2], function(n){
	//   return [ n, n + 1 ];
	// });
	//输出：[0, 1, 1, 2, 2, 3]
	//如果是return res的话，输出将会是：[[0,1], [1,2], [2,3]]
}
//不明白的话看这里
var a = [], res = [];
res[0] = [0,1];
res[1] = [1,2];
res[2] = [2,3];
console.log(a.concat(res));		//[[0,1], [1,2], [2,3]]
console.log(Array.prototype.concat.call(a,res));		//[[0,1], [1,2], [2,3]]
console.log(Array.prototype.concat.call(a,res[0],res[1],res[2]));		//[0, 1, 1, 2, 2, 3]
console.log(Array.prototype.concat.apply(a,res));		//[0, 1, 1, 2, 2, 3]
console.log($.map( [0,1,2], function(n){		//[0, 1, 1, 2, 2, 3]
  return [ n, n + 1 ];
}));