"use server"

import Image from 'next/image'
import LogoImage from '../../images/logo.svg' 

export const Logo = () => {
  return (
    <div className="logo-container w-28 ml-5">
      <Image alt="Logo" src={LogoImage} />
    </div>
  );
};
