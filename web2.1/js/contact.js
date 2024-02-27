$(function() {
    // 개인정보수집방침 약관 보이기
    let clickNum = 0;
    $('.agreement_title .arrow').click(function() {
        clickNum++
        if(clickNum%2==1){
            $(this).addClass('up');
            $('.agreement_content').slideDown(500);
        }else{
            $(this).removeClass('up');
            $('.agreement_content').slideUp(500);
        }
    })
})