$.extend=$.fn.extend=function(){
	var target = arguments[0]||{},
	i=1,deep=false,length=arguments.length,//deep默认为false，即不需要深克隆
	options,src,copy,copyIsArray;
	//判断是否为深克隆
	if(typeof target === "boolean"){
		deep = target;
		target = arguments[1]||{};
		i=2;
	}
	//判断target是否为对象
	if(!jQuery.isFunction(target) && typeof target !== 'object'){
		target = {};
	}
	//判断是不是$.extend(dest)的情况(扩展jquery类或者jquery实例对象的工具方法)
	if(length === i){
		target = this;
		--i;
	}
	//从i开始遍历参数的每一项
	for(;i<length;i++){
		//不为空继续执行，否则跳过
		if((options=arguments[i])!=null){
			//遍历options指代对象的每一个属性
			for(name in options){
				src = target[name];
				copy = options[name];
				//防止成环, 避免循环引用 例如$.extend(true, target, {'target':target});
				if(copy===target)
					continue;
				//isPlainObject只能判断{}和new Object(),这里只判断{}和[],copy值为匿名函数时不在这里处理
				if(deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray=jQuery.isArray(copy)) )){
					if(copyIsArray)
						clone = src&&jQuery.isArray(src)? src:[];
					else
						clone = src&&jQuery.isPlainObject(src)? src:{};
					target[name] = $.extend(deep, clone, copy);//递归继续深克隆,看下边例子的location属性就理解了
					//var result=$.extend( true, {}, 
					//     { name: "John", location: {city: "Boston",county:"USA"} }, 
					//     { last: "Resig", location: {state: "MA",county:"China"} } 
					// );
					//结果是：
					//var result={
					//     name:"John",last:"Resig", location:{city:"Boston",state:"MA",county:"China"}
					// }
				}else if(copy!==undefined){//undefined属性不会被复制到target上
					target[name] = copy;
				}
			}
		}
	}
	return target;
}
// 附上一个关于arr的例子
// var result=$.extend({age: [1,2,3]}, {age: [4,5]});
// console.log(result.age);//[4,5]

// var result=$.extend(true, {age: [1,2,3]}, {age: [4,5]});
// console.log(result.age);//[4,5,3]