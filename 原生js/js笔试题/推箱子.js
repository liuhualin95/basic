// 大家一定玩过“推箱子”这个经典的游戏。具体规则就是在一个N*M的地图上，有1个玩家、1个箱子、1个目的地以及若干障碍，其余是空地。玩家可以往上下左右4个方向移动，但是不能移动出地图或者移动到障碍里去。如果往这个方向移动推到了箱子，箱子也会按这个方向移动一格，当然，箱子也不能被推出地图或推到障碍里。当箱子被推到目的地以后，游戏目标达成。现在告诉你游戏开始是初始的地图布局，请你求出玩家最少需要移动多少步才能够将游戏目标达成。 
// 输入描述:
// 每个测试输入包含1个测试用例
// 第一行输入两个数字N，M表示地图的大小。其中0<N，M<=8。
// 接下来有N行，每行包含M个字符表示该行地图。其中 . 表示空地、X表示玩家、*表示箱子、#表示障碍、@表示目的地。
// 每个地图必定包含1个玩家、1个箱子、1个目的地。


// 输出描述:
// 输出一个数字表示玩家最少需要移动多少步才能将游戏目标达成。当无论如何达成不了的时候，输出-1。
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
process.stdin.on('data',function(data){
    input += data.trim();
})
process.stdin.on('end',function(){
    var arr = input.split('\n');
    var firstRow = arr.splice(0,1);
    var nm = firstRow[0].split(' ');
    var n = parseInt(nm[0]);
    var m = parseInt(nm[1]);
    var px,py,bx,by,ex,ey;
    var bound = function(x,y){
        if(x<0||y<0||x>=n||y>=m||arr[x][y]=="#")
            return true;
        else
            return false;
    }
    var bfs = function(px,py,bx,by,ex,ey){
        var state=[];
        //创建一个四维数组
        for(var i=0;i<8;i++){
            state[i]=[];
            for(var j=0;j<8;j++){
                state[i][j]=[];
                for(var k=0;k<8;k++){
                    state[i][j][k]=[];
                    for(var l=0;l<8;l++){
                        state[i][j][k][l]=0;
                    }
                }
            }
        }
        state[px][py][bx][by] = 1;//假设当前状态步数为1
        var moves = [[0,1],[0,-1],[-1,0],[1,0]];//上下左右
        var queue=[{
            px: px,
            py: py,
            bx: bx,
            by: by
        }];//创建一个队列 用于bfs
        while(queue.length>0){
            var temp = queue.shift();
            //箱子位置与目的地位置重合 返回步数
            if(temp.bx==ex&&temp.by==ey)
                return state[temp.px][temp.py][temp.bx][temp.by]-1;
            for(var i=0;i<4;i++){
                //更新人的位置
                var t_px = temp.px + moves[i][0];
                var t_py = temp.py + moves[i][1];
                //人出界
                if(bound(t_px,t_py))
                    continue;
                //人推动箱子
                if(t_px==temp.bx&&t_py==temp.by){
                    //更新箱子位置
                    var t_bx = temp.bx + moves[i][0];
                    var t_by = temp.by + moves[i][1];
                    //箱子出界
                    if(bound(t_bx,t_by))
                        continue;
                    //更新后位置状态出现过
                    if(state[t_px][t_py][t_bx][t_by]>0)
                        continue;
                    state[t_px][t_py][t_bx][t_by] = state[temp.px][temp.py][temp.bx][temp.by] + 1;
                    queue.push({
                        px: t_px,
                        py: t_py,
                        bx: t_bx,
                        by: t_by
                    });
                }else{//人没有推动箱子
                    if(state[t_px][t_py][temp.bx][temp.by]>0)
                        continue;
                    state[t_px][t_py][temp.bx][temp.by] = state[temp.px][temp.py][temp.bx][temp.by] + 1;
                    queue.push({
                        px: t_px,
                        py: t_py,
                        bx: temp.bx,
                        by: temp.by
                    });
                }
            }
        }
        return -1;
    }
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            if(arr[i][j]=="X"){//人的位置
                px=i;
                py=j;
            }else if(arr[i][j]=="*"){//箱子位置
                bx=i;
                by=j;
            }else if(arr[i][j]=="@"){//目的地位置
                ex=i;
                ey=j;
            }
        }
    }
    
    var result = bfs(px,py,bx,by,ex,ey);
    console.log(result);
})