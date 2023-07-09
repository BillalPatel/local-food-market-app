import { NavIcon } from "./NavIcon";
import { HamburgerIcon } from "./HamburgerIcon";

export const HeaderNav = () => {
  return (
    <nav className="mr-6">
      {/* <BasketIcon alt="Logo" /> */}
      <ul className="">
        <li>
          <HamburgerIcon />
        </li>
      </ul>
    </nav>
  );
};
