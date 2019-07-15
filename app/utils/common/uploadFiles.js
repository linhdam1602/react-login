import { POSTFormData } from 'utils/request';
import API from 'config/apiUrl';

/**
 *
 * @param {array} files array of `File`
 * @param {string} folder: folder to save on amazon S3
 */
export default function* uploadFiles(files, folder) {
  if (!files || files.length === 0) return [];

  const body = {
    'files[]': files,
  };

  if (folder) {
    body.folder = folder;
  } else {
    console.warn(
      '`folder` is required to save files on amazon s3. Please check your code when calling `uploadFiles`',
    );
  }

  // try upload 3 time if fail
  for (let i = 0; i < 3; i += 1) {
    try {
      const response = yield POSTFormData(API.uploadFileURL(), body);
      return response;
    } catch (err) {} // eslint-disable-line
  }

  return [];
}
