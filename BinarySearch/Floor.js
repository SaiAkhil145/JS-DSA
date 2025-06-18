//floor is nothing but the larget element <= x
//if we found mid <=x we need to check in the rightside to get the largest element.

const Floor = (arr,x)=>{
    let start=0,end=arr.length-1;
    let ans = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]<=x){
            ans= arr[mid];
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return ans;
}
console.log(Floor([10,20,30,40,50,60,70,80,90,100],77))