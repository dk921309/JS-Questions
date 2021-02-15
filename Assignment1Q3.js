var temp;
const printafter1Sec = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 1000)
        temp=i;
      }
      setTimeout(()=>{console.log("Bye")},temp*1000);

      
  }
  printafter1Sec(50);
