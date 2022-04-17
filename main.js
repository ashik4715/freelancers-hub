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

// popup
function singleGalleryCarousel() {
    if ($('.single-gallery-carousel-content-box').length && $('.single-gallery-carousel-thumbnail-box').length) {

        var $sync1 = $(".single-gallery-carousel-content-box"), // variable declaration
            $sync2 = $(".single-gallery-carousel-thumbnail-box"),
            flag = false,
            duration = 500;

        $sync1.owlCarousel({ //function for preview carousel
                items: 1,
                margin: 0,
                nav: false,
                dots: false
            })
            .on('changed.owl.carousel', function(e) {
                //var currentItem = e.item.index;
                //alert(currentItem);
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $('.single-gallery-carousel-content-box').magnificPopup({ //function for magnific popup
            type: 'image',
            delegate: '.owl-item:not(.cloned) a',
            closeOnContentClick: false,
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-zoom-in mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            zoom: {
                enabled: true,
                duration: 300
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });

        $sync2.owlCarousel({ //function for thumbnails carousel
                margin: 1,
                items: 7,
                nav: true,
                dots: false,
                navText: false,
                center: false,
                responsive: {
                    0: {
                        items: 2,
                        autoWidth: false
                    },
                    400: {
                        items: 3,
                        autoWidth: false
                    },
                    768: {
                        items: 4,
                        autoWidth: false
                    }
                },
            })
            .on('click', '.owl-item', function() {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
    };
}
singleGalleryCarousel(); //FUNCTION CALLED HERE
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
                    var width = 2160;
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
                }, 4000);
            }
        });
    }
    // end pdf downloader script

// skill tabs hide show

// end skill tabs hide


// Image corousal

// end image carousal