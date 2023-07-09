import { Logo } from "./Logo";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <div className="flex align-middle justify-between items-center flex-wrap sticky top-0 h-14 md:h-32 bg-[#EEA4DA]">
      <Logo />
      <HeaderNav />
    </div>
  );
};
