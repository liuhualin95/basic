core_deletedIds = [];
core_indexOf = core_deletedIds.indexOf;
//这里就相当于core_indexOf = Array.prototype.indexOf

$.inArray = function(ele, arr, i){
	var len;
	if(arr){
		if(core_indexOf)//如果支持原生indexOf方法的话直接调用就可以
			return core_indexOf.call(arr, ele, i);//记得return
		len = arr.length;
		//然后判断i是否存在
		i = i ? i<0? Math.max(0, len+i):i : 0;
		for(;i<len;i++){
			//jQuery这里的(i in arr)判断是为了跳过稀疏数组中的元素
	      	//例如 var arr = []; arr[2] = 1;
	      	//此时 arr == [undefined, undefined, 1]
	     	//结果是 => (0 in arr == false) (1 in arr == false) (2 in arr == true)
			if(i in arr&&arr[i]===ele){
				return i;
			}
		}
	}
	return -1;
}

// i in arr为什么需要的原因如下
// var arr = [];
// a[1] = 1;
// 输出是：
// arr == [undefined, 1]
// 0 in arr == false;
// arr.indexOf(undefined) == -1;   //应该输出-1
// arr[0] == undefined;   //不加i in arr则会return 0