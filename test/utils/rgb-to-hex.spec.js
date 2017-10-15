import test from 'ava';
import rgbToHex from '../../src/utils/rgb-to-hex';

test('rgbToHex', t => {
  t.is(rgbToHex(255, 255, 255), 'FFFFFF');
  t.is(rgbToHex(0, 255, 255), '00FFFF');
  t.is(rgbToHex(0, 0, 255), '0000FF');
  t.is(rgbToHex(0, 255, 0), '00FF00');
  t.is(rgbToHex(255, 0, 0), 'FF0000');
  t.is(rgbToHex(0, 0, 0), '000000');
});
