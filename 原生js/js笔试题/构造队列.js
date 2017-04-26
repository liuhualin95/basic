// 构造队列
// 小明同学把1到n这n个数字按照一定的顺序放入了一个队列Q中。现在他对队列Q执行了如下程序：
// while(!Q.empty())              //队列不空，执行循环

// {

//     int x=Q.front();            //取出当前队头的值x

//     Q.pop();                 //弹出当前队头

//     Q.push(x);               //把x放入队尾

//     x = Q.front();              //取出这时候队头的值

//     printf("%d\n",x);          //输出x

//     Q.pop();                 //弹出这时候的队头

// }

// 做取出队头的值操作的时候，并不弹出当前队头。
// 小明同学发现，这段程序恰好按顺序输出了1,2,3,...,n。现在小明想让你构造出原始的队列，你能做到吗？[注：原题样例第三行5有错，应该为3，以下已修正] 
// 输入描述:
// 第一行一个整数T（T ≤ 100）表示数据组数，每组数据输入一个数n（1 ≤ n ≤ 100000），输入的所有n之和不超过200000。


// 输出描述:
// 对于每组数据，输出一行，表示原始的队列。数字之间用一个空格隔开，不要在行末输出多余的空格.

// 输入例子:
// 4
// 1
// 2
// 3
// 10

// 输出例子:
// 1
// 2 1
// 2 1 3
// 8 1 6 2 10 3 7 4 9 5
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var T = 0;
var input = [];
var getArr = function(){
    var arrr = [];
    for(var i=0;i<T;i++){
        var n = parseInt(input[i]);
        var res = [];
        for(var j=0;j<n;j++){
            res[j] = 0;
        }
        var k = 1;
        var l = 0;
        var id = 0;
        while(k<=n){
            l = id;
            while(res[l%n]!=0){//第一个为空的位置
                l++;
            }
            while(res[(l+1)%n]!=0){//第二个为空的位置
                l++;
            }
            id = (l+1)%n;
            res[id] = k;//填充第二个位置
            k++;
        }
        arrr.push(res.join(" "));
    }
    return arrr;
}
rl.on('line',function(line){
    if(T == 0){
        T = parseInt(line.trim());
    }else{
        input.push(line.trim());
        if(T == input.length){
            var result = getArr();
            for(var i=0;i<result.length;i++)
                console.log(result[i]);
        }
    }
})
rl.on('close',function(){
    process.exit(0);
})