"use strict";

function dedup(arr) {
  const out = [];
  for (const x of arr) {
    if (!out.includes(x)) out.push(x);
  }
  return out;
}

module.exports = { dedup };
