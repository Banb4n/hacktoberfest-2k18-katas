export const findLastItem = (value) => {
  if (Array.isArray(value)) {
    return lastInArray(value);
  } else if (value instanceof Object) {
    return lastInObject(value);
  } else if (typeof value === 'string') {
    return lastInString(value);
  }
};

const lastInString = (str) => str.slice(str.length - 1, str.length);

const lastInArray = (arr) => {
  const lastItem = arr.pop();

  if (Array.isArray(lastItem)) {
    return lastInArray(lastItem);
  } else if (lastItem instanceof Object && !Array.isArray(lastItem)) {
    return lastInObject(lastItem);
  } 

  return lastItem;
};

const lastInObject = (obj) => {
  const lastKeys = lastInArray(Object.keys(obj));
  const lastItem = lastInArray(Object.values(obj));

  return { [lastKeys]: lastItem };
};