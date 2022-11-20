$('#comment').on('click',function(){
    var list = [];
    $.ajax({
        url: 'https://637983e97eb4705cf280ec7c.mockapi.io/user1',
        type:"get",
        data:{},
        dataType:"json",
        success:function(data){
            console.log(data);
            list = data;
            console.log(list);
            $(list).each(function(i=0,ele){
                var $tr = $('<div class="commentBox"><div class="imgSrc"><img src=' +ele.frame+'><span>' + ele.username + '</span></div>'+ '<div class="comment"><span>' + ele.comment + '</span></div></div>');
                $('.record1').append($tr);
            })
        },

    }) 
    
})