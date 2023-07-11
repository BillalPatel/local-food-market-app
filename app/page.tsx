import Image from 'next/image';
import Card from '@/app/components/ui/Card/';

import landingImage from '../images/table.jpg';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex m-bt=0 min-h-screen">
        <Image
          className="bg-image w-full object-cover bg-no-repeat"
          alt=""
          width={100}
          height={100}
          src={landingImage}
        />
      </div>
      <div className="flex items-center slider h-28 m-3.5 ml-3.5">
        <div className="border-solid h-3/4 w-4/5 bg-red-400 rounded-xl">
          Slider 1
        </div>
        {/* <div className="border-solid h-3/4 w-4/5 bg-red-400 rounded-xl">Slider 2</div> */}
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
