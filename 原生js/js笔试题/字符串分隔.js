//连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
//长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
//输入描述:   连续输入字符串(输入2次,每个字符串长度小于100)
//输出描述:   输出到长度为8的新字符串数组
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
process.stdin.on('data',function(data){
    input += data.trim();
})
process.stdin.on('end',function(){
    row_arr = input.split('\n');
    line1 = row_arr[0].trim();
    line2 = row_arr[1].trim();
    var hh = function(line){
        var len = line.length;
        var arr = [];
        if(len<=8){
            for(var i=0;i<8-len;i++){
                line+='0';
            }
            arr.push(line);
        }else{
            for(var j=0;j<line.length;j+=8){
            	if(len>8){
                    var sub = line.substr(j,8);
                    arr.push(sub);
                    len = len - 8;
                }else{
                    rest = line.substr(-len);
                    for(var k=0;k<8-len;k++){
                        rest+='0';
                    }
                    arr.push(rest);
                }
        	}
        }
        return arr;
    }
    var result = hh(line1).concat(hh(line2));
    for(var i=0;i<result.length;i++)
        console.log(result[i]);
})