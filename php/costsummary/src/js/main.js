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
        $(event.target).next('div').find('small').text("");
        parent.find('.total-error').text("");
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
        calculateGrandTotal();
    }

    const checkAndValidate = ({quantity, unitPrice, totalPrice} = {}) => {
        let validationStatus = [];
        const ZERO = 0;
        if (!(regexPattern.float).test(quantity) || quantity == ""
            || parseFloat(quantity) == ZERO || Number.isNaN(quantity)) {
            validationStatus.push({ status: false, quantity: errorMessage.quantity });
        }
        if (!(regexPattern.float).test(unitPrice) || unitPrice == ""
            || parseFloat(unitPrice) == ZERO || Number.isNaN(quantity)) {
            validationStatus.push({ status: false, unit: errorMessage.unitPrice });
        }
        if (!(regexPattern.float).test(totalPrice) || totalPrice == ""
            || parseFloat(totalPrice) == ZERO || Number.isNaN(totalPrice)) {
            validationStatus.push({ status: false, total: errorMessage.totalPrice });
        }
        return validationStatus.length == ZERO
            ? { overall: true } : { overall: false, validationStatus };
    }

    const showValidationMessage = (validationStatus) => {
        let messages = validationStatus.validationStatus;
        messages.forEach((message) => {
            if (message.quantity) {
                $('.quantity-error small').text(message.quantity);
            }
            if (message.unit) {
                $('.unit-error small').text(message.unit);
            }
            if (message.total) {
                $('.total-error small').text(message.total);
            }
        })
    }

    // When the form is added
    const onClickAddCost = (event) => {
        event.preventDefault();
        let parent = $(event.target).closest('.row');
        quantity = parseFloat(parent.find('.quantity').val());
        unitPrice = parseFloat(parent.find('.unit-price').val());
        totalPrice = quantity * unitPrice;

        // Pass the Validation
        let validationStatus = checkAndValidate({ quantity, unitPrice, totalPrice });
        if (validationStatus.overall) {
            $('.quantity-error small').text("");
            $('.unit-error small').text("");
            $('.total-error small').text("");

            // Clone the form and add Classes and events to it
            let clone = parent.clone(true);

            // Replaces the classes
            clone.find('.row').addClass('copy-version');
            clone.find('.quantity').addClass('add-quantity');
            clone.find('.unit-price').addClass('add-unit-price');
            clone.find('.total-price').addClass('add-total-price');

            // Replace the color and the icons
            clone.find('.add-cost').val("x");
            clone.find('.add-cost').addClass('btn-danger').removeClass('btn-secondary');
            clone.find('.add-cost').addClass('remove-cost').removeClass('add-cost');

            // Remove the error display section
            clone.find('.quantity-error').remove();
            clone.find('.unit-error').remove();
            clone.find('.total-error').remove();

            // Adding/Removing events
            clone.find('.remove-cost').off('click', onClickAddCost);
            $('#total-display-of-cost').append(clone);
            $('.remove-cost').on('click', onClickRemoveCost);

            // Add Form go back old state
            parent.find('.quantity').val(0);
            parent.find('.unit-price').val(0);
            parent.find('.total-price').val(0);
            parent.find('#grand-total-price').val(0);
            parent.find('.quantity').focus();
        } else {
            showValidationMessage(validationStatus);
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
            if (response) {
                $('.remove-cost').off('click', onClickRemoveCost);
                $('#total-display-of-cost .row').remove();
                $('.add-cost').closest('.row').find('.quantity').focus();
                $('#display-of-items .card').remove();
                $.get(URL_TO_GET, onGetSuccess);
            }
        }
        $.post(URL_TO_POST, payload, onPostSuccess);
    }
    $('.submit-to-backend').click(onClickSubmitToBackend);

    const createCardList = (item) => {
        let listContainer = $('#display-of-items');
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card')
        cardDiv.classList.add('d-inline-block')
        cardDiv.classList.add('mr-2')
        cardDiv.classList.add('my-2')

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let cardTitle = document.createElement('div');
        cardTitle.textContent = `Grand Total: ${item.grandTotal}`;
        cardTitle.classList.add('card-title');

        cardBody.appendChild(cardTitle);
        Object.keys(item.transactions).forEach((key) => {
            let cardText = document.createElement('div');
            cardText.textContent = `
                        Quantity: ${item.transactions[key].quantity}
                        Unit: ${item.transactions[key].unit}
                        Total: ${item.transactions[key].total}
                    `;
            cardText.classList.add('card-text');
            cardBody.appendChild(cardText);
        });

        cardDiv.appendChild(cardBody);
        listContainer.append(cardDiv);
    }

    const onGetSuccess = (response) => {
        if (response) response.data.forEach((item) => createCardList(item));
    }
    $.get(URL_TO_GET, onGetSuccess);
})();