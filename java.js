var marks = +prompt("Enter your marks");
if (marks >= 90) {
    alert(`Your grade is A+, \nYour grade point is = 4.0`);
}else if (marks >= 85 && marks <= 89) {
    alert("Your grade is A \n Your grade point is = 4.0");
}else if (marks >= 80 && marks <= 84) {
    alert(`Your grade is A- \n Your grade point is = 3.8`);
}else if (marks >= 75 && marks <= 79) {
    alert(`Your grade is B+, \n your grade point is = 3.4`);
}else if (marks >= 71 && marks <= 74) {
    alert(`your grade is B \n your grade point is = 3.0`);
}else if (marks >= 68 && marks <= 70) {
    alert(`your grade is B- \n your grade point is = 2.8`);
}else if (marks >= 64 && marks <= 67) {
    alert(`your grade is C+ \n your grade point is = 2.4`);
}else if (marks >= 61 && marks <= 63) {
    alert(`your grade is C, \n your grade point is =  2.0`);
}else if (marks >= 57 && marks <= 60) {
    alert(`your grade is C- , \n your grade point is =  1.8`)
}else if  (marks >= 53 && marks <= 56) {
    alert(`your grade is D+ \n your grade point is =  1.4`);
}else if (marks >= 50 && marks <= 52) {
    alert(`your grade is D , \n your grade point is =  1.0`);
}else if (marks < 50) {
    alert(`your grade is F, \n Your grade point is =  0.0`);
}