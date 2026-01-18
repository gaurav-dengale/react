import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../utils/data';
import { useCart } from '../context/CartContext';
import { Star, MapPin, Lock } from 'lucide-react';
import { useState } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { dispatch } = useCart();
    const product = products.find(p => p.id === parseInt(id));
    const [qty, setQty] = useState(1);

    if (!product) {
        return <div className="p-10 text-center">Product not found</div>;
    }

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const addToCart = () => {
        // Add logic to add multiple items if needed, mostly context handles 1 or +1
        // Ideally update context to accept quantity payload
        // For now we just add one by one or we could update reducer. 
        // Let's stick to simple ADD for now, repeating dispatch is hacky.
        // Better: Update context to take quantity. but let's just trigger ADD once.
        // The Amazon "Add to Cart" usually implies adding 1 unless defined.
        // Wait, I added a qty selector in the UI below, so I should use it.

        // Simplification for this task: Loop or update reducer.
        // I'll update reducer conceptually or just dispatch multiple times for quickness? 
        // No, that's bad practice.
        // Let's just Dispatch once. The reducer handles +1. 
        // If I want to support adding N items, I should fix reducer.
        // For now, I will just dispatch { ...product } and let it increment by 1.
        // Assuming the user wants 1. If they select more in the dropdown, I need to update reducer logic.
        // Let's update reducer logic? No time. I will just ignore the local Qty state for the 'Add to Cart' action 
        // OR just loop dispatch (dirty but works for UI demo)

        for (let i = 0; i < qty; i++) {
            dispatch({ type: 'ADD_TO_CART', payload: product });
        }
    };

    const buyNow = () => {
        addToCart();
        navigate('/checkout');
    }

    return (
        <div className="bg-white min-h-screen py-8">
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Gallery - sticky on desktop usually, but static for now */}
                <div className="lg:col-span-1 flex justify-center">
                    {/* Thumbnails (Static) */}
                    <div className="hidden md:flex flex-col gap-2 mr-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-10 h-10 border border-gray-300 rounded-sm hover:border-amazon-orange cursor-pointer overflow-hidden p-1">
                                <img src={product.image} className="w-full h-full object-contain" alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="flex-1">
                        <img src={product.image} alt={product.title} className="max-h-[400px] object-contain w-full sticky top-20" />
                    </div>
                </div>

                {/* Middle Details */}
                <div className="lg:col-span-2 flex flex-col gap-2">
                    <h1 className="text-2xl font-medium text-gray-900">{product.title}</h1>
                    <Link to="/" className="text-teal-600 hover:underline text-sm font-medium">Visit the {product.category} Store</Link>

                    <div className="flex items-center gap-2">
                        <div className="flex text-amazon-orange">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className="text-teal-600 text-sm hover:underline cursor-pointer">{formatCurrency(product.reviews).replace('₹', '')} ratings</span>
                    </div>

                    <div className="border-t border-b border-gray-200 py-4 my-2">
                        <div className="flex items-start gap-2">
                            <span className="text-2xl font-light text-red-700">-18%</span>
                            <div className="flex items-start">
                                <span className="text-xs pt-1">₹</span>
                                <span className="text-3xl font-medium">{formatCurrency(product.price).replace('₹', '')}</span>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm">
                            M.R.P.: <span className="line-through">₹{formatCurrency(product.price * 1.18).replace('₹', '')}</span>
                        </div>
                        <div className="text-sm mt-2">Inclusive of all taxes</div>
                    </div>

                    {/* Offers */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="min-w-[150px] border p-2 rounded-sm shadow-sm text-sm">
                                <div className="font-bold text-amazon-default">Bank Offer</div>
                                <p className="text-xs line-clamp-2">5% Instant Discount on Amazon Pay ICICI Credit Card Transactions</p>
                                <span className="text-teal-600 text-xs hover:underline cursor-pointer">1 offer &gt;</span>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                        <h3 className="font-bold mb-1">About this item</h3>
                        <ul className="list-disc pl-4 text-sm space-y-1">
                            <li>Processor: High performance chip for seamless multitasking.</li>
                            <li>Display: Stunning quality with vibrant colors and deep blacks.</li>
                            <li>Camera: Professional grade system to capture your moments.</li>
                            <li>Battery: All-day battery life to keep you going.</li>
                            <li>Design: Sleek and modern design that looks premium.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Buy Box */}
                <div className="lg:col-span-1">
                    <div className="border border-gray-300 rounded-md p-4 shadow-sm text-sm">
                        <div className="text-3xl font-medium mb-2">
                            <span className="text-xs align-top">₹</span>
                            {formatCurrency(product.price).replace('₹', '')}
                        </div>

                        <div className="text-teal-700 font-medium mb-1">FREE delivery</div>
                        <div className="text-xs mb-4">
                            Or fastest delivery <span className="font-bold">Tomorrow, 4 PM</span>. Order within <span className="text-green-600">4 hrs 2 mins</span>.
                        </div>

                        <div className="text-xl text-green-700 font-medium mb-4">In stock</div>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Payment</span>
                                <span className="text-teal-600">Secure transaction</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Ships from</span>
                                <span className="text-black">Amazon</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Sold by</span>
                                <span className="text-teal-600">Appario Retail Private Ltd</span>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-4">
                            <label htmlFor="qty" className="sr-only">Quantity</label>
                            <select
                                id="qty"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md shadow-sm focus:ring-amazon-orange focus:border-amazon-orange block w-full p-1"
                                value={qty}
                                onChange={(e) => setQty(Number(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>Quantity: {n}</option>)}
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-2 mt-4">
                            <button
                                onClick={addToCart}
                                className="w-full bg-amazon-yellow border border-yellow-500 rounded-full py-2 hover:bg-amazon-orange transition shadow-sm text-sm"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={buyNow}
                                className="w-full bg-amazon-orange border border-yellow-600 rounded-full py-2 hover:bg-orange-500 transition shadow-sm text-sm"
                            >
                                Buy Now
                            </button>
                        </div>

                        <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                            <Lock size={12} />
                            Secure transaction
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
