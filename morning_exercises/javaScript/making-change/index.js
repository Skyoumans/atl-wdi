// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  price *= price;
  payment *= payment;
  let change = payment - price;
  if (change <= 0) {
    return [0, 0, 0, 0,];
  };
  else {
    const quarters = Math.floor(change / 25);
    change = change % 25;
    const dimes = Math.floor(change / 10);
    change = change % 10;
    const nickels = Math.floor(change / 5);
    change = change % 5;
    const pennies = Math.floor(change);
  };
  return [quarters, dimes, nickels, pennies];
  };
  
/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
