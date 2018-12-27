//radix sort with positive numbers

function radixSort(arr){
    let buckets = Array.from({length:10}, ()=>[])
    const maxLength = getMaxLength(arr)
    for(let i = 0 ; i <= maxLength; i++){
      for(let j of arr){
        const digitBucket = getDigit(j, i)
        buckets[digitBucket].push(j)
      }
      arr = buckets.flat()
      buckets = Array.from({length:10}, ()=>[])
    }
  
    return arr
  }
  function getDigit(num, pos=0){
    return Math.abs(Math.floor((num / 10 ** pos) % 10))
  }
  
  function getMaxLength(arr){
    let max = -Infinity
  
    for(let num of arr) max = Math.max(num , max)
    return Math.floor(Math.log10(max))
  }
  
  //console.log(radixSort([1330,329,30,3,3,2,1,10]))
  