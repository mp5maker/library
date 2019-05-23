(function() {
    "use strict";
    var quantity, unitPrice, totalPrice, allTotalPrice;

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

    const onClickAddCost = (event) => {
        event.preventDefault();
        console.log(event);
    }
    $('#add-cost-form').submit(onClickAddCost)
})();