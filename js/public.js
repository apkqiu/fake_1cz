// 移动导航
$(function () {
    // wap 导航 展示 下拉
    $(".menu").click(function () {
        $(".m-nav").animate({
            "left": "0"
        }, 300);
        $(this).hide()
        $(".close-menu").fadeIn();
        $("body").css("overflow", "hidden");
    })
    $(".close-menu").click(function () {
        $(".close-menu").fadeOut()
        $(".m-nav").animate({
            "left": "100%"
        }, 300);
        $(".menu").fadeIn();
        $("body").css("overflow", "auto");
    })
    $(".m-nav>ul>li>span").click(function () {
        $(this).toggleClass("on").parent().siblings("li").find("span").removeClass("on")
        $(this).siblings("ul").slideToggle().parent().siblings("li").find("ul").slideUp()
    })






    //  移动端导航 二级导航展开关闭 
    $(".leftNav>h2 span").click(function () {
        $(this).toggleClass("on");
        $(".leftNav>ul").stop().slideToggle();
    })

    // 二级页面 移动端左侧三级导航 展示
    $(".leftNav>ul>li>span").click(function () {
        $(this).parent().stop().toggleClass("on").siblings("li").removeClass("on");
        $(this).siblings("ul").stop().slideToggle(300).parent().siblings().find("ul").stop().slideUp();
    })
   // 二级页面 移动端左侧四级导航 展示
    $(".leftNav>ul>li>ul>li>span").click(function () {
        $(this).parent().stop().toggleClass("on").siblings("li").removeClass("on");
        $(this).siblings("ul").stop().slideToggle(300).parent().siblings().find("ul").stop().slideUp();
    })

})
