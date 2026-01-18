import { Search, ShoppingCart, Menu, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { state } = useCart();
    const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="sticky top-0 z-50">
            {/* Top Header */}
            <div className="flex items-center bg-amazon-default text-white h-16 px-4 gap-4">
                {/* Logo */}
                <Link to="/" className="border border-transparent hover:border-white p-2 rounded-sm cursor-pointer">
                    <h1 className="text-2xl font-bold tracking-tighter">amazon<span className="text-sm font-normal">.in</span></h1>
                </Link>

                {/* Deliver To */}
                <div className="hidden md:flex flex-col items-start border border-transparent hover:border-white p-2 rounded-sm cursor-pointer text-sm">
                    <span className="text-gray-300 text-xs ml-4">Deliver to</span>
                    <div className="flex items-center font-bold">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>India</span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-1 hidden sm:flex items-center h-10 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-amazon-orange">
                    <div className="bg-gray-200 h-full w-12 flex items-center justify-center text-gray-500 border-r border-gray-300 cursor-pointer hover:bg-gray-300 transition text-xs">
                        All
                    </div>
                    <input
                        type="text"
                        className="flex-1 h-full px-3 text-black outline-none placeholder-gray-500"
                        placeholder="Search Amazon.in"
                    />
                    <button className="bg-amazon-yellow hover:bg-amazon-orange h-full w-12 flex items-center justify-center transition">
                        <Search className="text-amazon-default w-6 h-6" />
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 text-sm">
                    {/* Flag / Lang (Placeholder) */}
                    <div className="hidden lg:flex items-center font-bold border border-transparent hover:border-white p-2 rounded-sm cursor-pointer">
                        <span className="mr-1">EN</span>
                    </div>

                    {/* Account */}
                    <div className="flex flex-col border border-transparent hover:border-white p-2 rounded-sm cursor-pointer">
                        <span className="text-xs text-gray-300">Hello, sign in</span>
                        <span className="font-bold">Account & Lists</span>
                    </div>

                    {/* Orders */}
                    <div className="hidden sm:flex flex-col border border-transparent hover:border-white p-2 rounded-sm cursor-pointer">
                        <span className="text-xs text-gray-300">Returns</span>
                        <span className="font-bold">& Orders</span>
                    </div>

                    {/* Cart */}
                    <Link to="/cart" className="flex items-end border border-transparent hover:border-white p-2 rounded-sm cursor-pointer relative">
                        <div className="relative">
                            <ShoppingCart className="w-8 h-8" />
                            <span className="absolute -top-1 -right-1 bg-amazon-orange text-amazon-blue font-bold text-xs h-4 w-4 rounded-full flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        </div>
                        <span className="font-bold ml-1 hidden lg:inline">Cart</span>
                    </Link>
                </div>
            </div>

            {/* Sub Header */}
            <div className="flex items-center bg-amazon-light_blue text-white h-10 px-4 text-sm gap-4 overflow-x-auto no-scrollbar shadow-sm">
                <div className="flex items-center gap-1 font-bold cursor-pointer hover:text-amazon-orange transition">
                    <Menu className="w-6 h-6" />
                    <span>All</span>
                </div>
                {['Fresh', 'Amazon miniTV', 'Sell', 'Best Sellers', 'Mobiles', 'Today\'s Deals', 'Prime', 'Customer Service', 'Electronics'].map((item) => (
                    <span key={item} className="cursor-pointer whitespace-nowrap px-2 py-1 border border-transparent hover:border-white rounded-sm text-gray-200 hover:text-white transition">
                        {item}
                    </span>
                ))}
            </div>
        </header>
    );
};

export default Header;
