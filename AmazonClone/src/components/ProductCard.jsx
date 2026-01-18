import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Helper to format currency
const formatCurrency = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
};

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="bg-white flex flex-col p-4 z-30 relative h-[400px] border border-gray-100 rounded-sm hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out group">
            <div className="flex-1 relative flex items-center justify-center bg-gray-50 mb-3 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-52 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium line-clamp-2 hover:text-amazon-orange cursor-pointer">
                    {product.title}
                </h3>

                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amazon-orange fill-amazon-orange' : 'text-gray-300'}`}
                        />
                    ))}
                    <span className="text-xs text-blue-500 ml-2 hover:underline cursor-pointer">{product.reviews}</span>
                </div>

                <div className="text-xl font-medium">
                    <span className="text-xs align-top mt-1 inline-block">₹</span>
                    {formatCurrency(product.price).replace('₹', '')}
                </div>
            </div>

            <button
                onClick={addToCart}
                className="mt-3 w-full bg-amazon-yellow hover:bg-amazon-orange focus:ring-2 focus:ring-amazon-orange/50 active:scale-95 text-xs font-semibold py-2 rounded-full transition-all duration-200"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
