function NewArrivals() {
  const products = [
    {
      name: "Classic Hoodie",
      price: "$45",
    },
    {
      name: "Oversized Tee",
      price: "$30",
    },
    {
      name: "Sneakers",
      price: "$70",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        New Arrivals
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="h-52 bg-gray-200 rounded"></div>

            <h3 className="font-bold mt-4">
              {product.name}
            </h3>

            <p>{product.price}</p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
              Add To Cart
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default NewArrivals;