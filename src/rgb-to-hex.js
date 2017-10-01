module.exports = function (r, g, b) {
  return ('000000' + ((r << 16) | (g << 8) | b).toString(16)).slice(-6);
};
