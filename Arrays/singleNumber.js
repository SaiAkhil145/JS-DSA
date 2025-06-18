let singleNumber = (arr)=>{
    let xor = 0;
    for(let i=0;i<arr.length;i++){
        xor=xor^arr[i];
    }
    return xor;
}
console.log(singleNumber([1,1,2,2,4]))


// xor 0 0^1 1 1^1 0 0^2 2^2 0 0^4 4 