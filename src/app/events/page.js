import Image from "next/image";
import Image6 from "../../../public/Image6.jpg";
import Event2 from "../../../public/Event2.jpg";
import Event3 from "../../../public/Event3.jpg";

import forest_fusion from "../../../public/forest_fusion.png";
import kilometre_zero from "../../../public/kilometre_zero.png";
import symphony from "../../../public/symphony.png";


import { Inter, Adamina, Alegreya } from "next/font/google";
import Link from "next/link";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"], weight: '400' });





const Events = () => {
  return (
    <div className="bg-gradient-to-b from-random3 to-random4 pt-20">
      <div className="flex flex-col md:flex-row items-end justify-between p-4 md:p-8 h-auto md:h-[60vh]">
        <h1 className="text-6xl md:text-6xl lg:text-9xl font-bold text-white mt-28 md:mt-36 lg:mt-60 mx-4 md:mx-8 lg:mx-16">
          EVENTS
        </h1>
        <div className="relative w-full md:w-2/3 lg:w-2/3 h-full mt-8 md:mt-36 lg:mr-20">
          <Image
            src={Image6}
            alt="Events"
            layout="fill"
            objectFit="cover"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="md:block hidden items-center mt-10 pb-10 md:mt-20 justify-center">
        <hr className="w-[90%] mx-auto bg-white" />
      </div>


      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[50vh] mb-20 ">
        <div className="w-full md:w-1/2">
          <Image
            src={forest_fusion}
            alt="EventImage"
            className="w-full h-auto mb-5 md:h-[70vh] px-4 object-contain lg:object-contain lg:p-20"
          />
        </div>
        <div className="w-full md:w-1/2 text-left px-4 md:px-4">
          <h1 className={`text-2xl md:text-4xl font-bold text-white pb-2 ${adamina.className}`}>FOREST FUSION</h1>
          <p className={`text-base md:text-lg mb-6 text-white ${alegreya.className} font-thin`}>
            Our event offered a one-of-a-kind and unforgettable experience that combines forest bathing, culinary art, and therapeutic art making. This distinct offering captivated both potential sponsors, collaborators and participants seeking novel and enriching experiences, leading to lasting memories and personal growth. Moreover, it aligns with the growing wellness and self-care trends, showcasing our commitment to holistic well-being, which can enhance our organization&apos;s reputation and engagement with collaborators,sponsors and attendees.
          </p>
          <Link href='/events/forest-fusion'>
            <button className="bg-random text-random5 text-xl md:text-3xl py-2 px-4 md:px-6 rounded-lg mr-4 font-semibold">
              EXPLORE
            </button>
          </Link>
          <Link href='/events/forest-fusion' className="text-white">
            Read More
          </Link>
        </div>
      </div>

      <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
        <hr className="w-[90%] bg-white" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[50vh] mb-20">
        <div className="w-full md:w-1/2">
          <Image
            src={kilometre_zero}
            alt="EventImage"
            className="w-full h-auto mb-5 md:h-[70vh] px-4 object-contain lg:object-contain lg:p-20"
          />
        </div>
        <div className="w-full md:w-1/2 text-left px-4 md:px-4 ">
        <h1 className={`text-2xl md:text-4xl font-bold text-white pb-2 ${adamina.className}`}>KILOMETRE ZERO</h1>
          <p className={`text-base md:text-lg mb-6 text-white ${alegreya.className} font-thin`}>
            Pynche&apos;s - Kilometre Zero, an innovative event promoting local food consumption and artistic expression, took place in Kyrdemkulai, Ri-Bhoi on Saturday. This is the organizer's second edition of the initiative that attracted around 50 participants. The event featured a forage aisle curated by Kharmawphlang and Chef Ahme, showcasing farm-fresh ingredients including meat and shrimp.
          </p>
          <Link href='/events/kilometre-zero'>
            <button className="bg-random text-random5 text-xl md:text-3xl py-2 px-4 md:px-6 rounded-lg mr-4 font-semibold">
              EXPLORE
            </button>
          </Link>
          <Link href='/events/kilometre-zero' className="text-white">
            Read More
          </Link>
        </div>
      </div>

      <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
        <hr className="w-[90%] bg-white" />
      </div>

      <div className="lg:px-16 px-5 ">
        <h2 className="lg:text-5xl text-2xl text-white uppercase">Upcoming</h2>
        <div className="flex flex-col justify-center w-fit">
          <Image
            src={symphony}
            alt="Event Image"
            className="md:w-[20svw] w-[50svw] h-auto mt-5 border-none"
          />
          <p className={`text-white text-center mt-2 text-lg`}>A Symphony of Senses</p>
        </div>
      </div>

      <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
        <hr className="w-[90%] bg-white" />
      </div>


      <div className="w-full mb-24 px-4 py-10 md:px-20">
        <p className="text-base md:text-2xl font-semibold pb-10 text-white">
          With each event that we organise, we design a theme that will allow the organisers and participants to foster creativity, self expression, appreciation. Through meaningful interaction between the hosts and the participants, we exchange knowledge and ideas and each participant leaves with something new that they&apos;ve learnt.
        </p>
      </div>
    </div>
  );
};

export default Events;
