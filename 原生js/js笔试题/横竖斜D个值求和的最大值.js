//在一个N*N的数组中寻找所有横，竖，左上到右下，右上到左下，四种方向的直线连续D个数字的和里面最大的值 
// 输入描述:
// 每个测试输入包含1个测试用例，第一行包括两个整数 N 和 D :
// 3 <= N <= 100
// 1 <= D <= N
// 接下来有N行，每行N个数字d:
// 0 <= d <= 100

// 输出描述:
// 输出一个整数，表示找到的和的最大值

// 输入例子:
// 4 2
// 87 98 79 61
// 10 27 95 70
// 20 64 73 29
// 71 65 15 0

// 输出例子:
// 193
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
process.stdin.on('data',function(data){
    input += data.trim();
})
process.stdin.on('end',function(){
    var arr = input.split('\n');
    var firstRow = arr.splice(0,1);
    var lenD = firstRow[0].split(' ');
    var len = parseInt(lenD[0]);
    var D = parseInt(lenD[1]);
    //创建二维数组，并转化为整数
    for(var i=0;i<len;i++){
        arr[i] = arr[i].split(' ');
        for(var j=0;j<len;j++){
            arr[i][j] = parseInt(arr[i][j]);
        }
    }
    var sumArr = [];
    //i为行 j为每行有多少种情况
    for(var i=0;i<len;i++){
        for(var j=0;j<=len-D;j++){
            var sum=0;
            //连续D个值求和
            for(var k=j;k<D+j;k++){
                sum+=arr[i][k];
            }
            sumArr.push(sum);
        }
    }
    //i为列 j为每列有多少种情况
    for(var i=0;i<len;i++){
        for(var j=0;j<=len-D;j++){
            var sum=0;
            //连续D个值求和
            for(var k=j;k<D+j;k++){
                sum+=arr[k][i];
            }
            sumArr.push(sum);
        }
    }
    //左上到右下斜 (i,j)为左上点坐标
    for(var i=0;i<=len-D;i++){
        for(var j=0;j<=len-D;j++){
            var sum=0;
            //连续D个值求和
            for(var k=0,m=i,n=j;k<D;k++,m++,n++){
                sum+=arr[m][n];
            }
            sumArr.push(sum);
        }
    }
    //右上到左下斜 (i,j)为右上点坐标
    for(var i=0;i<=len-D;i++){
        for(var j=len-1;j>=D-1;j--){
            var sum=0;
            //连续D个值求和
            for(var k=0,m=i,n=j;k<D;k++,m++,n--){
                sum+=arr[m][n];
            }
            sumArr.push(sum);
        }
    }
    sumArr.sort(function(a,b){
        return a-b;
    })
    console.log(sumArr[sumArr.length-1]);
})