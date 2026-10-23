//your JS code here. If required.
function mergeCraftDates(emily, oliver) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < emily.length && j < oliver.length) {
    if (emily[i] <= oliver[j]) {
      result.push(emily[i]);
      i++;
    } else {
      result.push(oliver[j]);
      j++;
    }
  }

  while (i < emily.length) {
    result.push(emily[i]);
    i++;
  }

  while (j < oliver.length) {
    result.push(oliver[j]);
    j++;
  }

  return result;
}