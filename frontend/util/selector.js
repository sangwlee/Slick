const selector = object => {
  if (object) {
    return Object.keys(object).map(key => object[key]);
  } else {
    return [];
  }
};

export default selector;
