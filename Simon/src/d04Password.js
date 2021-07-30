
function checkPassword(password) {
  // minimum 6 characters
  if (password.length < 6) {
    return {success: false, reason: 'Password too short.'};
  }
  // contains lowercase and uppercase
  if (
    !charInRange(password, 'A', 'Z') ||
    !charInRange(password, 'a', 'z')
  ) {
    return {success: false, reason: 'Lowercase & Uppercase must included.'};
  }
  return {success: true, reason: 'OK'};
}

function charInRange(word, minChar, maxChar) {
  let charCodeMin = minChar.charCodeAt(0);
  let charCodeMax = maxChar.charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i);
    // check whether it is between range
    if (charCode >= charCodeMin && charCode <= charCodeMax) {
      return true
    }
  }
  false;
}

// Just example using regex for upper/lowercase
function checkLowerUpperByRegex(password) {
  if (!password.match(/[A-Z]/) || !password.match(/[a-z]/)) {
    return {success: false, reason: 'Lowercase & Uppercase must included.'};
  }
  return true;
}


let result = checkLowerUpperByRegex('1ac111d1');
console.log(result);
