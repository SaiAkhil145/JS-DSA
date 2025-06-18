//nested loops;
// let twoSum = (arr,target)=>{
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let sum=arr[i]+arr[j];
//             if(sum===target){
//                 res.push(i);
//                 res.push(j);
//             }
//         }
//     }
//     return res.join(' ');
// }

// console.log(twoSum([1, 6, 2, 10, 3],10))
//brute 


//on2  0(2) 

//better approach

// let twoSum = (arr,target)=>{
//     arr.sort((a,b)=>a-b);
//     let left=0,right=arr.length-1
//     while(left<=right){
//         let sum = arr[left]+arr[right];
//         if(sum===target){
//             return [arr[left],arr[right]];
//         }else if(sum>target){
//             right--;
//         }else{
//             left++;
//         }
//     }
//     return [-1,-1];
// }
// console.log(twoSum([1, 6, 2, 10, 3],7))

//[1,2,3,6,10];
//1+10 11 7 

//

//hashing map 

let twoSum = (arr,target)=>{
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        let complement = target-arr[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }else{
            map.set(arr[i],i);
        }
    }
    return [-1,-1];
}
console.log(twoSum([1, 6, 2, 10, 3],7))

//[2,7,10,11] target 9 

//9-2 =>7


//[1,6,2,10,3]
//7-1 = 6


//7-6 1

