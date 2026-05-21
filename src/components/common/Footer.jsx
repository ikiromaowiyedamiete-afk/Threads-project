function Footer() {
    return ( 
        <footer className="bg-black text-white py-8 mt-10 ">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div>
                    <h2 className="text-2xl font-bold">
                        KYZ Threads
                    </h2>
                    <p className="text-sm mt-2 text-gray-400">
                        Fashion that speaks your style.
                    </p>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="/" className="hover:text-gray-300">
                    Home
                    </a>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                © {new Date().getFullYear()} KYZ Threads. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
