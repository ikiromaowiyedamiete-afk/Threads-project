function NewsLetter() {
  return (
    <section className="bg-black text-white py-16 px-8 text-center">

      <h2 className="text-3xl font-bold mb-4">
        Subscribe
      </h2>

      <p className="mb-6">
        Stay updated with our latest products.
      </p>

      <div className="flex justify-center gap-3">

        <input
          type="email"
          placeholder="Enter email"
          className="px-4 py-3 rounded-lg text-black"
        />

        <button className="bg-white text-black px-6 rounded-lg">
          Subscribe
        </button>

      </div>

    </section>
  );
}

export default NewsLetter;