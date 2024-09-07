import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
    sellerDetails: {
        name: String,
        address: String,
        city: String,
        state: String,
        pincode: String,
        pan: String,
        gst: String,
    },
    placeOfSupply: String,
    billingDetails: {
        name: String,
        address: String,
        city: String,
        state: String,
        pincode: String,
        code: String,
    },
    shippingDetails: {
        name: String,
        address: String,
        city: String,
        state: String,
        pincode: String,
        code: String,
    },
    placeOfDelivery: String,
    orderDetails: {
        orderNo: String,
        orderDate: {
            type: Date,
            set: function (value) {
                if (typeof value === 'string') {
                    const [day, month, year] = value.split('.');
                    return new Date(`${year}-${month}-${day}`);
                }
                return value;
            },
        },
    },
    invoiceDetails: {
        invoiceNo: String,
        invoiceDate: {
            type: Date,
            set: function (value) {
                if (typeof value === 'string') {
                    const [day, month, year] = value.split('.');
                    return new Date(`${year}-${month}-${day}`);
                }
                return value;
            },
        },
        reverseCharge: Boolean,
    },
    
    items: [
        {
            description: String,
            unitPrice: Number,
            quantity: Number,
            discount: Number,
            netAmount: Number,
            taxRate: Number,
        },
    ],
    totalAmount: Number,
    taxAmount: Number,
    signature: String,
},{timestamps:true})

export const Invoice = mongoose.model('Invoice',invoiceSchema);