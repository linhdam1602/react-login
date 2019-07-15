import doc from './icon/doc.png';
import jpg from './icon/jpg.png';
import pdf from './icon/pdf.png';
import png from './icon/png.png';
import file from './icon/file.png';

export default function getFileIcon(fileName) {
  const fileExtension = fileName.split('.').pop();
  switch (fileExtension) {
    case 'doc':
    case 'docs':
      return doc;
    case 'jpeg':
    case 'jpg':
      return jpg;
    case 'pdf':
      return pdf;
    case 'png':
      return png;
    default:
      return file;
  }
}
