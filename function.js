window.function = function (input_arr,item,num_add) {
  
  if (input_arr.value === undefined) return undefined;
  item = item.value ?? "";
  num_add = num_add.value ?? "1";
  
  const dup_arr = Array(num_add).fill(item);
  
  const res_arr = [];
  
  //res_arr = input_arr.concat(dup_arr);
  
  return dup_arr;
}
