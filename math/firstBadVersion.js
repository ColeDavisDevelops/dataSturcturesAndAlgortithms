/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let mid = Math.floor(n / 2);

    while (true) {
      if (isBadVersion(mid)) {
        let counter = 0;
        while (isBadVersion(mid)) {
          if (isBadVersion(mid - counter)) {
            counter++;
          } else {
            return mid - counter + 1;
          }
        }
      } else {
        mid += Math.floor((n - mid) / 2);
      }
    }
  };
};
// test