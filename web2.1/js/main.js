$(function(){
    let scrollTop = $(window).scrollTop();
    let recentTop = $('#recent').offset().top * 0.7;

    $(window).resize(function(){
    scrollTop = $(window).scrollTop();
    recentTop = $('#recent').offset().top * 0.7;
    })

    function iconShow(){
        $('.scroll').delay(6000).fadeIn();
    }

    if (scrollTop === 0) {
        iconShow()
    } else {
        $('.scroll').css('opacity',0);
    }

    $(window).scroll(function(){
    // 스크롤이 시작되면 아이콘 보이지 않게
    if (scrollTop === 0) {
        iconShow()
    } else {
        $('.scroll').css('opacity',0);
    }

    // 스크롤 아이콘 사라짐
    $('.scroll').fadeOut(200);

    // 최근 프로젝트 스크롤 애니메이션
    scrollTop = $(window).scrollTop();
    recentTop = $('#recent').offset().top * 0.7;

    if(scrollTop > recentTop){
    $('.recent_inner .recent_info .section_title').addClass('animated-leftTop');
    $('.recent_inner .recent_info .section_content').addClass('animated-leftBottom');
    $('.recent_inner .recent_video').addClass('animated-rightBottom');
    }
    
    })

    // 슬로건 출현
    $('.slogan span.slogan_t').each(function(i){
        $(this).delay(300*i).animate({opacity:1},800)
    })
    setTimeout(() => {              
        $('.slogan span').each(function(i){
            $(this).delay(300*i).animate({opacity:1},800)
        }) 
    }, 2000);


    $('.re_next').click(function(){
        $('.recent_wrap .recent_inner').first().animate({marginLeft:'-50%'},500,function(){
            $(this).appendTo('.recent_wrap').css('margin-left','2%')
        })
    })
    $('.re_prev').click(function(){
        $('.recent_wrap .recent_inner').last().prependTo('.recent_wrap').css('margin-left','-50%').animate({marginLeft:'2%'},500)
    })
})