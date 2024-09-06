import Image from "next/image";
import Image1 from "../../public/Image1.JPG";
import Image2 from "../../public/Image2.jpg";
import Image3 from "../../public/Image3.jpg";
import home_images from "../../public/pynche4.png";
import supporters from "../../public/supporters.svg";
import supporters_large from "../../public/supporters_large.svg";

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
        <div className="absolute z-0 inset-0 flex flex-col items-center justify-between py-20 pt-60 bg-black bg-opacity-60">
          <h1 className={`text-white px-5 leading-8 text-center text-4xl md:text-4xl z-10 lg:text-6xl font-bold ${adamina.className}`}>
            PynChe<br />
            <span className="text-lg md:text-xl px-5 lg:text-2xl italic font-light leading-tight">"pin-chae"</span>
          </h1>
          {/* <h1 className={`text-white px-5 leading-relaxed text-center text-4xl md:text-4xl z-10 lg:text-6xl font-bold ${adamina.className}`}>
            PynChe means 'illumine' in Pnar.<br />
            <span className="text-lg md:text-xl px-5 lg:text-2xl italic font-light leading-tight">Pnar is a language which is spoken by the tribes of Jaintia Hills in Meghalaya.</span>
          </h1> */}
          <div>
            <h2 className={`text-lg md:text-xl px-5 lg:text-2xl text-center font-light leading-tight text-white ${adamina.className}`}>meaning 'illumine' in Pnar</h2>
            <h3 className={`text-lg md:text-xl px-5 lg:text-2xl text-center font-light leading-tight text-white ${adamina.className}`}>Pnar is a language which is spoken by the tribes of Jaintia Hills in Meghalaya.</h3>
          </div>
        </div>
      </section>

      {/* New */}
      {/* <section className="relative min-h-[44rem] bg-white px-4">
        <div className="h-fit">
          <div className="absolute lg:top-60 top-16 left-10 lg:left-40 hover:scale-110 transition duration-500">
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
          </div>
          <div className="absolute lg:top-20 top-56 right-10 lg:right-[calc(50svw-175px)] hover:scale-110 transition duration-500">
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
          </div>
          <div className="absolute lg:top-80 top-96 mt-5 ml-10 lg:ml-0 lg:right-40 hover:scale-110 transition duration-500">
            <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shadow-xl rounded-full overflow-hidden cursor-pointer">
              <Image
                loading="lazy"
                src={Image3}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center lg:mt-5 mt-2 lg:text-xl text-lg ${alegreya.className}`}>A Symphony of Senses</p>
          </div>
        </div>
      </section> */}
      <section className="my-8 bg-white border border-white">
        <div className="h-fit md:px-20 px-10 py-10">

          <div className="mt-10 lg:ml-0 flex md:flex-row flex-col items-center justify-center gap-10">
            <Link href="https://onlybees.in/event/pynche">
              <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] shadow-xl rounded-full overflow-hidden">
                <Image
                  loading="lazy"
                  src={Image3}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="">
              <h2 className={`text-2xl md:text-4xl text-[#3e4e4e] mb-10 md:text-left text-center ${adamina.className}`}>A Symphony of Senses</h2>
              <p className={`text-lg lg:text-xl md:text-left text-center text-black ${alegreya.className}`}>
                Presenting A Symphony of Senses, our third event where artistry, sustainability, and culinary creativity converge amidst the breathtaking Himalayan landscapes. This weekend retreat promises a transformative experience where the five senses are harmoniously engaged through art, culinary delights, and live music.
              </p>
              <Link href='https://onlybees.in/event/pynche'><p className={`mt-10 text-lg lg:text-xl text-black ${alegreya.className} bg-[#3e4e4e] text-[#eaf3a4] px-12 py-2 rounded-lg hover:bg-green-800 w-fit md:mx-0 mx-auto`}>Reserve Now</p></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Text Below Circles */}
      <section className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12 py-8 bg-gray-100 text-center">
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Forest Fusion
          </p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Kilometre Zero
          </p>
        </div>
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
      {/* <section className="flex justify-center my-8">
        <Link href="https://onlybees.in/event/pynche">
          <button className="bg-[#515549] text-white px-12 py-2 rounded-lg hover:bg-green-800">
            RESERVE NOW
          </button>
        </Link>
      </section> */}

      {/* Horizontal line */}
      {/* <div className="flex items-center justify-center">
        <hr className="w-[90%] border-b border-black" />
      </div> */}

      <h2 className="uppercase text-[#35420C] text-center my-10 font-bold text-xl md:text-2xl lg:text-3xl">Support us</h2>
      <section className="relative w-screen flex flex-col items-center gap-10">
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Seed Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Product incorporation in our events</h4>
        </div>
        <div className="bg-[#D9D9D9] w-[80svw] md:w-[40svw] px-16 py-5 rounded-full text-center">
          <h3 className={`${alegreya.className} text-[#35420C] text-xl lg:text-2xl font-semibold`}>Sprout Package</h3>
          <h4 className={`${alegreya.className} lg:text-xl text-lg font-semibold`}>Banner and Printing</h4>
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