import Image from "next/image";
import Image2 from "../../../../public/Image2.jpg";
import kilometre_zero_1 from "../../../../public/kilometre_zero_1.png";
import kilometre_zero_2 from "../../../../public/kilometre_zero_2.png";

// Fonts
import { Adamina, Alegreya } from "next/font/google";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });

const EventPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image src={Image2} alt="Forest Fusion" layout="fill" objectFit="cover" className="z-0" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className={`text-white text-3xl md:text-6xl font-bold ${adamina.className}`}>KILOMETRE ZERO</h1>
                </div>
            </div>

            {/* New Description Section */}
            <div className="p-4 md:p-8 lg:p-16">
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>Forage-to-Table Bliss: A Day of Art, Foraging, and Sustainable Dining at Linsamer Farms</h2>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                Are you tired of the same old dining experiences? Imagine stepping into a world where art, nature, and culinary excellence blend seamlessly. That's exactly what happened at the recent Kilometre Zero event held at the picturesque Linsamer Farms.
                </p>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>A Warm Welcome to Nature's Embrace</h3>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                As guests arrived, they were greeted with refreshing welcome drinks and delectable canapés. The farm's expansive grounds offered a serene backdrop, inviting participants to explore foraging spots, fishing areas, and lush gardens. This immersive start set the tone for a day of discovery and connection with nature.
                </p>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>Unveiling the Kilometre Zero Concept</h3>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                Lamerphylla Kharsati kicked off the event with an enlightening speech about the Kilometre Zero concept. This philosophy, emphasizing ultra-local sourcing, perfectly aligned with Linsamer Farms' abundance of wild forage – from plants to fish.
                </p>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>Art as Therapy: Expressing Through Nature</h3>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                Led by the talented Maya-ika, guests engaged in three therapeutic art activities:
                </p>
                <ol className={`list-decimal ml-5 ${alegreya.className}`}>
                    <li className="mb-4">Mural Painting: Participants unleashed their creativity on gazebo walls, surrounded by herb gardens and overlooking a tranquil fishing lake.</li>
                    <li className="mb-4">Seed Paper Planting: In a unique twist, guests planted biodegradable seed paper containing their written thoughts – a symbolic act of growth and renewal.</li>
                    <li className="mb-4">Time Capsule: Participants penned down reflections to revisit in the future, creating a personal connection to the day's experiences.</li>
                </ol>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                These activities not only provided fun but also offered meaningful, therapeutic moments for all involved.
                </p>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>Culinary Magic: From Forest to Plate</h3>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                While art flourished on one side of the farm, culinary wonders were being crafted on the other. An outdoor kitchen, set up near the forest edge, buzzed with activity as Dalarympei and Ahmedaki prepared lunch over open fires. Guests had the unique opportunity to engage with chefs, learning about traditional cooking methods and local ingredients.
                </p>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>A Feast for the Senses</h3>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                The highlight of the day was undoubtedly the four-course sit-down lunch. Served under a canopy tent with picnic tables, each dish showcased the bounty of local foraging. From wild herbs to edible greens, many ingredients were harvested from nearby forests and farms. An educational display of these foraged items allowed diners to deepen their understanding of local flora and their nutritional benefits.
                </p>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>More Than Just a Meal</h3>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                This event, curated by Pynche, went beyond simple dining. It embodied "environmental consciousness through cultural assimilation, experiential curation, and artistic expression." By combining art, sustainability, and gourmet cuisine, the Kilometre Zero event at Linsamer Farms offered a truly unforgettable experience.
                </p>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                Whether you're a food enthusiast, nature lover, or art aficionado, events like these remind us of the beautiful connections between our food, our environment, and our creativity. Stay tuned for more exciting farm-to-table experiences that nourish both body and soul.
                </p>
            </div>

            {/* Images Section */}
            <div className="md:p-8 p-5 lg:p-16">
                <Image src={kilometre_zero_1} alt="Event Image 1" className="" />
            </div>

            <div className="p-4 md:p-8 lg:p-16">
                <Image src={kilometre_zero_2} alt="Event Image 1" className="" />
            </div>
        </div>
    );
};

export default EventPage;
