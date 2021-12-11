window.function = function (text1, text2, text3) {
  
  text1 = text1.value ?? "";
  text2 = text2.value ?? "";
  text3 = text3.value ?? "";
  
  const arr = [];
  arr.push(text1,text2,text3);
  return [...arr.value];
}
