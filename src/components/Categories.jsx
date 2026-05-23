function Categories() {
  const categories = [
    "Men",
    "Women",
    "Streetwear",
    "Accessories",
  ];

  return (
    <section className="py-16 px-8">

      <h2 className="text-3xl font-bold text-center mb-10">
        Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-gray-100 p-10 rounded-lg text-center shadow"
          >
            <h3 className="font-bold">{item}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Categories;