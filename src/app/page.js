import Image from "next/image";
import Image1 from "../../public/Image1.JPG";
import Image2 from "../../public/Image2.jpg";
import Image3 from "../../public/Image3.jpg";
import home_images from "../../public/home_images.png";
import supporters from "../../public/supporters.svg";
import supporters_large from "../../public/supporters_large.svg";
import { GoArrowDown } from "react-icons/go";

// Fonts
import { Inter, Adamina, Alegreya } from "next/font/google";
import Link from "next/link";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen w-screen bg-cover bg-center">
        <Image
          src={Image3}
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="w-full h-full"
        />
        <div className="absolute z-0 inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <h1 className={`text-white px-5 leading-relaxed text-center text-4xl md:text-4xl z-10 lg:text-6xl font-bold ${adamina.className}`}>
            PynChe means 'illumine' in Pnar.<br />
            <span className="text-lg md:text-xl px-5 lg:text-2xl italic font-light leading-tight">Pnar is a language which is spoken by the tribes of Jaintia Hills in Meghalaya.</span>
          </h1>
        </div>
      </section>

      {/* New */}
      <section className="relative  my-8 bg-white border border-white">
        <div className="h-fit">
          {/* <div className="absolute lg:top-60 top-16 left-10 lg:left-40 hover:scale-110 transition duration-500">
            <Link href="/events/forest-fusion">
              <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shadow-xl rounded-full overflow-hidden cursor-pointer">
                <Image
                  loading="lazy"
                  src={Image1}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className={`text-center lg:mt-5 mt-2 lg:text-xl text-lg ${alegreya.className}`}>Forest Fusion</p>
          </div> */}
          {/* <div className="absolute lg:top-20 top-56 right-10 lg:right-[calc(50svw-175px)] hover:scale-110 transition duration-500">
            <Link href="/events/kilometre-zero">
              <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shadow-xl rounded-full overflow-hidden cursor-pointer">
                <Image
                  loading="lazy"
                  src={Image2}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className={`text-center lg:mt-5 mt-2 lg:text-xl text-lg ${alegreya.className}`}>Kilometre Zero</p>
          </div> */}
          <div className="lg:top-80 top-96 mt-10 lg:ml-0 lg:right-40 flex items-center justify-center flex-col">
            <a href="https://onlybees.in/event/pynche">
              <div className="w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] shadow-xl rounded-full overflow-hidden">
                <Image
                  loading="lazy"
                  src={Image3}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
{/* 
            <div className="absolute ml-[900px] font-bold text-4xl mt-[480px] flex flex-col items-center">
              <GoArrowUpLeft className="w-[400px] h-[300px] border border-red-500" />
              <span className="absolute mt-[220px]">Reserve Now</span>
            </div> */}
            <GoArrowDown className="text-5xl font-light"/>
            <h1 className="border border-black text-black p-2 rounded-3xl">Reserve now</h1>
            <div className="relative mr-[40px] ml-[40px] lg:mr-[500px] lg:ml-[500px] mt-5 text-center">
              <p className={`text-lg lg:text-xl text-black ${alegreya.className}`}>
                Presenting A Symphony of Senses, our third event where artistry, sustainability, and culinary creativity converge amidst the breathtaking Himalayan landscapes. This weekend retreat promises a transformative experience where the five senses are harmoniously engaged through art, culinary delights, and live music.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Text Below Circles */}
      <section className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12 py-8 bg-gray-100 text-center">
        {/* <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Forest Fusion
          </p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Kilometre Zero
          </p>
        </div> */}
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            A Symphony of Senses
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full">
        <Image
          src={home_images}
          alt="Image 4"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Reserve Button */}
      <section className="flex justify-center my-8">
        <Link href="https://onlybees.in/event/kilometer-zero">
          <button className="bg-[#515549] text-white px-12 py-2 rounded-lg hover:bg-green-800">
            RESERVE NOW
          </button>
        </Link>
      </section>

      {/* Horizontal line */}
      <div className="flex items-center justify-center">
        <hr className="w-[90%] border-b border-black" />
      </div>

      <h2 className="uppercase text-[#35420C] text-center my-10 font-bold text-xl md:text-2xl lg:text-3xl">Support us</h2>
      <section className="relative w-screen flex flex-col items-center gap-10">
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Seed Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Product incorporation in our events</h4>
        </div>
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Sprout Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Product incorporation in our events</h4>
        </div>
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Leaf Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Social media / Advertisement</h4>
        </div>
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Branch Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Art materials / Food ingredients </h4>
        </div>
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Tree Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Artist/s collaboration</h4>
        </div>
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Forest Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Venue collaboration</h4>
        </div>

        <p className={`${alegreya.className} text-xl mb-10`}>For more details: pynche1909@gmail.com</p>

      </section>

      <div className="bg-[#939C81] w-screen h-[3svh]"></div>

      <h2 className="uppercase text-[#35420C] text-center mt-10 font-bold text-xl md:text-2xl lg:text-3xl">our supporters</h2>
      <h3 className={`${alegreya.className} text-center text-md md:text-lg lg:text-xl`}>Sponsors and Partners</h3>
      <section className="relative w-screen flex flex-col px-10 mt-10 items-center gap-10">
        <Image
          src={supporters}
          alt="Supporters and Partners"
          className="block md:hidden w-full h-full object-cover"
        />
        <Image
          src={supporters_large}
          alt="Supporters and Partners"
          className="hidden md:block px-40 py-10 w-full h-full object-cover"
        />
      </section>

    </div>
  );
}
