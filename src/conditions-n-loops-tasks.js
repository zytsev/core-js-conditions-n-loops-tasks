/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (a < b && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const Qx = Object.values(queen)[0];
  const Qy = Object.values(queen)[1];
  const Kx = Object.values(king)[0];
  const Ky = Object.values(king)[1];

  if (Qx === Kx || Qy === Ky) {
    return true;
  }
  let x = Qx;
  let y = Qy;
  for (let i = 0; i < 8; i += 1) {
    x += 1;
    y += 1;
    if (x === Kx && y === Ky) {
      return true;
    }
  }
  let x1 = Qx;
  let y1 = Qy;
  for (let i = 0; i < 8; i += 1) {
    x1 += 1;
    y1 -= 1;
    if (x1 === Kx && y1 === Ky) {
      return true;
    }
  }
  let x2 = Qx;
  let y2 = Qy;
  for (let i = 0; i < 8; i += 1) {
    x2 -= 1;
    y2 += 1;
    if (x2 === Kx && y2 === Ky) {
      return true;
    }
  }
  let x3 = Qx;
  let y3 = Qy;
  for (let i = 0; i < 8; i += 1) {
    x3 -= 1;
    y3 -= 1;
    if (x3 === Kx && y3 === Ky) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a === b && a + b > c) {
    return true;
  }
  if (a === c && a + c > b) {
    return true;
  }
  if (c === b && c + b > a) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let n = num;
  let res = '';
  const RomanNum = [
    { simb: 'X', value: 10 },
    { simb: 'IX', value: 9 },
    { simb: 'V', value: 5 },
    { simb: 'IV', value: 4 },
    { simb: 'I', value: 1 },
  ];
  for (let i = 0; i < RomanNum.length; i += 1) {
    while (n >= RomanNum[i].value) {
      res += RomanNum[i].simb;
      n -= RomanNum[i].value;
    }
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  function set(str, i) {
    if (i === numberStr.length - 1) {
      res += str;
    } else {
      res += `${str} `;
    }
  }
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        set('one', i);
        break;
      case '2':
        set('two', i);
        break;
      case '3':
        set('three', i);
        break;
      case '4':
        set('four', i);
        break;
      case '5':
        set('five', i);
        break;
      case '6':
        set('six', i);
        break;
      case '7':
        set('seven', i);
        break;
      case '8':
        set('eight', i);
        break;
      case '9':
        set('nine', i);
        break;
      case '0':
        set('zero', i);
        break;
      case '.':
        set('point', i);
        break;
      case ',':
        set('point', i);
        break;
      case '-':
        set('minus', i);
        break;
      default:
        break;
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    res = str[i] + res;
  }
  return res === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      res = i;
      break;
    }
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (digit === +String(num)[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const sumLeft = (ar, i) => {
    let res = 0;
    for (let y = 0; y < i; y += 1) {
      res += ar[y];
    }
    return res;
  };
  const sumRight = (ar, i) => {
    let res = 0;
    for (let y = i + 1; y < ar.length; y += 1) {
      res += ar[y];
    }
    return res;
  };
  for (let i = 1; i < arr.length; i += 1) {
    if (sumLeft(arr, i) === sumRight(arr, i)) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let row = 0;
  let col = 0;
  let rowEnd = size - 1;
  let colEnd = size - 1;
  let count = 1;
  while (row <= rowEnd && col <= colEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      arr[row][i] = count;
      count += 1;
    }
    row += 1;
    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = count;
      count += 1;
    }
    colEnd -= 1;
    for (let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = count;
      count += 1;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = count;
      count += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i += 1) {
      const top = left;
      const bottom = right;
      const topLeft = matrix[top][left + i];
      newMatrix[top][left + i] = matrix[bottom - i][left];
      newMatrix[bottom - i][left] = matrix[bottom][right - i];
      newMatrix[bottom][right - i] = matrix[top + i][right];
      newMatrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const copy = arr;

  function swap(items, leftIndx, rigthIndx) {
    const arrcopy = items;
    const a = arrcopy[leftIndx];
    arrcopy[leftIndx] = arrcopy[rigthIndx];
    arrcopy[rigthIndx] = a;
  }

  function partition(items, left, right) {
    const pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let y = right;
    while (i <= y) {
      while (items[i] < pivot) {
        i += 1;
      }
      while (items[y] > pivot) {
        y -= 1;
      }
      if (i <= y) {
        swap(items, i, y);
        i += 1;
        y -= 1;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
  quickSort(copy, 0, copy.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, n) {
  let count = 0;
  let res = '';
  function change(string, number) {
    let st1 = '';
    let st2 = '';
    let num = number;
    for (let i = 0; i < string.length; i += 2) {
      st1 += string[i];
    }
    for (let i = 1; i < string.length; i += 2) {
      st2 += string[i];
    }
    res = st1 + st2;
    count += 1;
    num -= 1;
    if (num > 0 && res !== string) {
      change(res, num);
    }
    if (res === string) {
      const a = number % count;
      change(res, a);
    }
  }
  change(str, n);
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
