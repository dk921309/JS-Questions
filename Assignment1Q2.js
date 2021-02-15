var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];
function addAsynchronously(a, b, callback) {
  setTimeout(function () {
    return callback(null, a + b);
  }, 10 * Math.random());
}

var n=numbersToBeAdded.length;
var sum=0;
let temp=0;
let i=0;
while(i<(n-1))
{  
  addAsynchronously(numbersToBeAdded[i],numbersToBeAdded[i+1],function(val1,val2){
  sum=sum+val2;
  temp=sum;
  //console.log(sum);
})

i=i+2;

}

console.log(sum);
