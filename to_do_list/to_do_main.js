$('#enter').click(function () {
    var new_item = $('#newItem').val();
    // $('#list').append(new_item)
    $('#list').append('<li>' + new_item + '  <button class="finished">done</button></li>')
})


$('#list').on('click', '.finished', function () {
    // $(this).parent().remove()
    $(this).parent().css("text-decoration", "line-through");
    $(this).remove();
})




// $('#toDoList').on('click', '.item', function ())