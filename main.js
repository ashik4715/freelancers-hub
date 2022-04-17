// contact button animate into two buttons separately
$(function() {
    $('#button1').on('click', function() {
        $('#button2').addClass('animateToRight');
        $('#button3').addClass('animateToLeft');
        $('#button1').addClass('hide');
    });
});

// Load More
$(document).ready(function() {
    // slick carousal image slider
    // Slick version 1.5.8
    $('.mycarousel').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        centerMode: true,
    });
    // Slick version 1.5.8
    // end slick carousal image slider
    $(".col-md-6").slice(0, 6).show();
    $(".download-resume").mouseover(function() {
        $(".col-md-6:hidden").slice(0, 20).slideDown();
    });
    $("body").on('click touchstart', '.load-more', function(e) {
        // e.preventDefault();
        $(".col-md-6:hidden").slice(0, 20).slideDown();
        if ($(".col-md-6:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        // animate load-more
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1000);
    });
});
// end Load More


// Contact form Validation
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
// end Contact form Validation

// Owl Carousal
$(document).ready(function() {
    $(".footer-owl-carousel").owlCarousel();
});

$('.footer-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
});

var owl = $(".owl-carousel");
owl.owlCarousel({
    items: 1,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: true,
    loop: true,
    stagePadding: 100,
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
});
$('.item').magnificPopup({
    delegate: 'a',
});

// popup

// end popup
// END Owl Carousal

// pdf downloader script
var downPdf = document.getElementById("renderPdf");

downPdf.onclick = function() {

        // Button Hide of header
        jQuery('.hideDiv').hide();
        jQuery('.targetDiv').show();
        $(".download-resume").hide();

        $('.collapse').collapse('show');

        var fbcanvas = document.getElementById("mainContent");
        html2canvas($(fbcanvas), {
            useCORS: true,
            onrendered: function(canvas) {
                setTimeout(function() {
                    var width = canvas.width;
                    var height = canvas.height;
                    var millimeters = {};
                    millimeters.width = Math.floor(width * 0.264583);
                    millimeters.height = Math.floor(height * 0.264583);

                    var imgData = canvas.toDataURL();

                    var imgBase64 = canvas.toDataURL();
                    var imgURL = "data:image/" + imgBase64;

                    var doc = new jsPDF("l", "mm", "a4");
                    doc.deletePage(1);
                    doc.addPage(millimeters.width, millimeters.height);
                    doc.addImage(imgData, 'JPEG', 0, 0);
                    doc.save('content.pdf');
                }, 3500);
            }
        });
    }
    // end pdf downloader script

// skill tabs hide show

// end skill tabs hide


// Image corousal

// end image carousal