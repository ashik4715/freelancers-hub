// contact button animate into two buttons separately
$(function() {
    $('#button1').on('click', function() {
        $('#button2').addClass('animateToRight');
        $('#button3').addClass('animateToLeft');
        $('#button1').addClass('hide');
    });
});

// const doc = new jsPDF();
// var specialElementHandlers = {
//     '#generated_pdf_div': function(element, renderer) {
//         return true;
//     }
// };

// $('#cmd').click(function() {
//     doc.fromHTML($('#content').html(), 15, 15, {
//         'width': 170,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('resume-shovon-joarder.pdf');
// });

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

// Button Hide of header

// jQuery(function() {
//     jQuery('.download-resume').click(function() {
//         jQuery('.hideDiv').hide();
//         jQuery('.targetDiv').show();
//         $(".download-resume").hide();
//     });
// });
//


// PDF  javascript
// var downPdf = document.getElementById("renderPdf");

//     downPdf.onclick = function() {
//         html2canvas(document.body, {
//             dpi: 144,
//             onrendered: function(canvas) {
//                 var contentWidth = canvas.width;
//                 var contentHeight = canvas.height;
//                 //One page pdf shows the canvas height generated by html pages.
//                 var pageHeight = contentWidth / 592.28 * 841.89;
//                 //html page height without pdf generation
//                 var leftHeight = contentHeight;
//                 //Page offset
//                 var position = 0;
//                 //a4 paper size [595.28, 841.89], html page generated canvas in pdf picture width
//                 var imgWidth = 595.28;
//                 var imgHeight = 592.28 / contentWidth * contentHeight;
//                 var pageData = canvas.toDataURL('image/jpeg', 1.0);
//                 var pdf = new jsPDF('', 'pt', 'a4');
//                 //There are two heights to distinguish, one is the actual height of the html page, and the page height of the generated pdf (841.89)
//                 //When the content does not exceed the range of pdf page display, there is no need to paginate
//                 if (leftHeight < pageHeight) {
//                     pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
//                 } else {
//                     while (leftHeight > 0) {
//                         pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//                         leftHeight -= pageHeight;
//                         position -= 841.89;
//                         //Avoid adding blank pages
//                         if (leftHeight > 0) {
//                             pdf.addPage();
//                         }
//                     }
//                 }
//                 pdf.save('content.pdf');
//             }
//         })
//     }
// end PDF  javascript