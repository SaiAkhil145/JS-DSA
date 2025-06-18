//return all the triplets where sum of them is equals to target.

// let fourSum = (arr,target)=>{
//     let set = new Set();
//     let ans = [];
//     let n = arr.length;
//     for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             for(let k=j+1;k<n;k++){
//                 for(let l=k+1;l<n;l++){
//                     let sum = arr[i]+arr[j]+arr[k]+arr[l];
//                     if(sum===target){
//                         let quad = [arr[i],arr[j],arr[k],arr[l]];
//                         let temp = quad.join(' ');
//                         if(!set.has(temp)){
//                             set.add(temp);
//                             ans.push(quad);
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return ans;
// }

// let arr = [-2, -1, -1, 1, 1, 2, 2];
// let target = 0;
// console.log(fourSum(arr, target));



//better approach => fourth = -(arr[i]+arr[j]+arr[k]) use a hashset to find the fourth value present in array/set or not.


//optimal two pointer approach

let fourSum = (arr,target)=>{
    let ans=[];
    let n = arr.length;
    arr.sort((a,b)=>a-b);
    for(let i=0;i<n-2;i++){
        if(i>0 && arr[i]===arr[i-1]) continue;
        for(let j=i+1;j<n-3;j++){
            if(j>i+1 && arr[j]===arr[j-1]) continue;

            let left=j+1;
            let right=n-1;

            while(left<right){
                let sum = arr[i]+arr[j]+arr[left]+arr[right];
                if(sum<target){
                    left++;
                }else if(sum>target){
                    right--;
                }else{
                    ans.push([arr[i],arr[j],arr[left],arr[right]]);
                    left++;
                    right--;
                    while(left<right && arr[left]===arr[left-1]) left++;
                    while(left<right && arr[right]===arr[right+1]) right--;
                }
            }
        }
    }
    return ans;
}
let arr = [-2, -1, -1, 1, 1, 2, 2];
let target = 0;
console.log(fourSum(arr, target));