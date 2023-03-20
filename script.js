let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge

let grade
if (inputGrade <= 100 && inputGrade >= 80) {   
     grade = "A";} 
     else if (inputGrade <= 79 && inputGrade >= 60) {   
        grade = "B";} else if (inputGrade <= 59 && inputGrade >= 50) {  
              grade = "C";}
               else if (inputGrade <= 49 && inputGrade >= 40) {  
                  grade = "D";} 
                  else if (inputGrade <= 39 && inputGrade >= 0) {  
                      grade = "E";} else {
    grade = 'Grade not in range'
}

finalOutput=grade
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
const limit = 70;
const points = Math.floor((inputSpeed - limit) / 5);
let output
  if (inputSpeed < limit) {    output = "Ok";
  } else if (points < 12) {
    output = "Points: " + points;
  } else
   output = "License suspended";

finalOutput=output
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
function getNetSalary(grossSalary) {
    let taxableIncome = grossSalary - 2400;
    let paye = 0;
    let nssf = grossSalary * 0.06;
    let nhif = 0;    
     if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1    
    } 
    else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        paye = taxableIncome * 0.25   
     } 
     else if (taxableIncome > 32333) {
        paye = taxableIncome * 0.3    
    }    if (grossSalary <= 5999) {
        nhif = 150
    } else if (grossSalary <= 7999) {
        nhif = 300
    } else if (grossSalary <= 11999) {
        nhif = 400
    } else if (grossSalary <= 14999) {
        nhif = 500
    } else if (grossSalary <= 19999) {
        nhif = 600
    } else if (grossSalary <= 24999) {
        nhif = 750
    } else if (grossSalary <= 29999) {
        nhif = 850
    } else if (grossSalary <= 34999) {
        nhif = 900
    } else if (grossSalary <= 39999) {
        nhif = 950
    } else if (grossSalary <= 44999) {
        nhif = 1000
    } else if (grossSalary <= 49999) {
        nhif = 1100
    } else if (grossSalary <= 59999) {
        nhif = 1200
    } else if (grossSalary <= 69999) {
        nhif = 1300
    } else if (grossSalary <= 79999) {
        nhif = 1400
    } else if (grossSalary <= 89999) {
        nhif = 1500
    } else if (grossSalary <= 99999) {
        nhif = 1600
    } else if (grossSalary > 100000) {
        nhif = 1700
    }    // calculate the net salary
    let netSalary = grossSalary - paye - nssf - nhif;
    return netSalary  }

finalOutput = getNetSalary(inputSalary)
document.getElementById('salary-id').append(finalOutput)
})