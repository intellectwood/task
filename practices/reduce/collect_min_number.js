'use strict';

function collect_min_number(collection) {
  let min_num;
  for (let item of collection)
  {
      if(min_num==null)  min_num=collection[0];
      if(min_num > item) min_num=item;
  }
  return min_num;
}

module.exports = collect_min_number;

