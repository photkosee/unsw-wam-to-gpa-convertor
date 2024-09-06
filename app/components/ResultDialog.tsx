import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Course, CustomDialogProps } from "@/app/types";

interface ResultDialogProps extends CustomDialogProps {
  courses?: Course[];
  GPA4?: number;
  GPA7?: number;
}

const ResultDialog = ({
  open,
  setOpen,
  courses,
  GPA4,
  GPA7,
}: ResultDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {courses && courses.length > 0 ? (
              <>Here are your GPAs</>
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
  );
};

export default ResultDialog;
