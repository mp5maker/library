// Add a char
// Delete a char
// Replace a char
const oneEditAway = (str, str2) => {
  const editString = (string1, string2) => {
    let foundDifference = false;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        if (foundDifference) return false;
        foundDifference = true;
      }
    }
    return true;
  };

  const addString = (string1, string2) => {
    let counter1 = 0;
    let counter2 = 0;

    while (counter1 < string1.length && counter2 < string2.length) {
      if (string1[counter1] !== string2[counter2]) {
        if (counter1 !== counter2) return false;
        counter1++;
      } else {
        counter1++;
        counter2++;
      }
    }

    return true;
  };

  if (str.length == str2.length) return editString(str, str2);
  else if (str.length > str2.length) return addString(str, str2);
  else if (str2.length > str1.length) return addString(str, str2);
  return false;
};

console.log(oneEditAway("pale", "ple"));
console.log(oneEditAway("pales", "pale"));
console.log(oneEditAway("pale", "bale"));
console.log(oneEditAway("pale", "bae"));
