import Image from "next/image";
import { Button } from "../ui";

export default function AboutUs() {
  return (
    <section className="flex flex-col lg:flex-row w-[92%] max-w-[1500px] mx-auto lg:items-center py-12 justify-between">
      <div className="flex-1 mx-auto">
        <div className="relative w-[414px] before:block before:absolute before:bg-brightNavyBlue translate-x-7 before:-translate-x-7 before:translate-y-7 before:rounded-br-large before:h-full before:w-full h-[322px] mr-auto">
          <Image src="/about-us.png" alt="about-us" fill />
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-20 lg:mt-0 items-start gap-4 lg:max-w-lg">
        <h3 className="capitalize text-brightNavyBlue font-black text-4xl max-w-md">
          About us
        </h3>
        <h4 className="capitalize font-bold text-3xl ">
          To make the cyber world a better and safer place
        </h4>
        <p className="text-xl max-w-lg">
          To provide solutions that enable clients to find, fix, stop, and
          ultimately solve cyber security problems across their entire
          enterprise and product portfolios.
        </p>
        <Button variant={"secondary"} style="px-10 py-3">
          Discover More
        </Button>
      </div>
    </section>
  );
}
