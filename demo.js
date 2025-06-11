function timer(duration,callback){
  setTimeout(()=>{
    callback(`Timer of duration ${duration} ms finished`);
  },duration);
}
timer(2000,(message)=>{
  console.log(message);
});