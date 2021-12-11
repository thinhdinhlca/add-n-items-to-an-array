window.function = function (arr) {
  if (arr.value === undefined) return undefined;
  return [...arr.value].reverse();
}
