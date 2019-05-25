(function() {
    "use strict";
    var quantity, unitPrice, totalPrice, allTotalPrice;

    const regexPattern = {
        float: /[-+]?[0-9]*\.?[0-9]+/
    };

    const errorMessage = {
        quantity: "Please enter a number",
        unitPrice: "Please enter a number",
        totalPrice: "Both quantity and unit price needs to be a number"
    };

    const URL_TO_POST = '/library/php/costsummary/backend/create.php';
    const URL_TO_GET = '/library/php/costsummary/backend/read.php';

    // Calculates the grand total
    const calculateGrandTotal = () => {
        allTotalPrice = 0;
        $('.total-price').each((key, perPrice) => {
            if (!Number.isNaN(parseFloat($(perPrice).val()))) {
                allTotalPrice += parseFloat($(perPrice).val());
            }
        })
        if (!Number.isNaN(parseFloat(allTotalPrice))) $("#grand-total-price").val(allTotalPrice);
    }

    // Changes the value of the total price depending on the unit and quantity
    const onChangeQuantityUnitPrice = (event) => {
        let parent = $(event.target).closest('.row');
        quantity = parent.find('.quantity').val();
        unitPrice = parent.find('.unit-price').val();
        totalPrice = parseFloat(quantity) * parseFloat(unitPrice);
        if (!Number.isNaN(totalPrice)) parent.find('.total-price').val(totalPrice);
        calculateGrandTotal();
    }
    $('.quantity, .unit-price').on('input', onChangeQuantityUnitPrice)

    // Removes the clone copy
    const onClickRemoveCost = (event) => {
        event.preventDefault();
        let parent = $(event.target).closest('.row');
        parent.remove();
    }

    // When the form is added
    const onClickAddCost = (event) => {
        event.preventDefault();
        let parent = $(event.target).closest('.row');
        quantity = parseFloat(parent.find('.quantity').val());
        unitPrice = parseFloat(parent.find('.unit-price').val());
        totalPrice = quantity * unitPrice;

        // Pass the Validation
        if (!(regexPattern.float).test(quantity)) console.log(errorMessage.quantity);
        if (!(regexPattern.float).test(unitPrice)) console.log(errorMessage.unitPrice);
        if ((regexPattern.float).test(totalPrice)) {
            // Clone the form and add Classes and events to it
            let clone = parent.clone(true);
            clone.find('.row').addClass('copy-version');
            clone.find('.quantity').addClass('add-quantity');
            clone.find('.unit-price').addClass('add-unit-price');
            clone.find('.total-price').addClass('add-total-price');
            clone.find('.add-cost').val("x");
            clone.find('.add-cost').addClass('btn-danger').removeClass('btn-secondary');
            clone.find('.add-cost').addClass('remove-cost').removeClass('add-cost');
            clone.find('.remove-cost').off('click', onClickAddCost);
            $('#total-display-of-cost').append(clone);
            $('.remove-cost').on('click', onClickRemoveCost);

            // Add Form go back old state
            parent.find('.quantity').val(0);
            parent.find('.unit-price').val(0);
            parent.find('.quantity').focus();
        }else {
            console.log(errorMessage.totalPrice);
        }
    }
    $('.add-cost').click(onClickAddCost)

    // On Submit button sends the post request
    const onClickSubmitToBackend = (event) => {
        event.preventDefault();
        let transaction = [];
        $('.add-quantity').each((key, perQuantity) => {
            transaction.push({
                quantity: perQuantity.value,
                unit: $('.add-unit-price')[key].value,
                totalPrice: $('.add-total-price')[key].value,
            });
        });
        let grandTotal = transaction.reduce((gTotal, payload) => {
            return gTotal += parseFloat(payload.totalPrice);
        }, 0);
        let payload = { transaction, grandTotal };

        const onPostSuccess = (response) => {
            console.log(response);
            if (response) {
                $('.remove-cost').off('click', onClickRemoveCost);
                $('.remove-cost').remove();
                $('.add-cost').closest('.row').find('.quantity').focus();
            }
        }
        $.post(URL_TO_POST, payload, onPostSuccess);
    }
    $('.submit-to-backend').click(onClickSubmitToBackend);

    const onGetSuccess = (response) => {
        if (response) {
            console.log(response);
        }
    }
    $.get(URL_TO_GET, onGetSuccess);
})();