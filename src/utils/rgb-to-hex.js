export default (r, g, b) =>
  ('000000' + ((r << 16) | (g << 8) | b).toString(16)).slice(-6).toUpperCase();
