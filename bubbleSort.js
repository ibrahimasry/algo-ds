

function bubbleSort(arr){
    let isSwap;
    let wall = arr.length -1;
    do
     {
        isSwap = false
        for(let i = 0; i < wall; i++)
        {
          const current = arr[i],
                next = arr[i+1]
  
          if(current > next) 
          {
              [arr[i], arr[i+1]] = [next, current]
              isSwap = true
          }
      }
    } while(isSwap && wall--)
  
    return arr
  }
  
  
  console.log(bubbleSort([4,100,65,5,5,4]))
  