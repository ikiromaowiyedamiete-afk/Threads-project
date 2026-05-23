function Testimonials() {
  return (
    <section className="py-16 px-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="shadow p-6 rounded-lg">
          ⭐⭐⭐⭐⭐
          <p>"Amazing quality!"</p>
        </div>

        <div className="shadow p-6 rounded-lg">
          ⭐⭐⭐⭐⭐
          <p>"Fast delivery."</p>
        </div>

        <div className="shadow p-6 rounded-lg">
          ⭐⭐⭐⭐⭐
          <p>"Loved the design."</p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;