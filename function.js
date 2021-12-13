window.function = function (input_arr,item,num_add) {
  
  if (input_arr.value === undefined) return undefined;
  item = item.value ?? "";
  num_add = num_add.value ?? "1";
  
  var dup_arr = Array(num_add).fill(item);
  
  var new_arr = input_arr.value;
  
  dup_arr = dup_arr.concat(new_arr);
  
  return dup_arr;
}
