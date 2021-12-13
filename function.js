window.function = function (input_arr,item,num_add) {
  
  if (input_arr.value === undefined) return undefined;
  item = item.value ?? "";
  num_add = num_add.value ?? "1";
  
  const dup_arr = Array(num_add).fill(item);
  
  dup_arr = dup_arr.concat(input_arr);
  
  return dup_arr;
}
