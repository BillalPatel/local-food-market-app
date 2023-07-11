import Image from "next/image";
import landingImage from "../table.jpg";
import Card from "./components/ui/Card/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex m-bt=0 min-h-screen">
        <div
          className="bg-image w-full bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://placehold.co/1000x700');",
          }}
        >
        </div>
      </div>
      <div className="flex items-center slider h-28 m-3.5">
        <div className="border-solid h-3/4 w-4/5 bg-red-400 rounded-xl">Slider 1</div>
        {/* <div className="border-solid h-3/4 w-4/5 bg-red-400 rounded-xl">Slider 2</div> */}
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
