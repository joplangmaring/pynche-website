import Image from "next/image";

import forest_fusion_page from "../../../../public/forest_fusion_page.png";
import forest_fusion_page_2 from "../../../../public/forest_fusion_page_2.png";
import forest_fusion_page_0 from "../../../../public/forest_fusion_page_0.png";
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
                <Image src={forest_fusion_page_0} alt="Forest Fusion" layout="fill" objectFit="cover" className="z-0" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className={`text-white text-3xl md:text-6xl font-bold ${adamina.className}`}>FOREST FUSION</h1>
                </div>
            </div>

            {/* About Section */}
            <div className="p-4 md:p-8 lg:p-16">
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>ABOUT THE EVENT</h2>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                    PynChe, a groundbreaking art collaborative founded in September 2023 by Dalarympei Sabrina Kharmawphlang, Lamerphylla Damesha Kharsati, and Maya-ika Lamar, made its debut with &quot;A Gastronomic and Artistic Journey&quot; on December 9-10 in Faridabad. This immersive event, held in collaboration with Crashpad, Mangar, marked the beginning of PynChe&apos;s mission to blend culinary arts, storytelling, and creative expression into transformative experiences.
                </p>
            </div>

            {/* Images Section */}
            <div className="md:p-8 p-5 lg:p-16">
                <Image src={forest_fusion_page} alt="Event Image 1" className="" />
            </div>

            <div className="p-4 md:p-8 lg:p-16">
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                    The inaugural event invited participants on a journey of self-discovery and transformation, drawing inspiration from the mystical world of forest folklore. By intertwining the rich narratives of the forest with the artistry of culinary creation and the therapeutic power of artistic expression, PyrChe created a unique, multisensory experience. Attendees were guided through a carefully curated program that not only tantalized their taste buds with inventive cuisine but also engaged their creativity and connected them with nature&apos;s wisdom. This debut set the stage for PynChe&apos;s future endeavors, promising more events that bridge the gap between art, food, and personal growth.
                </p>
            </div>

            {/* Images Section */}
            <div className="md:p-8 p-5 lg:p-16">
                <Image src={forest_fusion_page_2} alt="Event Image 1" className="" />
            </div>

        </div>
    );
};

export default EventPage;
