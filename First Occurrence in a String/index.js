// Q) Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
  const result = haystack.indexOf(needle);
  return result;
};

const a = strStr("sadbutsad", "sad");
const b = strStr("leetcode", "leeto");

console.log(a);
console.log(b);
