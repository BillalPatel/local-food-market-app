import Image from "next/image";
import landingImage from "../table.jpg";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <main className="flex justify-center items-center h-screen bg-gray-100"> */}
      <div className="flex m-bt=0 min-h-screen w-full">
        <div
          className="bg-image w-full bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://placehold.co/1000x700');",
          }}
        ></div>
        <div className="">
          {/* <input
              className="food-search border-r-4"
              placeholder="What are you feeling?"
            />
            <button className="food-search border-r-4">Click me</button> */}
        </div>
        {/* </div> */}
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
