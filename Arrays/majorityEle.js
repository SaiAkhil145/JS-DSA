//find the majority element whose occurence > n/3 times;

let majorityEle = (arr)=>{
    let count1=0,count2=0,ele1=0,ele2=0,n=arr.length;
    for(let i=0;i<n;i++){
        if(count1===0 && ele2!=arr[i]){
            count1=1;
            ele1=arr[i];
        }else if(count2===0 && ele1!=arr[i]){
            count2=1;
            ele2=arr[i];
        }else if(ele1===arr[i]){
            count1++;
        }else if(ele2===arr[i]){
            ele2=arr[i];
        }else{
            count1--,count2--;
        }
    }
    let res = []
    count1,count2=0,0;
    let major = Math.floor(n/3);
    for(let i=0;i<n;i++){
        if(ele1===arr[i]) count1++;
        if(ele2===arr[i]) count2++;
    }
    if(count1>major) res.push(ele1);
    if(count2>major) res.push(ele2);
    return res;
}

console.log(majorityEle([1,2,3,1,1,2,2,2])); 