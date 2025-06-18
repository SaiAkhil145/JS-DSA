// // let map = new Map();
// // console.log(map)

// // //key-value

// // map.set(0,1);
// // map.set(1,2);
// // map.set(2,3);
// // console.log(map)

// // console.log(map.get(0))

// // console.log(map.has(6))

// //largest element in the array

// let largest = (arr)=>{
//     let max = -Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(largest([-1,0,2,-3,5]));


// /**
//  *   max = -infinity
//  *  -1 > -infinity max = -1;
//  *  0> -1 max = 0;
//  *  2>0 max = 2
//  *  -3>2 max =2;
//  *  5>2 max=5;
//  *  
//  */


//two pointers

//two pointers either both starting 0 0 index end mid end okati start


//reverse array

// let reverseArray = (arr)=>{
//     let res =[];
//     for(let i=arr.length-1;i>=0;i--){
//         res.push(arr[i]);
//     }
//     return res;
// }
// console.log(reverseArray([1,2,3,4,5]))


// [1,2,3,4,5];
// [5,4,3,2,1];
// [5,4,3,2,1];

//either 0th index 0 th end 

// let reverseArray = (arr)=>{
//     let start=0,end=arr.length-1;
//     while(start<=end){
//         [arr[start],arr[end]]=[arr[end],arr[start]];
//         start++;
//         end--;
//     }
    
//     return arr;
// }
// console.log(reverseArray([1,2,3,4,5]))


// // [1,2,3,4,5]  1 5 [5,2,3,4,1];
// // 2 4 [5,4,3,2,1] 
// //3


// [1,2,3,4,5] [1,2,3,2,1]


//[1,2,3,4,5]  //left rotate by one place [2,3,4,5,1] left rotate by one place 1 

// let leftRotatebyOneplace = (arr)=>{
//     let temp = arr[0];//1
//     for(let i=1;i<arr.length;i++){
//         arr[i-1]=arr[i] // 1-1 0th 2
//     }
//     arr[arr.length-1]=temp;
//     console.log(arr);

// }

// leftRotatebyOneplace([1,2,3,4,5])


/**temp
 *  [1,2,3,4,5]
 * [2,3,4,5]
 * 
 * arr[4] = temp;
 * 
 * 
 * 
 */


//k value places 3 places [1,2,3, =[4,5,1,2,3]  k > arr.length

//arr length 5  k 5  //rotate array
//arr length 5 k 10  2*5 
// 5%12 =2 


let rotatebyK = (arr,k)=>{
        let size = arr.length;
        k=k%size;
        rotate(arr,0,arr.length-1);
        rotate(arr,0,k-1);
        rotate(arr,k,size-1);
        console.log(arr);
}
let rotate = (arr,left,right)=>{
    while(left<=right){
        let temp = arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    left++,right--;
    }
    return arr;
}
rotatebyK([1,2,3,4,5],2)

//[1,2,3,4,5]
//[5,4,3,2,1]