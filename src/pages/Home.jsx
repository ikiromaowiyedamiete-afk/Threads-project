import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import Discover from "../components/Discover";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <NewArrivals />
      <Discover />
      <Features />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;