// let threeSum = (arr)=>{
//     let n=arr.length;
//     arr.sort((a,b)=>a-b);
//     let ans = [];

//     for(let i=0;i<n-2;i++){
//         //ignore duplicates 
//         if(i>0 && arr[i]===arr[i-1]) continue;

//         let j=i+1;
//         let k=n-1;
//         while(j<k){
//             let sum = arr[i]+arr[j]+arr[k];
//             if(sum<0){
//                 j++;
//             }else if(sum>0){
//                 k--;
//             }else{
//                 ans.push([arr[i],arr[j],arr[k]]);
//                 j++;
//                 k--;
//                 while(j<k && arr[j]===arr[j-1]) j++;
//                 while(j<k && arr[k]===arr[k+1]) k--;
//             }
//         }
//     }
//     return ans;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


//brute =>{}


// let threeSum = (arr)=>{
//     let set = new Set();
//     let ans = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             for(let k=j+1;k<arr.length;k++){
//                 let sum = arr[i]+arr[j]+arr[k];
//                 if(sum===0){
//                     let temp = [arr[i],arr[j],arr[k]].sort((a,b)=>a-b);
//                     let quad = temp.join(' ');


//                     if(!set.has(quad)){
//                         set.add(quad);
//                         ans.push(temp);
//                     }
//                 }
//             }
//         }
//     }
//     return ans;
// }


// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


//better => third = -(arr[i]+arr[j]); in this we will ignore 0(n^3) time complexity.

let threeSum = (arr)=>{
    let ans = [];
    let set = new Set();
    let n = arr.length;
    for(let i=0;i<n;i++){
        let hashSet = new Set();
        for(let  j=i+1;j<n;j++){
            let third = -(arr[i]+arr[j]);
            if(hashSet.has(third)){
                let triplet = [arr[i],arr[j],third];
                let temp = triplet.join(' ');

                if(!set.has(temp)){
                    set.add(temp);
                    ans.push(triplet);
                }
            }
            hashSet.add(arr[j]);
        }
        
    }
    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));