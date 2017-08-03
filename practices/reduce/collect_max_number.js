'use strict';

function collect_max_number(collection) {
  let max_num;
  for (let item of collection)
  {
      if(max_num==null)  max_num=collection[0];
      if(max_num < item) max_num=item;
  }
  return max_num;
}

module.exports = collect_max_number;
