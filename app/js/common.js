$(function () {

    //Magnific Popup
    var portfolioItem = $(".portfolio-item");

    portfolioItem.each(function (e) {
        let th = $(this);
        th.attr('href', '#portfolio-img-' + e)
            .find('.portfolio-popup')
            .attr('id', 'portfolio-img-' + e);
    });
    portfolioItem.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });

});
