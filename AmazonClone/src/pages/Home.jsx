import ProductCard from '../components/ProductCard';
import { products } from '../utils/data';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen pb-10">
            {/* Hero Banner (Static Placeholder) */}
            <div className="relative">
                <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
                <img
                    className="w-full home-image mask-image-b object-cover h-[300px] sm:h-[400px] lg:h-[600px] cursor-pointer"
                    src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                    alt="Banner"
                />
            </div>

            {/* Product Grid */}
            <div className="max-w-screen-2xl mx-auto px-4 -mt-16 sm:-mt-32 lg:-mt-60 relative z-30">
                <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {/* First 4 products */}
                    {products.slice(0, 4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    {/* Middle promotional image (optional) */}
                    <img
                        className="md:col-span-full w-full h-[200px] sm:h-[300px] object-cover cursor-pointer hover:opacity-90 transition rounded-sm"
                        src="https://links.papareact.com/dyz"
                        alt=""
                    />

                    {/* Remaining products */}
                    {products.slice(4).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Home;
