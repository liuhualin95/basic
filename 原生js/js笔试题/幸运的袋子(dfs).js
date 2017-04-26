// 一个袋子里面有n个球，每个球上面都有一个号码(拥有相同号码的球是无区别的)。如果一个袋子是幸运的当且仅当所有球的号码的和大于所有球的号码的积。
// 例如：如果袋子里面的球的号码是{1, 1, 2, 3}，这个袋子就是幸运的，因为1 + 1 + 2 + 3 > 1 * 1 * 2 * 3
// 你可以适当从袋子里移除一些球(可以移除0个,但是别移除完)，要使移除后的袋子是幸运的。现在让你编程计算一下你可以获得的多少种不同的幸运的袋子。 
// 输入描述:
// 第一行输入一个正整数n(n ≤ 1000)
// 第二行为n个数正整数xi(xi ≤ 1000)


// 输出描述:
// 输出可以产生的幸运的袋子数

// 输入例子:
// 3
// 1 1 1

// 输出例子:
// 2
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var n = 0;
var input = [];
var sum,index,multi;
var getNum = function(arr,index,sum,multi){
    var count = 0;
    for(var i=index;i<n;i++){
        sum+=arr[i];
        multi*=arr[i];
        if(sum>multi)
            count+=1+getNum(arr,i+1,sum,multi);
        else if(arr[i]==1)
            count+=getNum(arr,i+1,sum,multi);
        else
            break;
        sum-=arr[i];
        multi/=arr[i];
        while(i<n-1 && arr[i]==arr[i+1]){
            i++;
        }
    }
    return count;
}
rl.on('line',function(line){
    if(n==0)
        n = parseInt(line.trim());
    else{
        input.push(line.trim());
        if(input.length==1){
            var arr = input[0].split(" ");
            for(var k=0;k<n;k++){
                arr[k]=parseInt(arr[k]);
            }
            arr.sort(function(a,b){
                return a-b;
            });
            var result = getNum(arr,0,0,1);
            console.log(result);
        }
    }
})
rl.on('close',function(){
    process.exit(0);
})