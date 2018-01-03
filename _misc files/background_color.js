"use strict";

// var color;// = document.getElementById('colorChoice').value;
//
//
// document.getElementById('submit').addEventListener('click', function () {
//     event.preventDefault();
//     color = document.getElementById('colorChoice').value;
//     document.body.style.backgroundColor = color;
// });



$('#submit').click(function () {
    event.preventDefault();

    color = $('#colorChoice').val()

    $('body').css('backgroundColor', color);
    $('messageBox').html("You picked a color.")
})

