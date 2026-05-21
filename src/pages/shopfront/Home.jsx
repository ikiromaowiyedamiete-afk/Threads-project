import Navbar from "../../components/common/Navbar"; 
import Footer from "../../components/common/Footer"; 
function Home() {
    return (
        <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
                Welcome to KYZ-THREADS
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
                Discover styles that fit you 
            </p>
        </div>
        </div>

        <Footer />
        </>
    );
}

export default Home;