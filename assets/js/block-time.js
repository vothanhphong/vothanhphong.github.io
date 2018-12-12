let block = $('.block-time');

reponsiveContentTime();
$(window).resize(function () {
    reponsiveContentTime();
});

// Hover effect
$(block).hover(function () {
    $(this).find('.content-time').css({
        transform          : 'scale(1.3) rotate(360deg)',
        '-o-transform'     : 'scale(1.3) rotate(360deg)',
        '-moz-transform'   : 'scale(1.3) rotate(360deg)',
        '-webkit-transform': 'scale(1.3) rotate(360deg)',
    });
}, function () {
    $(this).find('.content-time').css({
        transform          : 'scale(1) rotate(0deg)',
        '-o-transform'     : 'scale(1) rotate(0deg)',
        '-moz-transform'   : 'scale(1) rotate(0deg)',
        '-webkit-transform': 'scale(1) rotate(0deg)',
    });
});

function reponsiveContentTime() {
    $(block).each(function () {
        let contentTime    = $(this).find('.content-time'),
            contentSummary = $(this).find('.content-summary'),
            contentDetail  = $(this).find('.content-detail');

        $(contentTime).css('width', $(contentTime).css('height'));

        let blockWidth       = $(this).width(),
            blockHeight      = $(this).height(),
            blockBorder      = parseFloat($(this).css('border-top-width').split('px')[0]),
            blockPaddingLeft = parseFloat($(this).css('padding-left').split('px')[0]),
            timeHeight       = $(contentTime).height(),
            timeWidth        = parseFloat($(contentTime).css('width').split('px')[0]),
            summaryWidth     = parseFloat($(contentSummary).css('width').split('px')[0]),
            middle           = (blockHeight - timeHeight) / 2 - blockBorder,
            left             = (blockWidth - timeWidth) / 2;

        if ($(window).width() < 992) {
            $(contentTime).css({
                position     : 'static',
                'margin-left': left + 'px'
            });
        } else {
            $(contentSummary).css({
                'padding-left' : (timeWidth / 2) + 'px',
                'padding-right': (timeWidth / 2) + 'px',
            });
            $(contentDetail).css({
                'padding-left' : (timeWidth / 2) + 'px',
                'padding-right': (timeWidth / 2) + 'px',
            });
            $(contentTime).css({
                position     : 'absolute',
                'margin-left': 'auto',
                left         : (summaryWidth - timeWidth / 2 + blockPaddingLeft) + 'px'
            });
            $(contentTime).css({top: middle + 'px'});
        }
    });
}