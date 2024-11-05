let arr = [1,3,5,7,-4,20,-40]

function positiveSum(arr) {
    for (i = 0; i <= arr.length; i ++){
      if (i > 0){
        let lst = []
        lst.push(i)
        return sum(lst)
      }else{
        return ""
      }
    }
}
