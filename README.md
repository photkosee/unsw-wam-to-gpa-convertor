[Grade Definitions (UNSW)](https://www.student.unsw.edu.au/grade)

Currently only supporting HD|DN|CR|PS|FL Grades, which should cover most of the cases but it can still missing some edge case for which grade that I'm not sure whether it should be used to calculate GPA. Feel free to open a pull request for any potential improvement or any error/flaw in the logic.

## 7-point and 4-point scale GPA logic

I decide to use a formula from Macquarie University to calculate both 7-point and 4-point scale according to [this site](https://students.mq.edu.au/study/assessment-exams/weighted-average-mark/gpa-calculator). Since there are not many ways or a standard out there to convert from WAM to GPA. It is something that varies between colleges but it shouldn't be much difference.
