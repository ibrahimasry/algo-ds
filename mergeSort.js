function mergeSort(arr){
    if(arr.length <=1) return arr

    const mid = Math.floor(arr.length/2)
    const left  = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
  }
  
  
  
  function merge(arr1, arr2){
  
  const mergedArr = []
  let i = 0,
      j = 0
  
  while(i < arr1.length && j < arr2.length)
  {
    if(arr1[i] < arr2[j])
         mergedArr.push(arr1[i++])
    else 
         mergedArr.push(arr2[j++])
  }
  
  return [...mergedArr, ...arr1.slice(i), ...arr2.slice(j)]
  
  }  