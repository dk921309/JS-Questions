function printOne() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('1');
        return resolve();
      }, 100 * Math.random());
    });
  }
  
  function printTwo() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('2');
        return resolve();
      }, 100 * Math.random());
    });
  }
  
  function printThree() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('3');
        return resolve();
      }, 100 * Math.random());
    });
  }
  
  function printFour() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('4');
        return resolve();
      }, 100 * Math.random());
    });
  }

printOne().then(function(){
    return printTwo();}).then(function(){
        return printThree();}).then(function(){
            return printFour();}).then(function(){
                console.log("Bye");});