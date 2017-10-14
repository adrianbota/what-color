import convertDataToImage from './convert-data-to-image';
import convertImageToCanvas from './convert-image-to-canvas';

export default (data) =>
  convertDataToImage(data)
    .then(convertImageToCanvas);
