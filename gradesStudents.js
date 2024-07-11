// Description: HackerRank solution for "Grading Students" problem
function gradingStudents(grades) {
    return grades.map((grade)=> {
        const newMultiOfFive = grade % 5;
        if(newMultiOfFive > 2 && grade >=38){
            return grade + 5 - newMultiOfFive;
        }
        return grade
    })  

}