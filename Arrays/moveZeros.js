
//[1,0,1,0,1,0] => [1,1,1,0,0,0];

let moveZeros = (arr)=>{
    let i=0,j=0;
    while(j<arr.length){
        if(arr[j]!=0){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
        }
        j++;
    }
    return arr;
}
console.log(moveZeros([1,0,1,0,1,0]))

//j<arr.length


//[0,0,0,1,1,1] =>[1,1,1,0,0,0]