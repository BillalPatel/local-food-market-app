'use client';

import {
  IoBagOutline,
  IoReorderThreeOutline,
  IoSearchOutline,
} from 'react-icons/io5';

export const HeaderNav = () => {
  return (
    <nav className="mr-4">
      <ul className="flex row-auto justify-end">
        <li className="search-icon m-2">
          <IoSearchOutline className="text-xl" />
        </li>
        <li className="bag-icon m-2">
          <IoBagOutline className="text-xl" />
        </li>
        <li className="hamburger-menu-icon m-2">
          <IoReorderThreeOutline className="text-xl" />
        </li>
      </ul>
    </nav>
  );
};
