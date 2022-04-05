// contact button animate into two buttons separately
$(function() {
    $('#button1').on('click', function() {
        $('#button2').addClass('animateToRight');
        $('#button3').addClass('animateToLeft');
        $('#button1').addClass('hide');
    });
});

// Load More
$(function() {
    $(".col-md-6").slice(0, 2).show();
    $(".download-resume").mouseover(function() {
        $(".col-md-6:hidden").slice(0, 20).slideDown();
    });
    $("body").on('click touchstart', '.load-more', function(e) {
        e.preventDefault();
        $(".col-md-6:hidden").slice(0, 20).slideDown();
        if ($(".col-md-6:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});
// end Load More