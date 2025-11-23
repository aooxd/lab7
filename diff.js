"use strict";

function diff(a, b) {
  const out = [];
  for (const val of a) {
    if (!b.includes(val)) out.push(val);
  }
  return out;
}

module.exports = { diff };
