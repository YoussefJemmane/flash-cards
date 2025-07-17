import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/Card.png";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* Navbar content */}
            <header className="bg-indigo-200 z-10 relative">
                <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col 2xl:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <Link to="/" className="shrink-0">
                        <img
                            src={logo}
                            alt="FlashMind Logo"
                            className="w-40 md:w-48 h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-col sm:flex-row flex-wrap gap-4 text-center text-indigo-900 font-montserrat font-semibold text-lg md:text-xl lg:text-2xl">
                        <div
                            onClick={() => navigate('/cards')}
                            className="cursor-pointer px-5 py-3 rounded-full hover:bg-indigo-300/50 hover:text-indigo-800 transition-all duration-300"
                        >
                            My Cards
                        </div>

                        <div
                            onClick={() => navigate('/liked-cards')}
                            className="cursor-pointer px-5 py-3 rounded-full hover:bg-indigo-300/50 hover:text-indigo-800 transition-all duration-300"
                        >
                            Liked Cards
                        </div>
                    </nav>
                </div>
            </header>

            {/* Spikes */}
            <div className="w-full ">
                <svg
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                    className="w-full h-10"
                >
                    <polygon
                        points="0,0 50,100 100,0 150,100 200,0 250,100 300,0 350,100 400,0 450,100 500,0 550,100 600,0 650,100 700,0 750,100 800,0 850,100 900,0 950,100 1000,0 1050,100 1100,0 1150,100 1200,0"
                        className="fill-indigo-200"
                    />
                </svg>
            </div>
        </div>
    );
};
