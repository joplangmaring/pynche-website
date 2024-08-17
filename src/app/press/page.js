import Image from "next/image";
import Link from "next/link";

import press_0 from "../../../public/press_0.png";
import press_1 from "../../../public/press_1.png";
import press_2 from "../../../public/press_2.png";
import press_3 from "../../../public/press_3.png";



// import Image4 from "../../../../public/Image4.jpg";

//Fonts
import { Adamina, Alegreya } from "next/font/google";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });

const EventPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image src={press_0} alt="Forest Fusion" layout="fill" objectFit="cover" className="z-0" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className={`text-white text-3xl md:text-6xl font-bold ${adamina.className}`}>PRESS COVERAGE</h1>
                </div>
            </div>

            {/* About Section */}
            <div className="p-4 md:p-8 lg:p-16 py-5">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C] uppercase`}>Top Stories</h2>
                {/* <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                Pynche&apos;s - Kilometre Zero, an innovative event promoting local food consumption and artistic expression, took place in Kyrdemkulai, Ri-Bhoi on Saturday. Organized by Dalarympei Sabrina Kharmawphlang, Lamerphylla Damesha Kharsati, and Maya Ika Lamar, this second edition of the initiative attracted around 50 participants. The event featured a forage aisle curated by Kharmawphlang and Chef Ahme, showcasing farm-fresh ingredients including meat and shrimp. Interactive cooking sessions led by culinary expert Kharmawphlang highlighted the satisfaction of using local ingredients and traditional techniques. Art therapist Lamar facilitated mural painting activities, emphasizing the connection between humans and nature, and the therapeutic benefits of artistic expression.

                </p> */}
            </div>

            <hr className="border-b my-10 border-[#35420C] border-opacity-20" />

            <div className="lg:px-20 px-5">
                <Link href='https://www.whereabouts.in/pynches-debut-event-forest-fusion-a-gastronomic-and-artistic-journey/' target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-2 lg:gap-10 gap-3 cursor-pointer">
                        <Image src={press_1} alt="Event Image 1" className="" />
                        <h2 className={`uppercase ${adamina.className} text-[#35420C] lg:text-6xl`}>Pynche&apos;s Debut Event, Forest Fusion: A Gastronomic and Artistic Journey</h2>
                    </div>
                </Link>
                <p className="text-xs mt-3">By News Desk - December 17, 2023</p>
                <p className={`${alegreya.className} mt-3 text-lg lg:text-3xl`}>The objective was to create a distinctive and immersive therapeutic experience that seamlessly integrates the rich tapestry of forest folklore.</p>
            </div>

            <hr className="border-b my-10 border-[#35420C] border-opacity-20" />


            <div className="lg:px-20 px-5">
                <Link href='https://highlandpost.com/pynche-art-delves-into-forest-fusion/?fbclid=PAZXh0bgNhZW0CMTEAAaZ1-1Z-x6Z69qD3DA3svnummAnXzmgEYOvhhToiknzyjXP0lhIuWXSH1WY_aem_5mInJXw76Hw9sIH3N3Nljw' target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-2 lg:gap-10 gap-3 cursor-pointer">
                        <Image src={press_2} alt="Event Image 1" className="" />
                        <h2 className={`uppercase ${adamina.className} text-[#35420C] lg:text-6xl`}>PynChe art delves into &apos;forest fusion&apos;</h2>
                    </div>
                </Link>
                <p className="text-xs mt-3">by HP News Service - December 11, 2023, Meghalaya</p>
                <p className={`${alegreya.className} mt-3 text-lg lg:text-3xl`}>It was a journey of transformation and self-discovery, guided by the enchanting tales of the forest, creating a unique and immersive therapeutic experience that seamlessly weaved together the rich tapestry of forest folklore, the artistry of culinary creation and the expressive power of art.</p>
            </div>

            <hr className="border-b my-10 border-[#35420C] border-opacity-20" />


            <div className="lg:px-20 px-5">
                <Link href='https://theshillongtimes.com/2024/05/12/kilometre-zero-promoting-art-sustainable-habits/' target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-2 lg:gap-10 gap-3 cursor-pointer">
                        <Image src={press_3} alt="Event Image 1" className="" />
                        <h2 className={`uppercase ${adamina.className} text-[#35420C] lg:text-6xl`}>Kilometre Zero: Promoting art, sustainable habits</h2>
                    </div>
                </Link>
                <p className="text-xs mt-3">by THE SHILLONG TIMES - May 14, 2024, Meghalaya</p>
                <p className={`${alegreya.className} mt-3 text-lg lg:text-3xl`}>The initiative aimed at promoting sustainability and environmental stewardship. By sourcing ingredients locally and emphasising transparent consumption practices, the initiative aimed to educate participants about the origins of their food and promote sustainable consumption habits.</p>
            </div>
            <hr className="border-b my-10 border-[#35420C] border-opacity-20" />
            <div className="lg:px-20 px-10">
                <h2 className={`uppercase ${adamina.className} text-center text-[#35420C]`}>Kilometre Zero || A Food & Art Affair</h2>
                <div className="flex justify-center mt-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WeEF7GAnEZI?si=_au3Uk2BImrLIDT5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <hr className="border-b my-10 border-[#35420C] border-opacity-20" />
        </div>
    );
};

export default EventPage;
