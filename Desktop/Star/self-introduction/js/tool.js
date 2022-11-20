//获取style函数
function getStyle(obj , name){
    if(window.getComputedStyle){
        return getComputedStyle(obj , null)[name];
    }else{
        return obj.currentStyle[name];
    }
}

//创建移动函数
var timer;
var figure = document.getElementById("fig");  
function move(obj , attr , target , speed , callback){
    //清除上一个定时器
    clearInterval(obj.timer);

    //获取当前位置
    var current = parseInt(getStyle(obj,attr));

    //判断速度
    if(current > target){
        speed = -speed;
    }
    
    //开启定时器
    obj.timer = setInterval(function(){
        var oldwidth = parseInt(getStyle(obj,attr));
        var newwidth = oldwidth + speed;

        //判断是否超出
        if((speed < 0 && newwidth < target) || (speed > 0 && newwidth > target)){
            newwidth = target;
        }

        obj.style[attr] = newwidth + "px";

        if(newwidth == target){
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback();
        }
    },30);
}

//创建渐隐函数
function hide(obj,now,speed,callback){
    obj.timer = setInterval(function(){  
        now+=speed;
        obj.style.opacity=now;
        if(now<0){
            window.clearInterval(obj.timer); 
            callback();
        }
    },100);  
}

//获取时间函数
function time(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var currentTime = year+"/"+month+"/"+day+"&nbsp&nbsp"+hour+":"+minutes;
    return currentTime;
}
//月份转换函数
function monthChange(mon1){
    var mon;
    mon = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    var monthe = mon[mon1];
    return monthe;
}

//绑定展开选项
function spreading(){
    var unfold = document.getElementById("unfold")
    var judge = unfold.parentNode.parentNode.offsetHeight;
    // alert(judge);

    //判断是否达到max_height
    if(judge>=273){
         //获取所需元素record1和content
        var content1 = document.querySelector(".content")
        var record1 = document.querySelector(".record1");

        content1.className = "content2";
        record1.className = "record2";
        unfold.innerHTML = "预 览";
        unfold.id = "preview";
    }
    unfold.onclick=previewing;
}

//设置预览选项
function previewing(){
    var preview = document.getElementById("preview");
    var content2 = document.querySelector(".content2");
    var record2 = document.querySelector(".record2");

    content2.className = "content";
    record2.className = "record1";
    preview.innerHTML = "展 开";
    preview.id = "unfold";
    preview.onclick=spreading;
}

//绑定删除事件
function deleting(){
    var deleteReport = this.parentNode.parentNode;
    deleteReport.parentNode.removeChild(deleteReport);
}

function ergodic(){
    var item = document.querySelectorAll(".checkbox");
    for(var i=0;i<item.length;i++){
        if(item[i].checked){
            alert(i);
        }
    }
}

//绑定注册按钮
var btn = document.querySelector(".btn");
var login = document.querySelector(".btn li");
var signin = document.querySelector(".btn li").nextSibling;
function signing(){
    var headline = document.querySelector(".headline span");
    headline.innerHTML = "Sign";
    btn.removeChild(login);
    var sign = document.querySelector(".sign");
    sign.style.backgroundColor = "#f1e0ec";
    var input = document.querySelectorAll(".loginForm input");
    input[0].value = "";
    input[1].value = "";
    sign.onclick=signing2;
}
function signing2(){
    var input = document.querySelectorAll(".loginForm input");
    var username = input[0].value;
    // alert(username);
    var password = input[1].value;
    sessionStorage.setItem("password", password);
    if(username){
        if(password){
            alert("Congratulations. You have registered successfully!");
            input[0].value = "";
            input[1].value = "";
            btn.insertBefore(login,signin);
            sign.style.backgroundColor = "";
            sign.onclick = signing;
        }else{
            alert("An empty value for password")
        }
    }else{
        alert("An empty value for username")
    }
}

//绑定登录按钮
function logging(){
    var log = document.querySelector(".log");
    var input = document.querySelectorAll(".loginForm input");
    var username = input[0].value;
    var password = input[1].value;
    var password2 = sessionStorage.getItem("password");
    if(username){
        if(password){
            if(password2 == password){
                var whole = document.getElementById("whole");
                hide(whole,1,-0.1,function(){
                    whole.parentNode.removeChild(whole);
                });
                var login = document.querySelector(".login");;
                hide(login,1,-0.2,function(){
                    login.parentNode.removeChild(login)
                });
            }else{
                alert("Wrong password!");
            }
        }else{
            alert("An empty value for password")
        }
    }else{
        alert("An empty value for username")
    }
}