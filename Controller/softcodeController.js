// controllers/softcodeController.js
import { getSoftcodeMessage, updateSoftcodeMessage } from '../model/softcodeModel.js';

// Controller method to update the softcode message
export const updateSoftcode = (req, res) => {
  const { newMessage } = req.body;

  if (newMessage) {
    const updatedMessage = updateSoftcodeMessage(newMessage);
    return res.status(200).json({ message: 'Softcode message updated successfully!', softcodeMessage: updatedMessage });
  }

  return res.status(400).json({ error: 'New message is required' });
};

// Controller method to get the current softcode message
export const getSoftcode = (req, res) => {
  const softcodeMessage = getSoftcodeMessage();
  
  if (softcodeMessage === null) {
    return res.status(404).json({ error: 'No softcode message found' });
  }

  return res.status(200).json({ message: softcodeMessage });
};
