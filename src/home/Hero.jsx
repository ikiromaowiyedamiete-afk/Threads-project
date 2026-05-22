import HeroImage from "./HeroImage";
function Hero() {
    return (
        <section className="min-h-section flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-5xl font-bold text-white">
                Welcome to KYZ-Threads
            </h1>

            <p className="mt-4 text-gray-400 text-lg">
                Discover styles that fit you 
            </p>

            <HeroImage />
        </section>
    );
}

export default Hero;
