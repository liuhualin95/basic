// 写出一个程序，接受一个十六进制的数值字符串，输出该数值的十进制字符串。（多组同时输入 ）
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function(line){
    var str = line.slice(2);
    console.log(parseInt(str,16));
})
rl.on('close',function(){
    process.exit(0);
})
// //十进制转其他  
// var x=110;  
// alert(x);  
// alert(x.toString(8));   
// alert(x.toString(32));  
// alert(x.toString(16));  
// //其他转十进制  
// var x='110';  
// alert(parseInt(x,2));  
// alert(parseInt(x,8));  
// alert(parseInt(x,16));  
// //其他转其他  
// //先用parseInt转成十进制再用toString转到目标进制  
// alert(String.fromCharCode(parseInt(141,8)))  
// alert(parseInt('ff',16).toString(2));  