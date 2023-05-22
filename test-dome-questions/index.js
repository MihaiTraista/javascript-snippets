const inDate = "1/2/2023";

const convert = (inDate) => {

  let datesList = inDate.split("/");
  datesList = datesList.map(str => str.padStart(2, '0'));
  datesList = datesList.reverse();
  datesList[0] += "/";
  datesList[1] += "/";

  return datesList.join('');
}

const outDate = convert(inDate);
console.log(outDate);

