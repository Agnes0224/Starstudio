var timer;//绑定定时器
var figure = document.getElementById("fig");  //绑定轮播图
var index = 0;//设置索引

//自动切换
function auto(){
    timer = setInterval(function(){
        index++;
        index %= 4;
        move(figure, "left", -580*index, 25, function(){
            if(index >= 3){
                index = 0;
                figure.style.left = 0;
            }
        });
    },5000);
}

//给图片设置索引
var img_index = document.getElementById("fig");
var imglist = img_index.getElementsByTagName("img");

//绑定索引index
for(var i=0; i<imglist.length; i++){
    imglist[i].num = i;
    imglist[i].onclick = function(){
        index = this.num;
    }
}


//绑定单击切换函数
var last = document.getElementById("last");
var next = document.getElementById("next");
last.onclick = function(){
    //关掉自动切换
    clearInterval(timer);
    if(index > 0){
        index = index - 1;
    }
    move(figure, "left", -580*index, 25, function(){
    auto();
    })
}
next.onclick = function(){
    //关掉自动切换
    clearInterval(timer);
    if(index >= 3){
        index = 0;
        figure.style.left = 0;
    }else{
        index = index + 1;
    }
    move(figure, "left", -580*index, 25, function(){
    auto();
    })
}

auto();

//获取实时时间
var date=document.querySelector("#date span");  
date.innerHTML=time();
//编辑calender
var date2 = new Date();
var month2 = date2.getMonth();
var day2 = date2.getDate();
document.getElementById("day").innerHTML=day2;
var montnEnglish=monthChange(month2);
document.getElementById("month").innerHTML=montnEnglish;

//绑定下拉层
var drop = document.querySelector(".drop");
var new1 = document.querySelector(".new");
drop.onmouseover = function(){
    new1.style.display = "block";
}
drop.onmouseleave = function(){
    new1.style.display = "";
}
 
//绑定发送新建记录
var send = document.querySelector(".send li");

send.onclick=function(){
    //获取基本信息
    var text = document.getElementById("text");
    var content = text.value;
    var nowTime = time(); 
    var oldRecord = document.querySelector(".old");
    // var record2 = document.querySelector(".record2");
    // var record1 = document.querySelector(".record1");

    //创建包括所有的div
    var div = document.createElement("div");

    //创建新的record
    var study = document.querySelector(".study");
    var record = document.createElement("div");
    record.className = "record1";
    var contentBox = document.createElement("div");
    contentBox.className = "content";
    var textNode = document.createTextNode(content);
    //设置checkbox
    var check = document.createElement("div");
    check.className = "check";
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("name","items");
    check.appendChild(checkbox);
    //设置头像姓名
    var frame = document.createElement("div");
    frame.className = "frame2";
    var img = document.createElement("img");
    img.src="./img/7.jpg";
    var name2 = document.createElement("span");
    name2.innerHTML = "Agnes";
    frame.appendChild(img);
    frame.appendChild(name2);
    //设置日期
    var dateBox = document.createElement("div");
    dateBox.id = "date";
    dateBox.innerHTML=nowTime;
    //设置评论与展开按钮
    var pl = document.createElement("button");
    var zk = document.createElement("button");
    var sc = document.createElement("button");
    var plText = document.createTextNode("评 论");
    var zkText = document.createTextNode("展 开");
    var scText = document.createTextNode("删 除");
    var spread1 = document.createElement("div");
    spread1.className = "spread";
    pl.type="buttton";
    pl.id="comment";
    zk.type="button";
    zk.id="unfold";
    sc.type="button";
    sc.id="delete";
    sc.appendChild(scText);
    pl.appendChild(plText);
    zk.appendChild(zkText);
    spread1.appendChild(sc);
    spread1.appendChild(pl);
    spread1.appendChild(zk);

    //绑定按钮函数
    zk.onclick=spreading;
    sc.onclick=deleting;

    //将input添加进item
    var item = document.querySelectorAll(".checkbox");
    item.length=item.length+1;
    item[item.length]=


    //添加
    contentBox.appendChild(textNode);
    record.appendChild(check);
    record.appendChild(frame);
    record.appendChild(dateBox);
    record.appendChild(contentBox);
    record.appendChild(spread1);
    div.appendChild(record);
    div.appendChild(oldRecord);
    study.appendChild(div);
    //study.insertBefore(record,oldRecord);

    div.className="old";

    //清除搜索框
    text.value="";
}

//绑定按钮事件
var delete1 =document.getElementById("delete");
delete1.onclick=deleting;

var unfold = document.getElementById("unfold");
unfold.onclick=spreading;

//设置批量删除
//获取管理，建立checkbox
var control = document.getElementById("control");

control.onclick=function(){
    var items = document.getElementsByName("items");
    for(var i=0; i<items.length; i++){
        items[i].style.visibility="visible";
    }
    var deleted = document.querySelectorAll(".deleted input");
    for(var i=0; i<deleted.length; i++){
        deleted[i].style.visibility="visible";
    }
}

//设置取消按钮
var cancel = document.querySelector(".cancel");
cancel.onclick=function(){
    var items = document.getElementsByName("items");
    for(var i=0; i<items.length; i++){
        items[i].style.visibility="";
    }
    var deleted = document.querySelectorAll(".deleted input");
    for(var i=0; i<deleted.length; i++){
        deleted[i].style.visibility="";
    }
}

//设立删除按钮
var deleteBtn = document.querySelector(".deleting");
deleteBtn.onclick=ergodic;

//设立注册登录按钮
var sign = document.querySelector(".sign");
sign.onclick=signing;
var log = document.querySelector(".log");
log.onclick=logging;
