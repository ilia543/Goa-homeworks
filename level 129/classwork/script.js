function elevatorDistance(array) {
    let result = 0
    array.reduce((acc, elm) => {
      if (acc >= elm){
        result += (acc - elm)
        return elm
      }else{
        result += (elm - acc)
        return elm
      }
    })
    return result
  }




////////////////////////////////////////////////////////////////////////////////////////////////////////////




function replace(s) {
    let result = []
    for (i in s){
      let ii = /[aeiouAEIOU]/.test(s[i])
      if(ii){
        result.push("!")
      }else{
        result.push(s[i])
      }
    }
    return result.join("")
  }




////////////////////////////////////////////////////////////////////////////////////////////////////////////




// def count_char_occurrences(strng, char):
//     result = 0
    
//     for i in strng:
//         if i == char:
//             result += 1
//     return result



////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function oddCount(n){
//     return Math.floor(n / 2)
//   }




////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function typeValidation(v, type) {
//     return typeof v === type
//   }


