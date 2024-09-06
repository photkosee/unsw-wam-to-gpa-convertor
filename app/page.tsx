"use client";

import { useState } from "react";
import Link from "next/link";
import pdfToText from "react-pdftotext";
import { AlertCircleIcon, GithubIcon, Loader2 } from "lucide-react";

import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { extractCourseInfo } from "@/app/logic";
import { Course } from "@/app/types";
import HowToDialog from "@/app/components/HowToDialog";
import DisclaimDialog from "@/app/components/DisclaimDialog";
import ResultDialog from "@/app/components/ResultDialog";
import InputFile from "@/app/components/InputFile";

export default function App() {
  const [file, setFile] = useState<File | undefined>();
  const [courses, setCourses] = useState<Course[]>();
  const [GPA7, setGPA7] = useState<number>();
  const [GPA4, setGPA4] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [openResult, setOpenResult] = useState<boolean>(false);
  const [openHowTo, setOpenHowTo] = useState<boolean>(false);
  const [openDisclaim, setOpenDisclaim] = useState<boolean>(false);
  const { toast } = useToast();

  const extractDataFromPDF = async () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "Uh oh! You forgot to upload a file.",
        description: "Please upload your academic statement to continue.",
      });
      return;
    }

    setLoading(true);
    await pdfToText(file as File)
      .then((content) => {
        extractCourseInfo(content, setGPA4, setGPA7, setCourses);
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please make sure to use a academic statement.",
        });
      });

    setLoading(false);
    setOpenResult(true);
  };

  const checkFileType = (file: File | undefined) => {
    if (file && file.type !== "application/pdf") {
      toast({
        variant: "destructive",
        title: "Uh oh! Invalid file type.",
        description: "Please upload a PDF file to continue.",
      });
    } else if (file) {
      setFile(file);
    }
    return;
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-5 md:p-10
      relative bg-white gap-y-7 text-black"
    >
      <h1 className="font-extrabold text-[23px] sm:text-[30px] text-center mt-2">
        <span className="text-[#f56551]">Convert your UNSW WAM to GPA:</span>{" "}
        <br></br> With a single Academic Statement upload
      </h1>

      <div className="flex gap-x-3 sm:gap-x-5 w-full max-w-lg items-center">
        <Button
          variant="outline"
          className="flex-1 flex items-center gap-x-1"
          onClick={() => setOpenHowTo(true)}
        >
          <QuestionMarkCircledIcon className="w-4 h-4" />
          How to use
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex items-center gap-x-1"
          onClick={() => setOpenDisclaim(true)}
        >
          <AlertCircleIcon className="w-4 h-4" />
          Disclaimer
        </Button>
        <Link
          href="https://github.com/photkosee/unsw-wam-to-gpa-convertor"
          passHref
        >
          <Button variant="outline">
            <GithubIcon className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-y-5 w-full justify-center items-center max-w-lg">
        <InputFile file={file} checkFileType={checkFileType} />

        <Button
          onClick={extractDataFromPDF}
          disabled={loading}
          className="mb-2 w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Converting...
            </>
          ) : (
            <>{`Convert your WAM to GPA`}</>
          )}
        </Button>

        <HowToDialog open={openHowTo} setOpen={setOpenHowTo} />
        <DisclaimDialog open={openDisclaim} setOpen={setOpenDisclaim} />
        <ResultDialog
          open={openResult}
          setOpen={setOpenResult}
          GPA4={GPA4}
          GPA7={GPA7}
          courses={courses}
        />
      </div>
    </div>
  );
}
