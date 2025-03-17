import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  icon?: ReactElement;
}

const VariantClasses = {
  secondary:
    "px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md",
  primary: "bg-gray-500 hover:bg-gray-700",
};

const defaultClasses =
  "px-4 py-2 rounded-lg shadow-md font-semibold flex items-center justify-center gap-1 ";
export const MyButton = ({ text, onClick, variant, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${VariantClasses[variant]} ${defaultClasses}`}
    >
      {icon} {text}
    </button>
  );
};

<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Lit up borders
  </div>
</button>;
