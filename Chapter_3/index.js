const sentence =
  "A person was walking through a forest, he sees a beautiful woman sitting on a wooden log.";
console.log(sentence.length);
//toUpperCase
console.log(sentence.toUpperCase());
//toLowerCase
console.log(sentence.toLowerCase());
// slice
// console.log(sentence.slice(0, 8));
// substring
console.log(sentence.substring(0, 8));
// replcae
console.log(sentence.replace("forest", "jungle"));
// concat
console.log(
  sentence.concat(
    " He approaches the lady, but suddenly the lady disappears in the mist."
  )
);
// trim
const containsWhiteSpaces = "       Hello World     ";
console.log(containsWhiteSpaces.trim());
