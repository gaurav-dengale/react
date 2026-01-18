import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="bg-white h-screen flex flex-col items-center pt-8">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon"
                    className="w-28 object-contain mb-4"
                />
            </Link>

            <div className="w-[350px] border border-gray-300 p-6 rounded-sm">
                <h1 className="text-3xl font-normal mb-4">Sign in</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold">Email or mobile phone number</label>
                        <input type="text" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange" required />
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <label className="text-sm font-bold">Password</label>
                            <a href="#" className="text-xs text-blue-600 hover:underline hover:text-orange-700">Forgot Password?</a>
                        </div>
                        <input type="password" className="border border-gray-400 p-2 rounded-sm outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange" required />
                    </div>

                    <button type="submit" className="bg-amazon-yellow border border-yellow-500 rounded-sm py-1.5 hover:bg-amazon-orange transition shadow-sm text-sm font-normal">
                        Sign in
                    </button>
                </form>

                <div className="text-xs mt-4 text-gray-600">
                    By continuing, you agree to Amazon's <span className="text-blue-600 hover:underline cursor-pointer">Conditions of Use</span> and <span className="text-blue-600 hover:underline cursor-pointer">Privacy Notice</span>.
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                    <span className="cursor-pointer hover:underline hover:text-red-700">Need help?</span>
                </div>
            </div>

            <div className="w-[350px] relative mt-8 mb-4">
                <div className="absolute top-1/2 left-0 w-full border-t border-gray-300"></div>
                <span className="relative bg-white px-2 text-xs text-gray-500 left-1/2 -translate-x-1/2">New to Amazon?</span>
            </div>

            <button className="w-[350px] bg-gray-100 border border-gray-300 rounded-sm py-1.5 hover:bg-gray-200 transition shadow-sm text-sm font-normal">
                Create your Amazon account
            </button>
        </div>
    );
};

export default Login;
