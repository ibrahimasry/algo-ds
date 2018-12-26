//quickSort with optimized pivot

function quickSort(arr, low, h){
    low = low === undefined ?  0 : low
    h   = h === undefined ? arr.length -1 : h
    if(low < h){ 
      const pivot = partiton(arr, low, h)
      quickSort(arr, low, pivot-1)
      quickSort(arr, pivot+1, h)
    }
  
    if(h-low === arr.length -1) return  arr
  }





function partiton(arr, low , h){
    let pivotLoc = Math.floor((h + low) /2)
    let pivot = arr[pivotLoc]
  
    swap(arr, pivotLoc, h)
    pivotLoc = h--
    while(h >= low){
      if(arr[low]> pivot && arr[h]< pivot ){
        swap(arr, low, h)
        h--
        low++
        continue
      }
  
      if(arr[low] > pivot)
           h--
       else 
         low++
      
    }
    if(arr[h] > pivot) {
      swap(arr, h, pivotLoc)
    }
    else {
      h++
      swap(arr, h, pivotLoc)
      }
    return h
  }
  
  
  
  
  
  function swap (arr, i , j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  