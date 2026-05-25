export default function FilterSidebar() {
    return (
        <div className="bg-gray-100 p-5 rounded">

            <h2 className="font-bold text-xl mb-4">Filter by</h2>

            <div className="mb-4">
                <p className="font-semibold mb-2">Categories</p>
                
        </div>

        <div className="space-y-2 mt-2">
            <label className="block">
                <input type="checkbox" /> Hoodies
            </label>

            <label className="block">
                <input type="checkbox" /> Shirts
            </label>    

            <label className="block">
                <input type="checkbox" /> Joggers
            </label>
        </div>
        </div>
    );
}   