/**
 *
 * @param {number} age
 * @returns {boolean}
 */
function isAdult(age) {
return age >= 18;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function checkMultiplicity( a , b ) {
return a % b === 0;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function triangle( a , b , c ) {
return a + b > c && b + c > a && c + a > b ;
}