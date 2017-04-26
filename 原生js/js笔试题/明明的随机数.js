// 明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作。
 
 
// Input Param 
//      n               输入随机数的个数     
//  inputArray      n个随机整数组成的数组 
     
// Return Value
//      OutputArray    输出处理后的随机整数
 

// 注：测试用例保证输入参数的正确性，答题者无需验证。测试用例不止一组。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0;
var inputs = [];
var getArr = function(){
    var result = [];
    for(var i=0;i<n;i++){
    if(result.indexOf(inputs[i])==-1)
        result.push(inputs[i]);
    }
    result.sort(function(a,b){
        return a-b;
    })
    return result;
}
rl.on('line',function(line){
    if(n==0){
        n = parseInt(line);
    }else{
        inputs.push(parseInt(line));
        if(n == inputs.length){
            var res = getArr();
            for(var j=0;j<res.length;j++){
                console.log(res[j]);
            }
            //重新初始化变量 估计是因为多组测试数据 有毒大概
            n=0;
            inputs=[];
        }
    }
})
rl.on('close',function(){
    process.exit(0);
})