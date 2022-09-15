Array.prototype.remove_ = function(integer_list, values_list){
    let newList = [];
    for (let i = 0; i < integer_list.length; i++) {
      if (!values_list.includes(integer_list[i])) {
        newList.push(integer_list[i]);
      }
    }
    return newList;
};