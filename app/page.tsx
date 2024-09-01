"use client";

import { useState } from "react";

import pdfToText from "react-pdftotext";
import { AlertCircleIcon, GithubIcon, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { extractCourseInfo } from "@/app/logic";
import { useToast } from "@/hooks/use-toast";
import { Course } from "./types";
import Link from "next/link";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export default function App() {
  const [file, setFile] = useState<File | undefined>();
  const [courses, setCourses] = useState<Course[]>();
  const [GPA7, setGPA7] = useState<number>();
  const [GPA4, setGPA4] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
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
    setTimeout(() => {
      setLoading(false);
      setOpen(true);
    }, 500);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-5 md:p-10
      relative bg-white gap-y-7"
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

      <div className="flex flex-col gap-y-5 w-full justify-center items-center">
        <div className="flex items-center justify-center w-full max-w-lg">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2
            border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50
            hover:bg-gray-100 hover:border-blue-200 hover:border-[4px]"
          >
            {file ? (
              <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-y-3">
                <img src="./pdf.svg" className="w-16 h-16" />
                <p className="mb-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  {file.name}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  your UNSW Academic Statement in PDF
                </p>
              </div>
            )}

            <input
              id="dropzone-file"
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="hidden"
            />
          </label>
        </div>

        <Button
          onClick={extractDataFromPDF}
          disabled={loading}
          className="mb-2"
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

        <Dialog open={openHowTo} onOpenChange={setOpenHowTo}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to use this tool?</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-y-2 my-2">
                  <div>
                    Simply upload your UNSW Academic Statement in PDF format
                    below. Then click the bottom most button to convert your WAM
                    to GPA.
                  </div>
                  <div>
                    If you ever find an error, please visit the repository by
                    clicking the button with a GitHub logo on the right most for
                    the source code. Pull request are welcome!
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={openDisclaim} onOpenChange={setOpenDisclaim}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Disclaimer</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-y-2 my-2">
                  <div>
                    This website seeks to be a general tool for converting UNSW
                    WAM to GPA, but its information has not been officially
                    endorsed and is subject to change or correction.
                  </div>
                  <div>
                    This is not official advice, and you should confirm any
                    statements are correct before relying on it. You should
                    confirm with official resources endorsed by UNSW and any
                    information found here may not necessarily represent those
                    of the School, Faculty, or University (UNSW).
                  </div>
                  <div>
                    Users are responsible for double-checking their GPAs and I
                    have no responsibility on whether the information shown is
                    accurate. This is a personal project and I do not represent
                    the School, Faculty, or University (UNSW).
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {courses && courses.length > 0 ? (
                  <>Here is your GPAs</>
                ) : (
                  <>Something went wrong</>
                )}
              </DialogTitle>
              <DialogDescription>
                {courses && courses.length > 0 ? (
                  <div className="flex flex-col gap-y-2 my-5 w-full items-center">
                    <div>4-point scale GPA: {GPA4?.toFixed(2)} / 4.00</div>
                    <div>7-point scale GPA: {GPA7?.toFixed(2)} / 7.00</div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-2 my-5 w-full items-center">
                    {`We couldn't extract any course information from your file. Please try again with your UNSW academic statement.`}
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
