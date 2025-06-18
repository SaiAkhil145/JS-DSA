//Count subarrays with given xor K

let countSubs = (arr,k)=>{
    let count=0;
    let xor=0;
    let map = new Map();
    map.set(0,1);
    for(let i=0;i<arr.length;i++){
        xor^=arr[i];

        let xr = xor^k;
        if(map.has(xr)){
            count+=map.get(xr);
        }
        map.set(xor,(map.get(xor) || 0) +1);
       
    }
    return count;
}
console.log(countSubs([4, 2, 2, 6, 4], 6));