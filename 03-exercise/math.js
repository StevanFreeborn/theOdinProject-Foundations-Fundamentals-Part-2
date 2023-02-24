/* Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you.
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 *
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;

module.exports = { a, b, c, d, e };
