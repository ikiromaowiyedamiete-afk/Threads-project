import Navbar from "../../components/common/Navbar";  
function Home() {
    return (
        <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl font-bold">
                Welcome to KYZ-THREADS
            </h1>
            <p className="mt-3 text-gray-600">
                Discover styles that fit you 
            </p>
        </div>
        </>
    );
}

export default Home;