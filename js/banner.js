/*
$(function () {
    $('ul').on('mouseenter', 'li', function() {//绑定鼠标进入事件
        $(this).parent().children().removeClass();
        $(this).addClass("play");
        $(this).siblings().addClass("hidden");
        console.log(1);
    });
    $('ul').on('mouseleave', 'li', function() {//绑定鼠标划出事件
        $(this).parent().children().removeClass();
        $(this).parent().children().addClass("natural")
        console.log(2);
    });
});*/

$(function () {
    $('ul').on('mouseenter', 'li', function() {//绑定鼠标进入事件
        $(this).stop(false,true).animate({"width":825},1000);
        $(this).siblings().stop(false,true).animate({"width":100},1000);
    });
    $('ul').on('mouseleave', 'li', function() {//绑定鼠标划出事件
        $(this).parent().children().stop(false,true).animate({"width":245},1000);
    });
})