$(function () {
    //append,prepend를 이용한 슬라이드

    $('.btn-arrow--next').click(function () {
        let firstList = $('.service-list').eq(0);
        let secondList = $('.service-list').eq(1);

        secondList.addClass('right-in');
        firstList.removeClass('right-in');

        $('.service-list-wrap').append(firstList);
    });

    $('.btn-arrow--prev').click(function () {
        let lastList = $('.service-list').eq(2);
        let secondList = $('.service-list').eq(1);

        secondList.addClass('right-in');

        $('.service-list-wrap').prepend(lastList);
    });
});
