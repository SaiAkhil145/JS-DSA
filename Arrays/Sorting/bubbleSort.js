
let bubblesort = (arr)=>{
    let n = arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){ //10 9  9 10 
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubblesort([10,9,8,7,6,5,4,3,2,1]))



[10,9,8,7,6,5,4,3,2,1]
//10 9 9 10 10 8 8 10 7 7 10 10 6 6 10
[9,8,7,6,5,4,3,2,1,10]