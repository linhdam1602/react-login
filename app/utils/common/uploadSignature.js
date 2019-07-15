import { POSTFormData } from 'utils/request';
import API from 'config/apiUrl';

/**
 *
 * @param {string} signature base64
 * @param {string} userId
 */
export default function* uploadSignature(signature, userId = 0) {
  const body = {
    signature,
    user_id: userId,
  };

  try {
    const response = yield POSTFormData(API.uploadSignatureURL(), body);
    return response;
  } catch (error) {
    return false;
  }
}
