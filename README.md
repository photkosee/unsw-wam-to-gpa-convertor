### Table of Contents

- [Inspiration](#inspiration)
- [What this does?](#what-this-does)
- [Built With](#built-with)
- [Author](#author)

## Inspiration


## What this does?

[Grade Definitions (UNSW)](https://www.student.unsw.edu.au/grade)

Currently only supporting HD|DN|CR|PS|FL Grades, which should cover most of the cases but it can still missing some edge case for which grade that I'm not sure whether it should be used to calculate GPA. Feel free to open a pull request for any potential improvement or any error/flaw in the logic.

## 7-point and 4-point scale GPA logic

I decided to use a formula from Macquarie University to calculate both the 7-point and 4-point scales, according to [this site](https://students.mq.edu.au/study/assessment-exams/weighted-average-mark/gpa-calculator). Since there aren't many standardized methods for converting WAM to GPA, this process can vary between colleges, but the differences should be minimal. They are implemented in `./app/logic.ts`.

### 7 point scale

GPA = (7V + 6W + 5X + 4Y + 0F) divided by E
- V: number of credit points gained at HD
- W: number of credit points gained at D
- X: number of credit points gained at Cr
- Y: number of credit points gained at P
- E: total number of credit points for which a student is effectively enrolled (excluding units with W or S)
- F: number of credit points gained with an F grade

### 4 point scale

GPA = (4W + 3X + 2Y + 0F) divided by E
- W: number of credit points gained at HD and D
- X: number of credit points gained at Cr
- Y: number of credit points gained at P
- E: total number of credit points for which a student is effectively enrolled (excluding units with W or S)
- F: number of credit points gained with an F grade

## Built With

- Next.js - Development environment
- Tailwind CSS - CSS framework
- react-pdftotext - PDF extraction library

## Author

Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)
