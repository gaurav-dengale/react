import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout = () => {
    const { state, dispatch } = useCart();
    const { cart } = state;
    const navigate = useNavigate();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [address, setAddress] = useState({
        fullName: '',
        street: '',
        city: '',
        zip: '',
        country: 'India'
    });

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully!");
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
    };

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="bg-gray-100 min-h-screen pb-10">
            {/* Header simple for checkout */}
            <div className="bg-white border-b shadow-sm h-16 flex items-center justify-between px-4 sm:px-10 lg:px-20 sticky top-0 z-50">
                <Link to="/" className="text-3xl font-bold tracking-tighter">amazon<span className="text-sm font-normal">.in</span></Link>
                <h1 className="text-2xl font-normal hidden sm:block">Checkout</h1>
                <Lock size={20} className="text-gray-500" />
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 mt-4">

                {/* Left: Forms */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                    {/* 1. Address */}
                    <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
                        <h2 className="text-lg font-bold text-amazon-orange mb-4 border-b pb-2">1. Delivery Address</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold">Full Name</label>
                                <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50" required placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold">Mobile Number</label>
                                <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50" required placeholder="9876543210" />
                            </div>
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-sm font-bold">Flat, House no., Building, Company, Apartment</label>
                                <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50" required />
                            </div>
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-sm font-bold">Area, Colony, Street, Sector, Village</label>
                                <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold">Town/City</label>
                                <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold">Pincode</label>
                                <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50" required />
                            </div>
                        </form>
                    </div>

                    {/* 2. Payment (Mock) */}
                    <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
                        <h2 className="text-lg font-bold text-gray-400 mb-4 border-b pb-2">2. Payment Method</h2>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 cursor-pointer transition hover:bg-gray-50 p-2 rounded border border-gray-300 bg-orange-50/50">
                                <input type="radio" name="payment" defaultChecked className="text-amazon-orange focus:ring-amazon-orange" />
                                <span className="font-bold">Pay on Delivery</span>
                                <span className="text-gray-500 text-sm ml-auto">Cash/UPI/Card</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer transition hover:bg-gray-50 p-2 rounded border border-gray-300">
                                <input type="radio" name="payment" disabled className="text-amazon-orange focus:ring-amazon-orange opacity-50" />
                                <span className="font-bold text-gray-400">Credit/Debit Card (Unavailable)</span>
                            </label>
                        </div>
                    </div>

                    {/* 3. Review Items */}
                    <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
                        <h2 className="text-lg font-bold text-gray-400 mb-4 border-b pb-2">3. Review items and delivery</h2>
                        <div className="flex flex-col gap-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4 border p-2 rounded-sm">
                                    <img src={item.image} alt="" className="w-16 h-16 object-contain" />
                                    <div>
                                        <h4 className="font-bold line-clamp-1">{item.title}</h4>
                                        <p className="text-sm text-red-700 font-bold">{formatCurrency(item.price)}</p>
                                        <p className="text-sm">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-5 rounded-sm shadow-sm border border-gray-200 sticky top-24">
                        <button
                            onClick={handlePlaceOrder}
                            className="w-full bg-amazon-yellow py-2 shadow-sm rounded-sm hover:bg-amazon-orange transition text-sm font-normal border border-yellow-500 mb-4"
                        >
                            Place Your Order
                        </button>

                        <div className="text-xs text-center text-gray-500 mb-4 px-2">
                            By placing your order, you agree to Amazon's <span className="text-blue-600 cursor-pointer">privacy notice</span> and <span className="text-blue-600 cursor-pointer">conditions of use</span>.
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-2 text-sm">
                            <h3 className="font-bold text-lg mb-2">Order Summary</h3>
                            <div className="flex justify-between text-gray-600">
                                <span>Items ({totalItems}):</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery:</span>
                                <span>₹0.00</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Total:</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                            <div className="flex justify-between text-red-700 font-bold text-lg border-t border-gray-200 pt-2 mt-2">
                                <span>Order Total:</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

/* Lock icon component for checkout header */
function Lock(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}

export default Checkout;
