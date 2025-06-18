// [1,1,1,2,2,3,3,3] = [1,2,3] //two pointers

let removeDuplicates = (arr)=>{
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1; 
    
}
console.log(removeDuplicates([1,1,2,3]))

//two pointer i=0,j=1  i++  arr[i] = arr[j];
//[1,1,2,3] 

//two nested loops count==1 res = count=1 
 //0(1) 
 //0(n)