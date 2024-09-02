import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CustomDialogProps } from "@/app/types";

const DisclaimDialog = ({ open, setOpen }: CustomDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Disclaimer</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-y-2 my-2">
              <div>
                This website seeks to be a general tool for converting UNSW WAM
                to GPA, but its information has not been officially endorsed and
                is subject to change or correction.
              </div>
              <div>
                This is not official advice, and you should confirm any
                statements are correct before relying on it. You should confirm
                with official resources endorsed by UNSW and any information
                found here may not necessarily represent those of the School,
                Faculty, or University (UNSW).
              </div>
              <div>
                Users are responsible for double-checking their GPAs and I have
                no responsibility on whether the information shown is accurate.
                This is a personal project and I do not represent the School,
                Faculty, or University (UNSW).
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimDialog;
