//upper bound is nothing but returning the smallest element greater than x

let upperBound = (arr,x)=>{
    let start=0,end=arr.length-1;
    let ans = arr.length;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>x){
            ans = mid;
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return ans;
}
console.log(upperBound([1,2,3,4,5,6,7],9))