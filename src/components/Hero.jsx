function Hero() {
  return (
    <section className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl font-bold mb-4">
        Wear Your Style
      </h1>

      <p className="text-gray-300 mb-6 max-w-xl">
        Discover clothing that matches your personality and style.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-lg">
          Shop Now
        </button>

        <button className="border border-white px-6 py-3 rounded-lg">
          Explore
        </button>
      </div>
    </section>
  );
}

export default Hero;