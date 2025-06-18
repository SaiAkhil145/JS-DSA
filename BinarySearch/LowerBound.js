//lower bound is nothing but smallest element in the array which is greater than or equals to x we need to return its index.

const lowerBound = (arr,x)=>{
    let start=0,end= arr.length-1;
    let ans = arr.length;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>=x){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return ans;
}
console.log(lowerBound([1,2,3,4,5,7,8],7))