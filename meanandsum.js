let presetArray = [1,6,3,9,5];
let sumNum = 0;
let meanNums = 0;

function findvalues(){
    for (let i = 0; i < presetArray.length; i++) {
        sumNum += presetArray[i]
        
    }
    meanNums = sumNum/presetArray.length
    alert("The Sum of numbers in the array is " +sumNum+ " and the mean of the numbers in the array is " +meanNums);
}