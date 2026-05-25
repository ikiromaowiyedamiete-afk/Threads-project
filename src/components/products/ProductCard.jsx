export default function ProductCard({ product }) {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">₦{product.price.toLocaleString()}</p>
            </div>
        </div>
    );
}
