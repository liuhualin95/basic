// 三维空间中有N个点，每个点可能是三种颜色的其中之一，三种颜色分别是红绿蓝，分别用'R', 'G', 'B'表示。
// 现在要找出三个点，并组成一个三角形，使得这个三角形的面积最大。
// 但是三角形必须满足：三个点的颜色要么全部相同，要么全部不同。
// 输入描述:
// 首先输入一个正整数N三维坐标系内的点的个数.(N <= 50)

// 接下来N行，每一行输入 c x y z，c为'R', 'G', 'B' 的其中一个。x，y，z是该点的坐标。(坐标均是0到999之间的整数)


// 输出描述:
// 输出一个数表示最大的三角形面积，保留5位小数。

// 输入例子1:
// 5
// R 0 0 0
// R 0 4 0
// R 0 0 3
// G 92 14 7
// G 12 16 8

// 输出例子1:
// 6.00000

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 0;
var arr = [],
    arr1 = [],
    arr2 = [],
    arr3 = [],
    res = [],
    temp = [];
var a, b, c, x, y, z, p;
var max = 0;
rl.on('line',function(line){
    if (n == 0) {
        n = +(line.trim());
    } else if (arr.length < n) {
        var tmp = line.trim().split(' ');
        arr.push(tmp);
        res = tmp.slice(1);
        res = res.map(function (val) {
            return +val;
        });
        if (tmp[0] == 'R') {
            arr1.push(res);
        } else if (tmp[0] == 'G') {
            arr2.push(res);
        } else if (tmp[0] == 'B') {
            arr3.push(res);
        }
        if (arr.length == n) {
            findArr(arr1, temp, 0);
            findArr(arr2, temp, 0);
            findArr(arr3, temp, 0);
            for (var i=0; i<arr1.length; i++) {
                for (var j=0; j<arr2.length; j++) {
                    for (var k=0; k<arr3.length; k++) {
                        x = arr1[i];
                        y = arr2[j];
                        z = arr3[k];
                        getMax(x, y, z);
                    }
                }
            }
            console.log(max.toFixed(5));
        }
    }
});
function findArr (arr, temp, j) {
    if (temp.length == 3) {
        var tmpArr = temp.concat();
        x = tmpArr[0];
        y = tmpArr[1];
        z = tmpArr[2];
        getMax(x, y, z);
    } else {
        for (var i=j; i<arr.length; i++) {
            var tmp1 = arr.splice(i, 1)[0];
            temp.push(tmp1);
            findArr(arr, temp, i);
            temp.pop();
            arr.splice(i, 0, tmp1);
        }
    }
}
function getMax (x, y, z) {
    a = Math.sqrt((x[0]-y[0])*(x[0]-y[0]) + (x[1]-y[1])*(x[1]-y[1]) + (x[2]-y[2])*(x[2]-y[2]));
    b = Math.sqrt((x[0]-z[0])*(x[0]-z[0]) + (x[1]-z[1])*(x[1]-z[1]) + (x[2]-z[2])*(x[2]-z[2]));
    c = Math.sqrt((y[0]-z[0])*(y[0]-z[0]) + (y[1]-z[1])*(y[1]-z[1]) + (y[2]-z[2])*(y[2]-z[2]));
    p = (a+b+c)/2;
    var size = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    max = size > max ? size : max;
}