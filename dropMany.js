"use strict";

function dropMany(list, ...values) {
  for (const v of values) {
    const idx = list.indexOf(v);
    if (idx >= 0) list.splice(idx, 1);
  }
}

module.exports = { dropMany };
