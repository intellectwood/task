'use strict';

function collect_last_element(collection) {
  let element_last;
  for (let item of collection){
      element_last=item;
  }
  
  return element_last;
}

module.exports = collect_last_element;
