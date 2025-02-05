// model/softcodeModel.js

// In-memory storage for the softcode message (can be replaced with a database)
let softcodeMessage = null;

export const getSoftcodeMessage = () => {
  return softcodeMessage;
};

export const updateSoftcodeMessage = (newMessage) => {
  softcodeMessage = newMessage;
  return softcodeMessage;
};