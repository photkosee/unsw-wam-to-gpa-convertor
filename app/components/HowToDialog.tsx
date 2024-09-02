import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CustomDialogProps } from "@/app/types";

const HowToDialog = ({ open, setOpen }: CustomDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to use this tool?</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-y-2 my-2">
              <div>
                Simply upload your UNSW Academic Statement in PDF format below.
                Then click the bottom most button to convert your WAM to GPA.
              </div>
              <div>
                If you ever find an error, please visit the repository by
                clicking the button with a GitHub logo on the right most for the
                source code. Pull request are welcome!
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HowToDialog;
