$(function(){
    $('.slogan span.slogan_t').each(function(i){
        $(this).delay(300*i).animate({opacity:1},800)
    })
    setTimeout(() => {              
        $('.slogan span').each(function(i){
            $(this).delay(300*i).animate({opacity:1},800)
        }) 
    }, 2000);
   
    function responsive(){
        $('.service_view .service_responsive').delay(500).animate({width:800},1000).delay(500).animate({width:360},1000)
        setTimeout(function(){
            $('.service_product ul li').css('width','49%')
            $('.service_header').css('height','60px')
            $('.service_topbanner h4').css('font-size','1em')
        },2000)
    }
    function mobile(){
        $('.service_view .service_responsive').delay(500).animate({width:360},1000)
        setTimeout(function(){
            $('.service_product ul li').css('width','49%')
            $('.service_header').css('height','60px')
            $('.service_topbanner h4').css('font-size','1em')
        },500)
    }
    function mobile_m(){
        // $('.service_view_m .service_responsive').delay(500).animate({width:'24'+'%'},1000)
    }
    function pc(){
        $('.service_view .service_responsive').delay(500).animate({width:1200},1000)
        setTimeout(function(){
            $('.service_product ul li').css('width','24%')
            $('.service_header').css('height','80px')
            $('.service_topbanner h4').css('font-size','1.6em')
        },500)
    }
    $('.service_list li').each(function(i){                
        $(this).click(function(){
            $(this).addClass('select').siblings().removeClass('select')
        })               
    })

    $('.service_list li').eq(0).click(function(){
        $('.service_view .service_responsive').css('display','block')
        $('.service_management').css('display','none')
        $('.service_shop').css('display','none')
        pc()
        // 모바일 버전 함수
        $('.service_view_m .service_pc').css('display','block')
        $('.service_view_m .service_mobile').css('display','none')
        $('.service_view_m .service_responsive').css('display','none')
    })
    $('.service_list li').eq(1).click(function(){
        $('.service_view .service_responsive').css('display','block')
        $('.service_management').css('display','none')
        $('.service_shop').css('display','none')
        let resWidth = parseInt( $('.service_view .service_responsive').css('width'))
        if(resWidth<1000){
            pc()
        }    
        responsive();
        // 모바일 버전
        $('.service_view_m .service_responsive').css('display','block')
        $('.service_view_m .service_pc').css('display','none')
        $('.service_view_m .service_mobile').css('display','none')
        responsive_m();
    })
    $('.service_list li').eq(2).click(function(){
        $('.service_view .service_responsive').css('display','block')
        $('.service_management').css('display','none')
        $('.service_shop').css('display','none')
        mobile();
        // 모바일 버전
        $('.service_view_m .service_mobile').css('display','block')
        $('.service_view_m .service_pc').css('display','none')
        $('.service_view_m .service_responsive').css('display','none')
    })
    $('.service_list li').eq(3).click(function(){
        $('.service_view .service_responsive').css('display','none')
        $('.service_management').css('display','none')
        $('.service_shop').css('display','block')
        // 모바일 버전
        $('.service_view_m .service_pc').css('display','none')
        $('.service_view_m .service_responsive').css('display','none')
        $('.service_view_m .service_mobile').css('display','none')
    })
    $('.service_list li').eq(4).click(function(){
        $('.service_view .service_responsive').css('display','none')
        $('.service_view_m .service_responsive').css('display','none')
        $('.service_management').css('display','block')
        $('.service_shop').css('display','none')
        // 모바일 버전
        $('.service_view_m .service_pc').css('display','none')
        $('.service_view_m .service_mobile').css('display','none')

    })
})