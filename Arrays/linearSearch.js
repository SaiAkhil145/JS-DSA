// [1,2,3,4,5,6,7,8,9]; 9 

let linearSearch = (arr,target)=>{
    for(let i=0;i<arr.length;i++){
        for(let i=0;i<arr.length;i++){
            for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5,6],3))

//single 0(n) 0(n^2) 0(n3)