export function groupBy(array, prop, select) {
    return array.reduce(function(groups, item) {
      const val = item[prop]
      groups[val] = groups[val] || 0
      groups[val]+=item[select];
      return groups
    }, {});
}
export function selectValues(array, prop, select){
  const values = groupBy(array, prop, select);
  let valArray = [];
  let valKeys = [];
  for(let key in values){
    valArray.push(values[key]);
    valKeys.push(key);
  }
  return {valArray, valKeys};
}

export default groupBy;