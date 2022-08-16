$(function () {

    const TXT = ['HOme', 'page01', 'page02', 'page03'];
    const SL = $('#slickFull').slick({
        arrows: false,
        //speed: 2000,
        //vertical: true,
    });

    $('#slickFull').on('wheel', function (e) {
        console.log(e.originalEvent.wheelDelta);
        let D = e.originalEvent.wheelDelta;
        D > 0
            ? SL.slick('slickPrev')
            : SL.slick('slickNext')
    });

    $('.txt').text(TXT[0]);
    SL.on('afterChange', function (s, e, c) {
        let A = $('.slick-current');
        A.addClass('on').siblings().removeClass('on');
        $('.txt').text(TXT[c]);
        $('.circle').css({
            width: 20 * c + 'px',
            height: 20 * c + 'px',
            borderRadius: c * 10 + '%',
        });
        $('.img img').attr('src', './img/lesedilarona0' + (c + 1) + '.jpg');
        $('.background').css({
            background: "url(./img/lesedilarona0" + (c + 1) + ".jpg) no-repeat center center/cover",
        })
    })

})