let firstName = 'Unoaku';
let lastName = 'Anusi';
const fullName = `${firstName} ${lastName}`;
console.log (fullName)

//Scores
let task1 = 8;
let task2 = 9;
let task3 = 10;
const totalscore = task1 + task2 + task3;
const averagescore = totalscore / 3;
console.log(totalscore)
console.log(averagescore)

//Grade Assignment
let grade= '';
if (averagescore >= 9)
    {grade= 'A';}
else if (averagescore >= 8 )
        {grade='B';}
else if (averagescore >= 7 )
        {grade= 'C';}
else if (averagescore >=6 )
        {grade='D';}
else {grade='E';}
    console.log(grade);

    //Message based on grade
let message = ''
switch (grade) {
    case 'A':
        message= 'Excellent Performance!';break;
    case 'B':
        message= 'Great job! Keep aiming high.';break;
    case 'C':
        message= 'You are close. Keep working at it.';break;
    case 'D':
        message= 'Do not give up. You can do better next time.';break;
    default:
        message= 'You failed.';    
}

//Template literals
const result = `Student Name: ${fullName}
Task 1: ${task1}, 
Task 2: ${task2},
Task 3: ${task3}, 
Average: ${averagescore.toFixed(2)} 
Final Grade: ${grade}
Message: ${message}`
console.log(result)