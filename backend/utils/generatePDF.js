const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

const generatePDF = (orderData, filePath) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const writeStream = fs.createWriteStream(filePath);

        doc.pipe(writeStream);

        doc.fontSize(20).text('Order Details', { align: 'center' });
        doc.fontSize(14).text(`Order ID: ${orderData.id}`);
        doc.text(`Shop: ${orderData.shopName}`);
        doc.text(`Date: ${new Date().toLocaleDateString()}`);

        orderData.products.forEach((product) => {
            doc.text(`Product: ${product.name}`);
            doc.text(`Quantity: ${product.quantity}`);
            doc.text(`Price: $${product.price}`);
        });

        doc.text(`Total Amount: $${orderData.totalAmount}`);
        doc.text(`Discount: $${orderData.discount}`);
        doc.text(`Final Amount: $${orderData.finalAmount}`);

        doc.end();

        writeStream.on('finish', () => {
            resolve();
        });

        writeStream.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = generatePDF;

