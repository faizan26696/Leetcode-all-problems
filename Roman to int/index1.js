// Q)  Roman to Integer

var romanToInt = function (s) {
  let symboleValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currValue = symboleValue[s[i]];
    const nextValue = symboleValue[s[i + 1]];
    if (nextValue && nextValue > currValue) {
      result = result - currValue;
    } else {
      result = result + currValue;
    }
  }
  return result;
};
