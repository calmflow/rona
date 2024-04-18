$(function () {
    //append,prepend를 이용한 슬라이드

    $('.btn-arrow--next').click(function () {
        let firstList = $('.service-list').eq(0);
        let secondList = $('.service-list').eq(1);

        firstList
            .addClass('fade-out')
            .delay(200)
            .queue(function () {
                $('.service-list-wrap').append(firstList);
            });
        secondList.addClass('fade-in');
    });

    $('.btn-arrow--prev').click(function () {
        let lastList = $('.service-list').eq(2);
        let secondList = $('.service-list').eq(1);

        $('.service-list-wrap').prepend(lastList);
    });
});
