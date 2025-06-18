//return first and last occurence of the x -> we can achieve this by using lower bound and upper bound
//but there is some slight edge case here if the lower bound is n || arr[ld]!=x return {-1,-1};


const firstAndLastOccurance = (arr,x)=>{
    let first = firstOccurence(arr,x)
    if(first===-1) return [-1,-1];
    return [first,lastOccurence(arr,x)];
}
const firstOccurence = (arr,x)=>{
    let start=0,end=arr.length-1;
    let first=-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===x){
            first = mid;
            end = mid-1;
        }
        else if(arr[mid]>x){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return first;
}
const lastOccurence = (arr,x)=>{
    let start=0,end=arr.length-1,last = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===x){
            last = mid;
            start=mid+1;
        }
        else if(arr[mid]>x){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return last;
}

const countOccurences = (arr,x)=>{
    let count = firstAndLastOccurance(arr,x);
     if(count[0]==-1) return 0;
     return count[1]-count[0]+1;
}

console.log(countOccurences([2,3,4,6,6,6,6,6,6,6,7,8],6))
