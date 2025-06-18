//ceil is nothing but the smallest element greater than equals to x

const ceil =(arr,x)=>{
    let start=0,end=arr.length-1,ans=-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>=x){
            ans=arr[mid];
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return ans;
}
console.log(ceil([10,20,30,40,50,60,70,80,90,100],77))