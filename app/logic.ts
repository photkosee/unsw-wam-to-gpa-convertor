import { Course } from "./types";

export const extractCourseInfo = (text: string, setGPA4: React.Dispatch<number>, setGPA7: React.Dispatch<number>) => {
  const regex =
    /([A-Z]{4})\s+(\d{4})\s+([\w\s&-]+?)\s+(\d{1,2}\.\d{2})?\s+(\d{1,2}\.\d{2})?\s+(\d{1,3})?\s+(HD|DN|CR|PS|FL)?/g;

  const extractedCourses: Course[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    extractedCourses.push({
      prefix: match[1], // Course prefix (e.g., COMP, MATH)
      number: match[2], // Course number (e.g., 1511, 1131)
      title: match[3], // Course title
      attemptedUnits: match[4], // Attempted units
      passedUnits: match[5], // Passed units
      mark: match[6], // Mark or 'T' for transfer credits
      grade: match[7] || "", // Grade, optional if mark is 'T'
    });
  }

  console.log(extractedCourses);

  convert7points(extractedCourses, setGPA7);
  convert4points(extractedCourses, setGPA4);
};

const convert7points = (courses: Course[], setGPA7: React.Dispatch<number>) => {
  let totalCourse = 0;
  let hd = 0;
  let d = 0;
  let cr = 0;
  let p = 0;
  let f = 0;

  courses
    .filter((course) => course.grade && course.mark)
    .forEach((course) => {
      totalCourse++;

      switch (course.grade) {
        case "HD":
          hd++;
          break;
        case "DN":
          d++;
          break;
        case "CR":
          cr++;
          break;
        case "PS":
          p++;
          break;
        case "FL":
          f++;
          break;
        default:
          break;
      }
    });

  const gpa = (hd * 7 + d * 6 + cr * 5 + p * 4 + f * 0) / totalCourse;
  setGPA7(gpa);
};

const convert4points = (courses: Course[], setGPA4: React.Dispatch<number>) => {
  let totalCourse = 0;
  let hd_d = 0;
  let cr = 0;
  let p = 0;
  let f = 0;

  courses
    .filter((course) => course.grade && course.mark)
    .forEach((course) => {
      totalCourse++;

      switch (course.grade) {
        case "HD":
          hd_d++;
          break;
        case "DN":
          hd_d++;
          break;
        case "CR":
          cr++;
          break;
        case "PS":
          p++;
          break;
        case "FL":
          f++;
          break;
        default:
          break;
      }
    });

  const gpa = (hd_d * 4 + cr * 3 + p * 2 + f * 0) / totalCourse;
  setGPA4(gpa);
};
