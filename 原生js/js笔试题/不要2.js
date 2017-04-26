// 二货小易有一个W*H的网格盒子，网格的行编号为0~H-1，网格的列编号为0~W-1。每个格子至多可以放一块蛋糕，任意两块蛋糕的欧几里得距离不能等于2。
// 对于两个格子坐标(x1,y1),(x2,y2)的欧几里得距离为:
// ( (x1-x2) * (x1-x2) + (y1-y2) * (y1-y2) ) 的算术平方根
// 小易想知道最多可以放多少块蛋糕在网格盒子里。 
// 输入描述:
// 每组数组包含网格长宽W,H，用空格分割.(1 ≤ W、H ≤ 1000)


// 输出描述:
// 输出一个最多可以放的蛋糕数

// 输入例子:
// 3 2

// 输出例子:
// 4
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line',function(line){
    var WH = line.trim().split(' ');
    var W = parseInt(WH[0]);
    var H = parseInt(WH[1]);
    var first = (Math.floor(W/4))*2 + (W%4<2 ? W%4:2);
    var third = (Math.floor((W-2)/4))*2 + (((W-2)%4)<2 ? (W-2)%4:2);
    var result = (Math.floor(H/4))*(first+third)*2;
    if(H%4==1)
        result += first;
    else if(H%4==2)
        result += first*2;
    else if(H%4==3)
        result += first*2+third;
    console.log(result);
})
rl.on('close',function(){
    process.exit(0);
})
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.on('line',function(line){
//     var WH = line.trim().split(' ');
//     var W = parseInt(WH[0]);
//     var H = parseInt(WH[1]);
//     var result;
//     if(W%4==0||H%4==0)
//         result = W*H/2;
//     else if(W%2==0&&H%2==0)
//         result = (W*H/4+1)*2;
//     else
//         result = Math.floor(W*H/2)+1;
//     console.log(result);
// })
// rl.on('close',function(){
//     process.exit(0);
// })