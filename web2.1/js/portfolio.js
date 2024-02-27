$(function(){



    // 스크롤 애니메이션
    let scrollTop = $(window).scrollTop();
    let portfolioTop = $('#portfolio').offset().top * 0.2;
    let galleryTop = $('#gallery').offset().top * 0.7;

    $(window).resize(function(){
    scrollTop = $(window).scrollTop();
    portfolioTop = $('#portfolio').offset().top * 0.2;
    galleryTop = $('#gallery').offset().top * 0.7;
    })

    $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    portfolioTop = $('#portfolio').offset().top * 0.2;
    galleryTop = $('#gallery').offset().top * 0.7;

    if(scrollTop > portfolioTop){
    $('#portfolio .portfolio_title').addClass('animated-bottom');
    $('#portfolio .port_wrap').addClass('animated-bottom-delay');
    }

    if(scrollTop > galleryTop){
    $('#gallery h2').addClass('animated-bottom');
    $('#gallery .gallery_list').addClass('animated-bottom-delay');
    }

    })

    // recent
    $('.re_next').click(function(){
        $('.recent_wrap .recent_inner').first().animate({marginLeft:'-50%'},500,function(){
            $(this).appendTo('.recent_wrap').css('margin-left','2%')
        })
    })
    $('.re_prev').click(function(){
        $('.recent_wrap .recent_inner').last().prependTo('.recent_wrap').css('margin-left','-50%').animate({marginLeft:'2%'},500)
    })

    let imgNum = 3// 슬라이더에 사용된 이미지 수 - 화면에 보이는 이미지의 수
    let imgX // port_list의 x좌표            
    let replaceX // mouseX에서 imgX를 뺀 값(port_list에서 클릭한 위치의 값을 찾는 변수)
    let moveX // page마우스 x좌표에서 port_list의 클릭한 x값을 뺀 값
    let startX  // 최초에 마우스를 down한 위치
    let endX  // 마우스를 up한 위치
    let imgWidth = parseInt($('.port_list li').css('width')) 
    let winWidth = $(window).width()
    let moveVal = -33.33

    if(winWidth<800){
        moveVal=-50
        imgNum=4
    }else{
        moveVal = -33.33 
        imgNum=3
    }
    $(window).resize(function(){
        imgWidth = parseInt($('.port_list li').css('width')) 
        winWidth = $(window).width()
        if(winWidth<800){
            moveVal=-50
            imgNum=4
        }else{
            moveVal=-33.33
            imgNum=3
        }
    })

    function slider(num){
        $('.port_list').animate({left:moveVal*num+'%'},500)
    }


    
    $('.port_list').mousedown(function(){
        // event.preventDefault()
        imgX = $(this).offset().left
        replaceX= event.pageX-imgX
        startX = event.pageX
        console.log(replaceX)
        $(this).mousemove(function(){
            moveX = event.pageX-replaceX
            $(this).css('left',moveX)
        })
    })
    $('.port_list img').mousedown(function(){
        event.preventDefault()
    })
    $('.port_list').mouseup(function(){
        $(this).off('mousemove')
        endX = event.pageX
        if(startX-endX<imgWidth && startX-endX>50){ // 마우스로 드래그한 거리가 100보다 크면 다음사진
            sliderNum++
            if(sliderNum>imgNum){  
                sliderNum=imgNum
            }
            slider(sliderNum)
            
        }else if(startX-endX>imgWidth){
            sliderNum+=2
            if(sliderNum>imgNum){  
                sliderNum=imgNum
            }
            slider(sliderNum)                
        }else if(startX-endX>-imgWidth&& startX-endX<-50){  // 마우스로 드래그한 거리가 -100보다 작으면 이전 사진
            sliderNum--
            if(sliderNum<0){
                sliderNum=0
            }                
            slider(sliderNum)
        }else if(startX-endX<-imgWidth){  // 마우스로 드래그한 거리가 -100보다 작으면 이전 사진
            sliderNum-=2
            if(sliderNum<0){
                sliderNum=0
            }                
            slider(sliderNum)
        }else{
            slider(sliderNum) // 마우스로 드래그한 거리가 100보자 작을 경우 원 위치
        }
    })

    $('.port_list').on('touchstart',function(e){
        // event.preventDefault()
        imgX = $(this).offset().left
        mouseX = e.touches[0].screenX
        replaceX= mouseX-imgX
        startX =  e.touches[0].screenX
        console.log(replaceX)
        $(this).on('touchmove',function(e){
            mouseX = e.touches[0].screenX
            moveX = mouseX-replaceX
            $(this).css('left',moveX)
        })
    })
    $('.port_list img').on('touchstart',function(e){
        event.preventDefault()
    })
    $('.port_list').on('touchend',function(e){
        $(this).off('touchmove')
        endX = e.changedTouches[0].screenX
        if(startX-endX>50){ // 마우스로 드래그한 거리가 100보다 크면 다음사진
            sliderNum++
            if(sliderNum>imgNum){  
                sliderNum=imgNum
            }
            slider(sliderNum)
        }else if(startX-endX<-50){  // 마우스로 드래그한 거리가 -100보다 작으면 이전 사진
            sliderNum--
            if(sliderNum<0){
                sliderNum=0
            }                
            slider(sliderNum)
        }else{
            slider(sliderNum) // 마우스로 드래그한 거리가 100보자 작을 경우 원 위치
        }
    })

    let sliderNum = 0
    // $('.next').click(function(){
    //     sliderNum++
    //     if(sliderNum>imgNum){
    //         sliderNum=0
    //     }
    //     slider(sliderNum)
    // })
    // $('.prev').click(function(){
    //     sliderNum--
    //     if(sliderNum<0){
    //         sliderNum=imgNum
    //     }                
    //     slider(sliderNum)
    // })
})