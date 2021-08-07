// You are running a coaching institute and want to divide the new batch of students into different sections. 
// You took an entrance exam and will be dividing students based on the scores of that test.
// You want to make sections of approximately equal size. You will also make the sections according to the ranks 
// so for example, students with 1-20 ranks in section1, 20-40 ranks in section2 etc.Given an unsorted list of 
// marks of 10000 students [32, 11, 125...]. Your task is to divide these students into 16 sections in linear 
// time i.e. in O(n) complexity or less


// I did not understand the exact format of the output
// I thought of using bucket sort to achieve the task in linear time but i didn't get how to divide ranges
// So I tried achieving the task using normal sort function in 
//O(NlogN) Time Complexity

function DivideSections(marks, sections){
    marks.sort((a,b) => a - b);
    let result = {};
    let factor = Math.floor(marks.length/sections);
    for(let i = 1; i <= sections; i++){
        let starting = 0 + ((i-1) * factor);
        let ending = factor*i;
        result[`Section${i}`] = marks.slice(starting,ending)
    }
    return result;
}