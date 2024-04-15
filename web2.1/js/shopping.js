$(function () {
    let clickNum = 0;

    // $('.btn-arrow--next').click(function(){
    //     clickNum++;

    //     if(clickNum > 3){ clickNum = 1;}

    //     let thisList = $('.service-list').eq(clickNum);
    //     let prevList = $('.service-list').eq(clickNum-1);

    //     $('.service-list-wrap').append(prevList);
    // })

    $('.btn-arrow--next').click(function () {
        clickNum++;

        if (clickNum > 2) {
            clickNum = 1;
        }

        console.log(clickNum);

        let firstList = $('.service-list').eq(0);

        $('.service-list-wrap').append(firstList);
    });

    $('.btn-arrow--prev').click(function () {
        clickNum--;

        if (clickNum < 0) {
            clickNum = 2;
        }

        console.log(clickNum);

        let lastList = $('.service-list').eq(2);

        $('.service-list-wrap').prepend(lastList);
    });
});
