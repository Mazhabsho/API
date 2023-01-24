 //setTimeout();

// function showTime(){
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
//     setTimeout(showTime,1000);
// }
// showTime()

// let count = 0;
  
// const intervalId = setInterval(() => {
//   console.log('HELLO GEEK');
//   count++;
  
//   if (count === 5) {
//     console.log('Clearing the interval id after 5 executions');
//     clearInterval(intervalId);
//   }
// }, 1000);

function sayName(name, cb){
    console.log(`Hello, ${name}`);
    cb(name);
};

function sayHello(n){
    return n;
}

sayName('Mazhabsho',sayHello);