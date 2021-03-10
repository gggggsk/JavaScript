function digitalClock(t) {
    var minutes = Math.floor(t / 60);
    var hours = Math.floor(minutes / 60);
    var sec = Math.floor(t % 60)
    
    return Math.floor(minutes / 60) +':'+ Math.floor(t / 60 - 60) +':'+ Math.floor(t % 60) 
    + ("\n")+ t + ' seconds is ' + Math.floor(minutes / 60) + ' hour ' + Math.floor(t / 60 - 60) + ' mins' + ', ' + Math.floor(t % 60) + ' secs.'

   
} 

console.log(digitalClock(5025));
console.log(digitalClock(61201));
kbconsole.log(digitalClock(87000));