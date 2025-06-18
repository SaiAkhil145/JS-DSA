let maximumOnes = (arr)=>{
    let count=0,maxCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1) {
            count++;
            maxCount = maxCount>count ? maxCount : count;
        }else{
            count=0;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1) {
            count++;
            maxCount = maxCount>count ? maxCount : count;
        }else{
            count=0;
        }
    }
    return maxCount;
}
console.log(maximumOnes([1,1,1,1,1,1,0,1,1,1,1]))