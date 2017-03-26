$(function () {

    //Magnific Popup
    var portfolioItem = $('.portfolio-item');
    portfolioItem.each(function (e) {
        var th = $(this);
        th.attr('href', '#portfolio-img-' + e)
            .find('.portfolio-popup')
            .attr('id', 'portfolio-img-' + e);
    });
    portfolioItem.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });


	//E-mail Ajax Send
    $('form').submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function () {
            $('.success').addClass('active');
            $('.form-head').addClass('active');
            setTimeout(function () {
                // Done Functions
                $('.success').removeClass('active');
                $('.form-head').removeClass('active');
                th.trigger('reset');
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });
});
