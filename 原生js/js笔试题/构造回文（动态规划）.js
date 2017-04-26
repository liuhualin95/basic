// [编程题] 构造回文
// 给定一个字符串s，你可以从中删除一些字符，使得剩下的串是一个回文串。如何删除才能使得回文串最长呢？
// 输出需要删除的字符个数。

// 输入描述:

// 输入数据有多组，每组包含一个字符串s，且保证:1<=s.length<=1000.
  


// 输出描述:

// 对于每组数据，输出一个整数，代表最少需要删除的字符个数。

// 输入例子:
// abcda
// google

// 输出例子:
// 2
// 2
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function(line){
    var str = "";
    str += line.trim();
    var str1 = str.split('').reverse().join("");
    var arr = [];
    for(var i=0;i<=str.length;i++){
        arr[i] = [];
        for(var j=0;j<=str1.length;j++){
            arr[i][j] = 0;
        }
    }
    for(var i=1;i<=str.length;i++){
        for(var j=1;j<=str1.length;j++){
            if(str[i-1]==str1[j-1]){
                arr[i][j] = arr[i-1][j-1] + 1;
            }else{
                arr[i][j] = Math.max(arr[i-1][j],arr[i][j-1]);
            }
        }
    }
    console.log(str.length - arr[str.length][str1.length]);
});