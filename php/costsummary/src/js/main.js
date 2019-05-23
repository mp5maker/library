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

    const calculateGrandTotal = () => {
        allTotalPrice = 0;
        $('.total-price').each((key, perPrice) => {
            if (!Number.isNaN(parseFloat($(perPrice).val()))) {
                allTotalPrice += parseFloat($(perPrice).val());
            }
        })
        if (!Number.isNaN(parseFloat(allTotalPrice))) $("#grand-total-price").val(allTotalPrice);
    }

    const onChangeQuantityUnitPrice = (event) => {
        let parent = $(event.target).closest('.row');
        quantity = parent.find('.quantity').val();
        unitPrice = parent.find('.unit-price').val();
        totalPrice = parseFloat(quantity) * parseFloat(unitPrice);
        if (!Number.isNaN(totalPrice)) parent.find('.total-price').val(totalPrice);
        calculateGrandTotal();
    }
    $('.quantity, .unit-price').on('input', onChangeQuantityUnitPrice)

    const onClickRemoveCost = (event) => {
        event.preventDefault();
        let parent = $(event.target).closest('.row');
        parent.remove();
    }

    const onClickAddCost = (event) => {
        event.preventDefault();
        let parent = $(event.target).closest('.row');
        quantity = parseFloat(parent.find('.quantity').val());
        unitPrice = parseFloat(parent.find('.unit-price').val());
        totalPrice = quantity * unitPrice;

        if (!(regexPattern.float).test(quantity)) console.log(errorMessage.quantity);
        if (!(regexPattern.float).test(unitPrice)) console.log(errorMessage.unitPrice);
        if ((regexPattern.float).test(totalPrice)) {
            let clone = parent.clone(true);
            clone.find('.add-cost').val("x");
            clone.find('.add-cost').addClass('btn-danger').removeClass('btn-secondary');
            clone.find('.add-cost').addClass('remove-cost').removeClass('add-cost');
            clone.find('.remove-cost').off('click', onClickAddCost);
            $('#total-display-of-cost').append(clone);
            $('.remove-cost').on('click', onClickRemoveCost);
        }else {
            console.log(errorMessage.totalPrice);
        }
    }
    $('.add-cost').click(onClickAddCost)
})();