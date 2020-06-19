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

            // square

// square rhombus
/**
 *
 * @param {number} side
 * @param {number} height
 * @returns {number}
 */
function calculateSquareRhombus1( side , height ) {
return side * height;
}

/**
 *
 * @param {number} diagonal1
 * @param {number} diagonal2
 * @returns {number}
 */
function calculateSquareRhombus2( diagonal1 , diagonal2) {
return diagonal1 * diagonal2 / 2 ;
}
// square cylinder

function calculateSquareCylinder( radius , height ) {
return 2 * Math.PI * radius * (height + radius);
}

// square triangle
/**
 *
 * @param {number} side
 * @param {number} height
 * @returns {number}
 */
function calculateSquareTriangle( side , height ) {
return side * height / 2 ;
}

// square rectangle
/**
 *
 * @param {number} width
 * @param {number} length
 * @returns {number}
 */
function calculateSquareRectangle( width , length ) {
return width * length ;
}