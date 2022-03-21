$(function() {
    $('#button1').on('click', function() {
        $('#button2').addClass('animateToRight');
        $('#button3').addClass('animateToLeft');
        $('#button1').addClass('hide');
    });
});

// Slide MY SKILL List items
$(document).ready(function(){
    $('.button').on('click')
        $('selected-skill').slideToggle(); 
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
//     doc.save('sample-file.pdf');
// });