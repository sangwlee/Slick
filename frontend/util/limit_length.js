export const limitLength = (name, length) => {
  if (name.length > length) {
    return name.slice(0, length) + " ...";
  }
};
