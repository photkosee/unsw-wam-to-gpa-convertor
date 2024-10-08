export interface Course {
  prefix: string;
  number: string;
  title: string;
  attemptedUnits: string;
  passedUnits: string;
  mark?: string;
  grade?: string;
}

export interface CustomDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
