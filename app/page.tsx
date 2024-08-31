"use client";

import { useState } from "react";

import { Course } from "./types";
import pdfToText from "react-pdftotext";

export default function App() {
  const [file, setFile] = useState<File | undefined>();
  const [courses, setCourses] = useState<Course[]>([]);

  const convert = () => {
    pdfToText(file as File)
      .then((content) => extractCourseInfo(content))
      .catch((error) => console.error("Failed to extract text from pdf"));
  };

  const extractCourseInfo = (text: string) => {
    const regex =
      /([A-Z]{4})\s+(\d{4})\s+([\w\s&-]+?)\s+(\d{1,2}\.\d{2})\s+(\d{1,2}\.\d{2})\s+(\d{1,3}|T)\s+([A-Z]{2})?/g;
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

    setCourses(extractedCourses);

    console.log(extractedCourses);
  };

  return (
    <>
      <div className="flex flex-col gap-y-5">
        <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button onClick={convert}>Convert</button>
      </div>
    </>
  );
}
