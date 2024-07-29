const Order = require('../models/orderModel');
const { PDFDocument, rgb } = require('pdf-lib');
const nodemailer = require('nodemailer');

exports.placeOrder = async (req, res) => {
    const { shopId, products, discount } = req.body;

    try {
        const totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        const finalAmount = totalAmount - discount;

        const newOrder = new Order({
            shopId,
            products,
            discount,
            totalAmount,
            finalAmount
        });

        await newOrder.save();

        const pdfBytes = await generatePDF(newOrder);
        const fileName = `order_${newOrder._id}.pdf`;
        const filePath = `./public/orders/${fileName}`;
        await savePDF(filePath, pdfBytes);

        sendEmail(filePath, fileName);

        res.status(201).json({ msg: 'Order placed successfully', order: newOrder });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

const generatePDF = async (order) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    page.drawText(`Order ID: ${order._id}`, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`Shop ID: ${order.shopId}`, { x: 50, y: 320, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`Total Amount: ${order.totalAmount}`, { x: 50, y: 290, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`Discount: ${order.discount}`, { x: 50, y: 260, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`Final Amount: ${order.finalAmount}`, { x: 50, y: 230, size: 20, color: rgb(0, 0, 0) });

    order.products.forEach((product, index) => {
        page.drawText(`Product ${index + 1}: ${product.name} (x${product.quantity}) - $${product.price}`, {
            x: 50,
            y: 200 - (index * 30),
            size: 20,
            color: rgb(0, 0, 0)
        });
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};

const savePDF = async (filePath, pdfBytes) => {
    const fs = require('fs').promises;
    await fs.writeFile(filePath, pdfBytes);
};

const sendEmail = (filePath, fileName) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'xxx@gmail.com',
        subject: 'New Order Placed',
        text: 'A new order has been placed. Please find the attached PDF for details.',
        attachments: [
            {
                filename: fileName,
                path: filePath,
            },
        ],
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

