import createElementId from './create-element-id';

export default (elemName, uid) =>
  document.getElementById(createElementId(elemName, uid));
