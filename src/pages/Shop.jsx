import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/products/ProductCard";
import products from "../data/products";
import FilterSidebar from "../components/products/FilterSidebar";        

function Shop() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <FilterSidebar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;    