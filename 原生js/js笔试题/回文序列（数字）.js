// [编程题] 回文序列
// 如果一个数字序列逆置之后跟原序列是一样的就称这样的数字序列为回文序列。例如：
// {1, 2, 1}, {15, 78, 78, 15} , {112} 是回文序列, 
// {1, 2, 2}, {15, 78, 87, 51} ,{112, 2, 11} 不是回文序列。
// 现在给出一个数字序列，允许使用一种转换操作：
// 选择任意两个相邻的数，然后从序列移除这两个数，并用这两个数字的和插入到这两个数之前的位置(只插入一个和)。
// 现在对于所给序列要求出最少需要多少次操作可以将其变成回文序列。

// 输入描述:
// 输入为两行，第一行为序列长度n ( 1 ≤ n ≤ 50)
// 第二行为序列中的n个整数item[i]  (1 ≤ iteam[i] ≤ 1000)，以空格分隔。


// 输出描述:
// 输出一个数，表示最少需要的转换次数

// 输入例子:
// 4
// 1 1 1 3

// 输出例子:
// 2
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0;
rl.on('line',function(line){
    if(n==0)
        n = +(line.trim());
    else{
        var arr = line.trim().split(' ');
        for(var i=0;i<n;i++){
            arr[i] = +arr[i];
        }
        var j = 0;
        var k = n-1;
        var count = 0;
        while(j<k){
            if(arr[j]==arr[k]){
                j++;
                k--;
            }else if(arr[j]<arr[k]){
                arr.splice(j,2,arr[j]+arr[j+1]);
                k--;
                count++;
            }else if(arr[j]>arr[k]){
                arr.splice(k-1,2,arr[k-1]+arr[k]);
                k--;
                count++;
            }
        }
        console.log(count);
    }
});
rl.on('close',function(){
    process.exit(0);
})