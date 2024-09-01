### Table of Contents

- [Inspiration](#inspiration)
- [What this does?](#what-this-does)
- [Built With](#built-with)
- [Author](#author)

# UNSW WAM to GPA Convertor


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
- shadcn/ui - User Interface library
- react-pdftotext - PDF extraction library

## Reflection

There weren’t many challenges since this is a relatively simple project. However, if I had to highlight one, the main challenge would be extracting all the course data from a PDF file. Initially, I tried using the pdf.js library, but it didn’t work as well as I had hoped. So, I switched to the react-pdftotext library, which was much easier to work with. Once I was able to extract the data from the PDF, I used regex to filter out the specific course data I needed. All of these implementations are contained in `./app/logic.ts`.

## Contribution

Pull requests are welcome for any potential improvements, as well as for any errors or edge cases you might find. The course extraction logic is located in `./app/logic.ts`. If you identify any issues, please feel free to reach out or open a pull request.

## Disclaimer

This website seeks to be a general tool for converting UNSW WAM to GPA, but its information has not been officially endorsed and is subject to change or correction. This is not official advice, and you should confirm any statements are correct before relying on it. You should confirm with official resources endorsed by UNSW and any information found here may not necessarily represent those of the School, Faculty, or University (UNSW).

Users are responsible for double-checking their GPAs and I have no responsibility on whether the information shown is accurate. This is a personal project and I do not represent the School, Faculty, or University (UNSW).

## Author

Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)
