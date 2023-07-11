import { Logo } from "./Logo";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <div className="flex align-middle justify-between items-center flex-wrap sticky top-0 h-14 md:h-12 bg-[#f4acb7] z-50">
      <Logo />
      <HeaderNav />
    </div>
  );
};
