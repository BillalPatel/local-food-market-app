import Image from "next/image";
import Link from "next/link";

import cakeImage from '../../../../images/cake.jpg'

export const Card = () => {
  return (
    <Link href="/404" className="box">
      <div className=" bg-white h-96 flex items-center justify-center shadow-lg">
        <div className="h-5/6 w-11/12 bg-slate-100 flex flex-col border-solid rounded-lg">
          <Image
            className="card-image w-full h-1/2 object-cover relative top-0 rounded-t-lg "
            alt=""
            width={100}
            height={20}
            src={cakeImage}
          />
          <div className="">
            <h1 className="mt-3.5 ml-3.5 text-slate-600 text-xl">
              Support Local Businesses
            </h1>
            <p className="text-red-800 mt-3.5 ml-3.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="flex justify-self-end bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
