import { DarkModeIcon } from "../icons/DarkModeIcon";
import { MyButton } from "./MyButton";

export const Navbar = () => {
  return (
    <div className="  flex mx-auto px-4  items-center justify-between text-2xl text-white  mix-blend-normal">
      <div className="py-2 flex gap-2 text-white">
        <span>WebLyzer</span>
        <span>Icon</span>
      </div>
      <div className="flex shrink gap-8  py-2 font-mono">
        <span className="opacity-25 hover:opacity-80 cursor-pointer">Home</span>
        <span className="opacity-25 hover:opacity-80 cursor-pointer">
          Dashboard
        </span>
        <span className="opacity-25 hover:opacity-80 cursor-pointer">
          Features
        </span>
        <span className="opacity-25 hover:opacity-80 cursor-pointer">
          Pricing
        </span>
      </div>
      <div className="flex gap-5 text-lg items-center justify-center py-2">
        <span>
          <DarkModeIcon />
        </span>

        <span>
          <MyButton text="Log-in" variant="secondary" />
        </span>
        <span>Getting Started</span>
      </div>
    </div>
  );
};
