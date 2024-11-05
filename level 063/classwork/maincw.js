// function hi(name = "who?"){
//     console.log("hello" + name);
// }

// hi();
// hi("sigma");

function filter(list1){
    const list2 = [];
    for (let number in list1) {
        if (i % 2 === 0){
            list2.push(number);
        }
    }
    return list2;
}

filter([1,2,3,4,5,6,7,8,9]);

function filter_list(l) {
    const lst2 = [];
    for (num in l) {
      if (num % 2 === 0){
        lst2.push(num);
      }
    }
    return lst2
  }
  
  console.log(filter_list([1,2,4,3,2,5,6,8,3,37,8,467,"da","f","fad"]))