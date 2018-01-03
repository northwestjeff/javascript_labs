$('.ui.checkbox').checkbox()

$('[type=submit]').attr("disabled", true);

var totalCost = 6.00;
var extra = 0.50;
var deliveryFee = 5.00;

//
//  IF a tortilla is changed, remove all Tortillas and add the changed tortilla.
// Tortillas are the only radio button, so this serves as the input[type=radio] function.
//
$('[name="tortilla"]').change(function () {
    var new_item = $(this);
    if (this.checked === true) {
        $('#tortilla').remove();
        $('#orderList').append('<li class="item" id="tortilla"> ' + new_item.val() + '  </li>');
    }
});


//
// Event Listener. If a checkbox is changed, create variables for name
// and description attributes and add the new 'checked' selection to
// Order List and remove the previously checked selection.
//

$('input[type="checkbox"]').change(function () {
    var description = $(this).attr('name');
    var menuName = $(this).next().html();
    var isChecked = $(this).is(":checked");
    if (description === "terms") {
    } else if (description === "delivery") {
    } else {
        addRemove(description, menuName, isChecked)
    }
});


$('[name="delivery"]').change(function () {
    var delivery = $('[value="delivery"]');
    if (delivery.prop("checked") === true) {
        totalCost = totalCost + deliveryFee
        orderUpdate()
    } else {
        totalCost = totalCost - deliveryFee
        orderUpdate()
    }
})

//
// Adds and removes checkbox selection.  Embedded in the
// checkbox.change event listener. If item is Checked, add.  Else, remove.
//
addRemove = function (description, menuName, isChecked) {
    if (isChecked) {
        $('.list').append('<li class="item" name="' + description + '" value="' + menuName + '" id="' + description + '">' + menuName + '</li>');
        totalCost = totalCost + extra;
        orderUpdate()
    } else {
        $('.item').filter(":contains(" + menuName + ")").remove();
        totalCost = totalCost - extra;
        orderUpdate()
    }
};


// Recalculates the total
orderUpdate = function () {
    $('#total_cost').html("<strong>Total: </strong> $" + totalCost.toFixed(2))
}

nameValidation = function () {
    var val = $('[name="name"]').val();
    if (val.length > 0 && isNaN(val) === true) {
        return true
    } else {
        alert("Please enter a valid name.")
    }
};
$('[name="name"]').blur(nameValidation);


// CHECKS CREDIT CARD NUMBER
creditCardValidation = function () {
    var creditCard = $('[name="credit-card"]').val()
    if (creditCard.length === 16) {
        return true
    } else {
        return false
    }
}

// CHECKS CVV NUMBER
cvvValidation = function () {
    var cvv = $('[name="cvv"]').val()
    if (cvv.length === 3) {
        return true
    } else {
        return false
    }
}

// VALIDATES THAT ZIP CODE IS A NUMBER
zipValidation = function () {
    var zip = $('[name="zip"]').val()
    if (zip.length === 5) {
        return true
    } else {
        return false
    }
}

// ADDS DELIVERY CHARGE TO TOTAL
deliveryCharge = function () {
    var delivery = $('[name="delivery"]')
    if (delivery.attr("checked") === true) {
        totalCost = totalCost + deliveryFee
        orderUpdate()
    } else {
        totalCost = totalCost - deliveryFee
        orderUpdate()
    }
}


// CHECK THAT TERMS AND CONDITIONS IS APPROVED
$('input[name="terms"]').change(function () {
    if ($('[name="terms"]').prop("checked") === true) {
        $('[type=submit]').attr("disabled", false)
    } else {
        $('[type=submit]').attr("disabled", true)
    }
})

// CHECKS THAT ALL VALIDATIONS PASS
validForm = function () {
    if (nameValidation() === true && cvvValidation() === true && zipValidation() === true && creditCardValidation() === true) {
        return true
    } else {
        return false
    }
}

// APPENDS THE TOTAL COST TO THE URI
$('.form').submit(function () {
    if (validForm() === true) {
        $(this).append('<input type="hidden" name="total" value=' + totalCost + '>');
        return true;
    } else {
        return false
    }
});

