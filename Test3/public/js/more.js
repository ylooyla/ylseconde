$(function(){
    $(".category-list").children('li').click(function(){
        $(this).addClass(isCur)
        $(this).siblings().removeClass(isCur)
    })
})