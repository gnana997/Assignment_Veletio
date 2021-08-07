// Write a function takes the time in digital format(9:15, 7:37 etc) and returns the 
// angle b/w the minute and the hour hand. It should return the smaller angle.

function angle(time){
    let hours = Number(time.split(":")[0]);
    let minutes = Number(time.split(":")[1]);

    let diff = Math.abs((hours * 30 + minutes * 0.5) - (minutes * 6));

    return Math.min(diff,360-diff);
}

console.log(angle("7:37"));
//6.5