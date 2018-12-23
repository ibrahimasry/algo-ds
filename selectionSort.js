const selection = (arr) =>{
    for(let i = 0; i < arr.length -1 ; i++){
      let lowest = i 
      for(let j = i+1; j < arr.length; j++) if (arr[j] < arr[lowest]) lowest = j
   
      if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
   
    return arr
   
   }
   console.log(selection([4,1,65,-1,2000,28,8,76,5,5,4]))