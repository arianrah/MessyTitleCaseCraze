const titleCase = function (str) {
  let toTitle = str.toLowerCase();
  toTitle = toTitle.split(" ");
  for (let i = 0; i < toTitle.length; i++) {
    toTitle[i] = toTitle[i].charAt(0).toUpperCase() + toTitle[i].slice(1);
  }
  return toTitle.join(' ');
}