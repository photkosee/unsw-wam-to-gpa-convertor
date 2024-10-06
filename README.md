# UNSW WAM to GPA Convertor

Struggling to convert your WAM to GPA? No worries, this app is here to help! Simply upload your UNSW academic statement, and we'll handle the rest, giving you your GPA instantly—no manual calculations needed!

This app is now live at https://unsw-wam-to-gpa-convertor.vercel.app/

## Table of Contents

- [Inspiration](#inspiration)
- [What this does?](#what-this-does)
- [Note](#note)
- [7-point and 4-point scale GPA logic](#7-point-and-4-point-scale-gpa-logic)
- [Disclaimer](#disclaimer)
- [Built With](#built-with)
- [Author](#author)
- [Deployment](#deployment)
- [Contribution](#contribution)
- [Reflection](#reflection)

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

## Reflection

There weren’t many challenges since this is a relatively simple project. However, if I had to highlight one, the main challenge would be extracting all the course data from a PDF file. Initially, I tried using the pdf.js library, but it didn’t work as well as I had hoped. So, I switched to the react-pdftotext library, which was much easier to work with. Once I was able to extract the data from the PDF, I used regex to filter out the specific course data I needed. All of these implementations are contained in `./app/logic.ts`.

### Feedback from Promoting

There were no technical issues after deployment, and when I promoted it on LinkedIn, I got a lot of positive feedback from friends who found it useful. At that time, I hadn't added Vercel Analytics to my project, so I didn't know the exact number of users, but I estimated there were around 70+. I then added Vercel Analytics to track the traffic (I should have done this earlier but didn’t expect so many users). After that, I decided to promote it more because I thought it would be helpful for other students. I made a post on Reddit (under the UNSW tag) and got over 100 visitors in less than a day, which worked well for promotion.

However, I ran into one issue I didn’t expect: someone commented that it was a phishing attempt (though I’m not sure if they were serious), and the comment got a few upvotes. I asked a few friends, and none of them thought the project seemed suspicious. The academic statements I ask users to upload don’t contain sensitive information. I also mentioned in the Reddit post that I don’t collect any user data, and I even offered to let people check my code if they were concerned (and it is open source here). This has been a good reminder to think about how to make a project feel safe to users, even though most people didn’t seem to have any concerns. But it is a valid concern since my Reddit account is new, and I never post anything, making it much more anonymous compared to my LinkedIn account. Especially on Reddit, it's hard to trust random people on the internet asking us to click on random links. I'll have to be more careful next time.
