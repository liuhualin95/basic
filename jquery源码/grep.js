//arr为传入要过滤的数组,callback过滤的函数,inv为boolean值，默认为false
$.grep = function(arr, callback, inv){
	var res=[],resVal,i=0,len=arr.length;
	inv = !!inv;
	for(;i<len;i++){
		resVal = !!callback(arr[i], i);//这里先value，后key,!!转成布尔型
		if(resVal !== inv)
			res.push(arr[i]);
	}
	return res;
}

// 小例子
// $.grep( [0,1,2], function(n,i){
//   return n <= 0;
// });
// //结果是：[0] 
 
// $.grep( [0,1,2], function(n,i){
//   return n <= 0;
// }, true);
// //结果是：[1, 2]