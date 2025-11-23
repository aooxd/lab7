"use strict";

function dropOne(list, value) {
  const pos = list.indexOf(value);
  if (pos >= 0) list.splice(pos, 1);
}

module.exports = { dropOne };
