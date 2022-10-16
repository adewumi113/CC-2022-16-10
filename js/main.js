/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the "great blue heron" is bringing garlic naan and the "chickadee" is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

// my solutions

function feast(beast, dish) {
  return dish.startsWith(beast.charAt(0)) && dish.endsWith(beast.charAt(beast.length - 1)) 
  //we use startswith() method to check the first alphabet of the animal name and use charAt() to check for the first alphabet of the dish. We then use endsWith() method to check for the last alphabet of the animal name and use charAt() to check for the last alphabet of the dish. 
  }


  function feast(a, b) {
    return a.startsWith(b[0]) && a.endsWith(b[b.length - 1])
    }