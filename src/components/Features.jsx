function Features() {
  const features = [
    "Premium Quality",
    "Fast Delivery",
    "Affordable Prices",
    "Modern Designs",
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {features.map((feature) => (
          <div
            key={feature}
            className="bg-white p-8 rounded-lg text-center shadow"
          >
            {feature}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;