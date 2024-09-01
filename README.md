# UNSW WAM to GPA Convertor

Struggling to convert your WAM to GPA? No worries, this app is here to help! Simply upload your UNSW academic statement, and we'll handle the rest, giving you your GPA instantly—no manual calculations needed!

This app is now live at https://unsw-wam-to-gpa-convertor.vercel.app/

## Table of Contents

- [Inspiration](#inspiration)
- [What this does?](#what-this-does)
- [Note](#note)
- [7-point and 4-point scale GPA logic](#7-point-and-4-point-scale-gpa-logic)
- [Reflection](#reflection)
- [Disclaimer](#disclaimer)
- [Built With](#built-with)
- [Author](#author)
- [Deployment](#deployment)
- [Contribution](#contribution)

## Inspiration

Since UNSW uses the WAM system, which is different from most other universities, converting WAM to GPA can be confusing. Even with other conversion tools, students still need to manually count their credits, the number of courses with specific grades, and more, which can be a hassle. I wanted to create something that automates most of this process, and that’s how this idea came about.

## What this does?

By simply uploading a UNSW academic statement, the app will extract the necessary information for all completed courses and calculate your GPA using that information.

## Note

[Grade Definitions (UNSW)](https://www.student.unsw.edu.au/grade)

Currently, only HD, DN, CR, PS, and FL grades are supported. This should cover most cases, but there may still be some edge cases where it's unclear whether a grade should be used to calculate GPA. Feel free to open a pull request for any potential improvements or to report any errors or flaws in the logic.

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


## Reflection

There weren’t many challenges since this is a relatively simple project. However, if I had to highlight one, the main challenge would be extracting all the course data from a PDF file. Initially, I tried using the pdf.js library, but it didn’t work as well as I had hoped. So, I switched to the react-pdftotext library, which was much easier to work with. Once I was able to extract the data from the PDF, I used regex to filter out the specific course data I needed. All of these implementations are contained in `./app/logic.ts`.


## Disclaimer

This website seeks to be a general tool for converting UNSW WAM to GPA, but its information has not been officially endorsed and is subject to change or correction. This is not official advice, and you should confirm any statements are correct before relying on it. You should confirm with official resources endorsed by UNSW and any information found here may not necessarily represent those of the School, Faculty, or University (UNSW).

Users are responsible for double-checking their GPAs and I have no responsibility on whether the information shown is accurate. This is a personal project and I do not represent the School, Faculty, or University (UNSW).

## Built With

- Next.js - Development environment
- Tailwind CSS - CSS framework
- shadcn/ui - User Interface library
- react-pdftotext - PDF extraction library

## Author

Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)

## Deployment

This project is deployed to Vercel:

https://unsw-wam-to-gpa-convertor.vercel.app/

## Contribution

Pull requests are welcome for any potential improvements, as well as for any errors or edge cases you might find. The course extraction logic is located in `./app/logic.ts`. If you identify any issues, please feel free to reach out or open a pull request.
