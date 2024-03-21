import { FC } from "react";

export interface SubmitButtonProps {
  title: string;
  tone?: string;
  toneHover?: string;
  size?: "small" | "medium" | "large";
}

const SubmitButton: FC<SubmitButtonProps> = ({
  title,
  size = "medium",
  tone = "bg-slate-600",
  toneHover = "bg-blue-500",
}) => {
  let sizeCss = "px-4 py-2";

  if (size === "small") {
    sizeCss = "px-2 py-1";
  }

  if (size === "large") {
    sizeCss = "px-5 py-3";
  }

  return (
    <button
      type="submit"
      className={`rounded ${sizeCss} ${tone} text-blue-100 hover:${toneHover} active:bg-blue-600`}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
