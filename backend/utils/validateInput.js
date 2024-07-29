const validateOrderInput = (orderData) => {
    if (!orderData.shopId || !orderData.products || !orderData.totalAmount) {
        return 'Missing required fields';
    }

    if (isNaN(orderData.totalAmount) || isNaN(orderData.discount) || isNaN(orderData.finalAmount)) {
        return 'Amount fields must be numbers';
    }

    return null;
};

module.exports = {
    validateOrderInput,
};

