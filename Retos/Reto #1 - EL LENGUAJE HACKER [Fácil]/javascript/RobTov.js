"use strict";

const leetCode = {
  a: "4",
  b: "I3",
  c: "[",
  d: ")",
  e: "3",
  f: "|=",
  g: "&",
  h: "#",
  i: "1",
  j: ",_|",
  k: ">|",
  l: "1",
  m: "//\\",
  n: "^/",
  o: "0",
  p: "|*",
  q: "(_,)",
  r: "I2",
  s: "5",
  t: "7",
  u: "(_)",
  v: "/",
  w: "//",
  x: "><",
  y: "j",
  z: "2",
  1: "L",
  2: "R",
  3: "E",
  4: "A",
  5: "S",
  6: "b",
  7: "T",
  8: "B",
  9: "g",
  0: "o",
};

const leet = (text) => {
  let outStr = "";
  text
    .toLowerCase()
    .split("")
    .forEach((ch) => {
      if (Object.keys(leetCode).includes(ch)) {
        outStr += leetCode[ch];
      } else {
        outStr += ch;
      }
    });

  console.log(outStr);
};

leet("Hello there!. My name is Rob, I'm solving Ex1 using Javascript");
