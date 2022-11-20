//设置基础数值
var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
player1.style.backgroundColor = "#9cd1ef";
var now = 1;

//判断占用初始化
var tds = document.querySelectorAll("td");
var used;
var indext;
function begin(){
    indext = 0;
    for(var i=0;i<9;i++){
        tds[i].used = 0;
    }
}
begin();

//设置下棋按键
for(var i=0;i<9;i++){
    tds[i].onclick=set;
}

function set(){
    if(this.used == 0){
        if(now == 1){
            //alert("p1");
            player1.style.backgroundColor="#fff";
            player2.style.backgroundColor="#9cd1ef";
            now = 2;
            var circle = document.createElement("div");
            circle.className = "circle";
            circle.innerHTML = "O";
            this.appendChild(circle);
            this.used = 1;
            indext++;
            //alert(indext);
            victory(1);
        }else{
            //alert("p2");
            player2.style.backgroundColor="#fff";
            player1.style.backgroundColor="#9cd1ef";
            now = 1;
            var fork = document.createElement("div");
            fork.className = "fork";
            fork.innerHTML = "X";
            this.appendChild(fork);
            this.used = 2;
            indext++;
            //alert(indext);
            victory(2);
        }
    }
}

//判断输赢
function victory(n){
    if(tds[0].used == n & tds[1].used == n & tds[2].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(tds[3].used == n & tds[4].used == n & tds[5].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(tds[6].used == n & tds[7].used == n & tds[8].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(tds[0].used == n & tds[4].used == n & tds[8].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(tds[0].used == n & tds[3].used == n & tds[6].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(tds[1].used == n & tds[4].used == n & tds[7].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(tds[2].used == n & tds[5].used == n & tds[8].used == n){
        alert("player"+n+ " win!");
        refresh();
    }
    else if(indext == 9){
        alert("It is a draw.");
        refresh();
    }

}

//刷新页面
function refresh(){
    for(var i=0;i<9;i++){
        tds[i].innerHTML = "";
    }
    begin();
}