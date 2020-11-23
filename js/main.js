$(document).ready(function () {
    // add class scrolled to navbar when  window scroll
    $(window).scroll(function () {
        // console.log($('.navbar').height());
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled')
        }
    });
    $('.tab-switch li').click(function () {
        //add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');
        // hide divs
        $('.tabs-section .tabs-content > div').hide();
        // show the hidden divs linke with active tabs
        $('.' + $(this).data('class')).show();
    });

    // Adjust header height
    $('.header').minHeight($(window).height());

    $(window).resize(function () {
        $('.header').minHeight($(window).height());
    });
});