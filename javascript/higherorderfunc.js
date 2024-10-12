function repeat(fn, times) {
    return function() {
      for (let i = 0; i < times; i++) {
        fn(); 
      }
    };
  }
  
 
  function sayHello() {
    console.log("Hello!");
  }
  
  let b = repeat(sayHello, 4);  
  b();  
  