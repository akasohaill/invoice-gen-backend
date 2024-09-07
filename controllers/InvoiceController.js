import { Invoice } from "../models/InvoiceSchema.js";

export const createInvoice = async (req, res) => {
    try {
        const invoiceData = req.body;
        // Calculate net amount, tax, and total amount
        invoiceData.items.forEach(item => {
            item.netAmount = item.unitPrice * item.quantity - item.discount;
            const taxRate = 18; // Assuming 18% tax
            item.taxAmount = item.netAmount * (taxRate / 100);
        });

        invoiceData.totalAmount = invoiceData.items.reduce((acc, item) => acc + item.netAmount + item.taxAmount, 0);

        const newInvoice = new Invoice(invoiceData);
        const savedInvoice = await newInvoice.save();
        res.status(200).json(savedInvoice);

    } catch (error) {
        console.log(error);     
        res.status(500).json({ message: 'Error Occured' });
    }
}

export const getInvoices=async (req,res)=>{
    try {
        const invoices=await Invoice.find();
        res.status(200).json(invoices)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}