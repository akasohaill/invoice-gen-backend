import express from 'express';
import { createInvoice, getInvoices } from '../controllers/InvoiceController.js';

const router=express.Router();

// creating the invoice
router.post('/create',createInvoice);
router.get('/',getInvoices);

export default router;