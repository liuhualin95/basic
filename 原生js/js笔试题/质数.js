var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
//给定一个正整数，编写程序计算有多少对质数的和等于输入的这个正整数，并输出结果。输入值小于1000。如，输入为10，程序应该输出结果为2。（共有两对质数的和为10，分别为（5,5），（3,7））
rl.on('line', function(line){
	var n = +(line.trim());
	var arr=[2];
	for(var i=3;i<=n;i++){
		var flag = true;
		for(var j=2;j<i;j++){
			if(i%j==0){
				flag = false;
				break;
			}
		}
		if(flag)
			arr.push(i);
	}
	var count=0;
	for(var p=0;p<arr.length;p++){
		if(arr[p]+arr[p]==n) count++;
		for(var q=p+1;q<arr.length;q++){
			if(arr[p]+arr[q]==n)
				count++;
		}
	}
	console.log(count);
});