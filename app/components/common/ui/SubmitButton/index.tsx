import { FC } from "react";

export interface SubmitButtonProps {
  title: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ title }) => {
  return (
    <button
      type="submit"
      className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
    >
      {title}
    </button>
  );
};

export default SubmitButton;
