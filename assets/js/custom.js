$(document).ready(function () {
    'use strict';

    let height = $(window).height(),
        scrollPos = 0,
        navItem = $('#menu-left .navbar-nav .nav-item a');

    headerPosition();
    $(window).resize(function () {
        headerPosition();
    });

    // Show text when hover navbar item
    $(navItem).hover(function () {
        let text = $(this).find('.text');

        $(text).show("slide");
    }, function () {
        let text = $(this).find('.text');

        $(text).hide("slide");
    });

    /*
     * Scroll Effect Insite Link
     */
    $('#menu-left .nav-item').click(function (e) {
        e.preventDefault();
        let section = $(this).find('a:first').attr('href'),
            height = $(section).offset().top;
        window.scroll({top: height, behavior: 'smooth'});
    });

    /*
     * Rotate toggle button icon
     */
    $('#menu-left .navbar-toggler').click(function () {
        if ($(this).find('span:first').hasClass('rotate-90-inverse')) {
            $(this).empty()
                .append('<span class="fa fa-2x fa-angle-double-up rotate-90"></span>');
            $(this).parent().find('.collapse').collapse('hide');
        } else {
            $(this).empty()
                .append('<span class="fa fa-2x fa-angle-double-up rotate-90-inverse"></span>');
            $(this).parent().find('.collapse').collapse('show');
        }
    });

    $('.link-list .link-item a').hover(function () {
        $(this).find('span').addClass('show');
    }, function () {
        $(this).find('span').removeClass('show');
    });

    $(window).scroll(function () {
        let banner = $('#banner'),
            currentScorllPos = $(window).scrollTop();

        if (currentScorllPos >= height) {
            if (scrollPos > currentScorllPos) {
                $('#language').show();
            } else {
                $('#language').hide();
            }

            scrollPos = currentScorllPos;

            return;
        }

        $(banner).css({'background-position': '50% -' + parseInt(currentScorllPos / 2) + 'px'});
        scrollPos = currentScorllPos;
    });

    if (!matchMedia('(pointer:fine)').matches) {
        $(navItem).css('background-color', '#6E9CFF');
        $(navItem).find('.text').show();
    }
});

function headerPosition() {
    let height = $(window).height(),
        banner = $('#banner'),
        bannerHeigh = height,
        headerContent = $(banner).find('.header-content'),
        headerContentHeight = parseFloat($(headerContent).css('height').split('px')[0]),
        headercontentPaddingTop = parseFloat($(headerContent).css('padding-top').split('px')[0]);

    // Set full height banner
    if (headerContentHeight + 20 > height) {
        bannerHeigh = headerContentHeight + 20;
    }

    $(banner).css({'height': bannerHeigh + 'px'});
    $(headerContent).css('margin-top', ((bannerHeigh - headerContentHeight) / 2 - headercontentPaddingTop) + 'px');
}
