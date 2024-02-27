$(function(){
    let gnb_num = 0
    $('.gnb_btn').click(function(){
        gnb_num++
        if(gnb_num%2==1){
            $(this).find('.span_first').css('transform','rotate(45deg)')
            $(this).find('.span_last').css('transform','rotate(135deg)')
            $('.gnb').slideDown()
        }else{
            $(this).find('.span_first').css('transform','translateY(-5px) rotate(0) ')
            $(this).find('.span_last').css('transform','translateY(5px) rotate(0)')
            $('.gnb').slideUp()
        }               
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('#header').addClass('dark_bg')
        }else{
            $('#header').removeClass('dark_bg')
        }
    })

})