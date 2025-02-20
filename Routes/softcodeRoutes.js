// routes/softcodeRoutes.js
import express from 'express';
import { getSoftcodeMessage, updateSoftcodeMessage } from '../Controller/softcodeController.js';

const router = express.Router();

// Route to get the current softcode message
router.get('/getSoftcode', getSoftcodeMessage);

// Route to update the softcode message
router.post('/updateSoftcode', updateSoftcodeMessage);

export default router;

