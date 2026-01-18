import { useCart } from '../context/CartContext';
import { Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { state, dispatch } = useCart();
    const { cart } = state;

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-6">

                {/* Left Section: Cart Items */}
                <div className="flex-grow shadow-sm bg-white p-5 rounded-sm">
                    <div className="flex flex-col border-b pb-4">
                        <h1 className="text-3xl border-b pb-4 font-normal">Shopping Cart</h1>
                        {cart.length === 0 ? (
                            <div className="mt-5 text-center">
                                <h2 className="text-xl">Your Amazon Basket is empty.</h2>
                                <Link to="/" className="text-blue-500 hover:underline mt-2 inline-block">Shop today's deals</Link>
                            </div>
                        ) : <span className="mt-2 text-right hidden sm:block text-gray-500 text-sm">Price</span>}

                        {cart.map((item) => (
                            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-6 border-b my-2">
                                {/* Image */}
                                <div className="sm:col-span-1 justify-center flex">
                                    <img src={item.image} alt={item.title} className="object-contain h-40 w-40" />
                                </div>

                                {/* Details */}
                                <div className="sm:col-span-4 flex flex-col gap-2 relative">
                                    <div className="flex justify-between">
                                        <Link to={`/product/${item.id}`} className="font-medium text-lg text-blue-600 hover:underline line-clamp-2 sm:line-clamp-none w-4/5">
                                            {item.title}
                                        </Link>
                                        <p className="font-bold text-lg sm:hidden">
                                            {formatCurrency(item.price)}
                                        </p>
                                    </div>

                                    <div className="text-sm text-green-600 my-1">In Stock</div>
                                    <div className="flex items-center text-xs text-gray-500 mb-2">
                                        <span className="font-bold text-gray-700">Eligible for FREE Shipping</span>
                                        <img src="https://links.papareact.com/fdw" alt="" className="h-3 ml-1" />
                                    </div>

                                    <div className="flex items-center gap-4 text-sm">
                                        {/* Quantity */}
                                        <div className="flex items-center gap-1 bg-gray-100 rounded-md shadow-sm border border-gray-300 px-2 py-1">
                                            <span className="text-xs">Qty:</span>
                                            <select
                                                value={item.quantity}
                                                onChange={(e) => dispatch({
                                                    type: 'UPDATE_QUANTITY',
                                                    payload: { id: item.id, quantity: Number(e.target.value) }
                                                })}
                                                className="bg-transparent text-sm outline-none cursor-pointer"
                                            >
                                                {[...Array(10)].map((_, i) => (
                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="h-4 w-px bg-gray-300"></div>

                                        <button
                                            onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}
                                            className="text-blue-600 hover:underline text-xs sm:text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>

                                    {/* Desktop Price moved here for alignment or kept separate */}
                                    <div className="hidden sm:block absolute top-0 right-0 font-bold text-lg">
                                        {formatCurrency(item.price)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: Subtotal */}
                {cart.length > 0 && (
                    <div className="flex flex-col bg-white p-5 shadow-sm rounded-sm lg:w-80 h-fit sticky top-20">
                        <div className="flex flex-col gap-2 whitespace-nowrap">
                            <div className="flex items-center gap-2 mb-2 text-green-600 text-sm">
                                <CheckCircle className="h-5 w-5" />
                                <span>Part of your order qualifies for FREE Delivery.</span>
                            </div>
                            <h2 className="text-lg">
                                Subtotal ({totalItems} items):
                                <span className="font-bold ml-1">{formatCurrency(total)}</span>
                            </h2>

                            <div className="flex items-center gap-1 text-sm mt-1 mb-4">
                                <input type="checkbox" className="rounded-sm border-gray-300 text-amazon-orange focus:ring-amazon-orange" />
                                <span>This order contains a gift</span>
                            </div>

                            <Link to="/checkout" className="w-full">
                                <button className="button w-full bg-amazon-yellow py-2 rounded-md shadow-sm hover:bg-amazon-orange transition text-sm font-normal border border-yellow-500">
                                    Proceed to Buy
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
