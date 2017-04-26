// 给定一个字符串，请你将字符串重新编码，将连续的字符替换成“连续出现的个数+字符”。比如字符串AAAABCCDAA会被编码成4A1B2C1D2A。 
// 输入描述:
// 每个测试输入包含1个测试用例
// 每个测试用例输入只有一行字符串，字符串只包括大写英文字母，长度不超过10000。
// 输出描述:
// 输出编码后的字符串
// 输入例子:
// AAAABCCDAA
// 输出例子:
// 4A1B2C1D2A
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
process.stdin.on('data',function(data){
    input += data.trim();
})
process.stdin.on('end',function(){
    //str = input.split('\n')[0];
    var newStr = "";
    var count = 1;
    for(var i=0;i<input.length;i++){
        if(input[i]==input[i+1])
            count+=1;
        else{
            newStr+=count+input[i];
            count=1;
        }
    }
    console.log(newStr);
})