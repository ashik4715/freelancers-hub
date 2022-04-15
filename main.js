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
            }
        });
    }
    // end pdf downloader script

// skill tabs hide show

// end skill tabs hide


// Image corousal

// end image carousal