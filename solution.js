const add = (...arg) => {
  const numbers = [...arg];
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const listToObject = (arg) => {
  const result = {};

  arg.forEach((itm) => {
    // Check whether value is an object or not
    const isObject = typeof itm.value === "object" && !Array.isArray(itm.value);
    result[itm.name] = isObject ? {} : itm.value;
  });
  return result;
};

const objectToList = (obj) => {
  const result = [];
  const getKeysOfObj = Object.keys(obj);

  getKeysOfObj.forEach((key) => {
    // Check whether value is an object or not
    const isValueObject =
      typeof obj[key] === "object" && !Array.isArray(obj[key]);
    result.push({ name: key, value: isValueObject ? {} : obj[key] });
  });

  return result;
};

module.exports = {
  add,
  listToObject,
  objectToList,
};
