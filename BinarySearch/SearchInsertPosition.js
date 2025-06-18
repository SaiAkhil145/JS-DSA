//we need to find the insert position of x if there is x is present then return its index. else return insert position.

const searchInsertPosition = (arr,x)=>{
    let start=0,end=arr.length-1;
    let ans = arr.length;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>=x){
            ans = arr[mid];
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return ans;
}
console.log(searchInsertPosition([10,20,30,40,50,60,70,80,90,100],77))