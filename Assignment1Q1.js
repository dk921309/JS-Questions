function printOne(callback) {
    setTimeout(function () {
      console.log('1');
      return callback();
    }, 100 * Math.random());
  }
  
  function printTwo(callback) {
    setTimeout(function () {
      console.log('2');
      return callback();
    }, 100 * Math.random());
  }
  
  function printThree(callback) {
    setTimeout(function () {
      console.log('3');
      return callback();
    }, 100 * Math.random());
  }
  
  function printFour(callback) {
    setTimeout(function () {
      console.log('4');
      return callback();
    }, 100 * Math.random());
  }

printOne(function(){
    printTwo(function(){
        printThree(function(){
            printFour(function(){
                console.log("Bye");
            });
        });
    });
});