import Image from "next/image";
import Image4 from "../../../public/image4.jpeg";
import Image5 from "../../../public/Image5.JPG";
import maya from "../../../public/maya.png";
import lamer from "../../../public/lamer.png";
import dala from "../../../public/dala.png";
import pynche5 from '../../../public/pynche5.png';
import pynche6 from '../../../public/pynche6.png'


//Fonts
import { Adamina, Alegreya } from "next/font/google";
import Link from "next/link";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });


const About = () => {
  return (
    <>
      <section
        className="relative h-[50vh] md:h-[70vh] w-full bg-cover bg-center "
      >
        <Image
          src={Image4}
          width=''
          height=''
          alt='Background Image'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className={`text-white lg:text-9xl text-5xl font-bold border-solid-border-red-500 ${adamina.className}`}>About us</h1>
        </div>
      </section>

      {/* Description */}

      <div className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={maya} className="w-full aspect-square object-cover" alt='Maya-ika Lamar' />
            <h3 className="text-xl font-bold py-8 pb-2 text-left">
              Maya-ika Lamar
            </h3>
            <p className={`text-gray-700 mb-4 ${alegreya.className}`}>
              Maya-ika Lamar is a professionally trained art therapist with a
              deep commitment to healing and creative expression. With a
              Master&apos;s Degree in Art Therapy and a diverse educational
              background in psychology and counselling, she brings a wealth of
              expertise to her practice. From working with individuals facing
              substance abuse disorders to counselling therapy sessions for
              adolescents on the autism spectrum, Maya-ika is dedicated to
              making a meaningful impact in the lives of others. Her passion for
              social causes and dedication to empathy and creativity make her a
              valuable asset to any team or project.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={lamer} className="w-full aspect-square object-cover" alt='Lamerphylla Kharsati' />
            <h3 className="text-xl font-bold py-8 pb-2 text-left">
              Lamerphylla Kharsati
            </h3>
            <p className={`text-gray-700 mb-4 ${alegreya.className}`}>
              Lamerphylla Damesha Kharsati is a Development Sector Professional
              with a multifaceted background spanning research, program
              management, fundraising, and communications. With a strong
              foundation in public health, climate action, and social
              entrepreneurship, she brings a unique blend of skills to the realm
              where social impact, cultural artistry, and self-discovery
              converge. She is committed to creating transformative experiences
              that bridge the worlds of nature, tradition, and personal growth.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={dala} className="w-full aspect-square object-cover" alt='Dalarympei Kharmawphlang' />
            <h3 className="text-xl font-bold py-8 pb-2 text-left">
              Dalarympei Kharmawphlang
            </h3>
            <p className={`text-gray-700 mb-4 ${alegreya.className}`}>
              Dalarympei Sabrina Kharmawphlang is a renowned culinary virtuoso
              renowned for her expertise cultivated across diverse culinary
              landscapes. With a background steeped in crafting exquisite
              gastronomic experiences and operations, she has honed her culinary
              finesse at prestigious establishments in Bangalore, New Delhi,
              Florence, and Milan. Her passion for fine dining and gastronomy
              shines through in her unwavering commitment to curating
              exceptional culinary experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Coloured Line */}
      <div className="flex items-center mt-10 justify-center">
        <hr className="w-full h-10 bg-random3" />
      </div>

      {/* Reserve Button */}
      <section className="flex justify-center my-8">
        <Link href="https://onlybees.in/event/kilometer-zero">
          <button className="bg-[#515549] text-white px-12 py-2 rounded-lg hover:bg-green-800">
            RESERVE NOW
          </button>
        </Link>
      </section>

      {/* <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="w-full lg:w-1/2">
          <Image src={Image4} className="w-full h-full object-cover" alt="About PynChe Image 1" />
        </div>
        <div className="w-full lg:w-1/2 h-[500px]">
          <Image src={Image5} className="w-full h-full object-cover" alt="About PynChe Image 2" />
        </div>
      </div>
       */}

      <div className="hidden sm:block w-full h-[16vh] md:h-[40vh] lg:h-[70vh]">
        <Image src={pynche5} alt=""
          className="w-full h-full " />
      </div>


      <div className="block lg:hidden w-full">
        <Image
          src={pynche6}
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full h-40 mt-10">
        <p className={`lg:text-3xl md:text-2xl sm:text-xl px-5 pb-10 font-semibold lg:px-40 ${alegreya.className}`}>
          Started as an art collaborative, PynChe was created by three women
          from different professional backgrounds. The initiative was started
          with the intention and mission to enable conversations around themes
          of environmental and cultural consciousness through various forms of
          art activities and engagements.
        </p>
      </div>
      {/* Horizontal Line */}
      <div className="flex items-center justify-center mt-10 py-10">
        <hr className="w-[90%] h-1 bg-random2 " />
      </div>
    </>
  );
};

export default About;
