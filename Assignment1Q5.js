var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];
function addAsynchronously(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(a + b);
    }, 10 * Math.random());
  });
}

var sum=0;
let i=0;


var n=numbersToBeAdded.length;
while(i<n-1)
{ 
   addAsynchronously(numbersToBeAdded[i],numbersToBeAdded[i+1]).then((value)=>{
     
    
       sum=sum+value;

     })
     i=i+2;

    
}
console.log(sum);
