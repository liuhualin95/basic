// \uFEFF是utf8的字节序标记，\xA0是全角空格
rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
core_version = "1.9.0";
core_trim = core_version.trim;//相当于String.prototype.trim

//core_trim可以解析全角空格的话就使用高级浏览器所支持的原生String的trim方法
//不支持则使用正则的方法
$.trim = core_trim && !core_trim.call("\uFEFF\xA0") ?
	function(text){
		return text==null ? "":core_trim.call(text);
	} :
	function(text){
		return text==null ? "":(text+"").replace(rtrim, "");
	}