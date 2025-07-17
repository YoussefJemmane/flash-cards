import { Link } from "react-router-dom";
import FlashcardInfoCard from "./FlashCardInfo";

// Icons
import SchoolIcon from "@mui/icons-material/School";
import MemoryIcon from "@mui/icons-material/Memory";
import BarChartIcon from "@mui/icons-material/BarChart";
import DevicesIcon from "@mui/icons-material/Devices";
import BoltIcon from "@mui/icons-material/Bolt";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Logo from "../images/Card2.png"

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-50 to-blue-100 font-montserrat">
            {/* Hero */}
            <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center space-y-10 max-w-4xl mx-auto">
                {/* Flashcards image */}
                <div>
                    <img
                        src={Logo}
                        alt="Stack of flashcards"
                        className="w-56 h-96 p-6 object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                    />
                </div>


                {/* Bigger heading with smoother font and subtle shadow */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-900 leading-tight drop-shadow-md">
                    Welcome to FlashMind
                </h1>

                {/* Larger, more readable paragraph */}
                <p className="text-xl md:text-2xl text-indigo-800 max-w-xl leading-relaxed ">
                    Practice smarter with flashcards designed to help you retain information fast.
                    Whether you're learning a language, studying for exams, or improving memory — we've got you covered.
                </p>

                {/* Modern button with pointer, bigger size, and scale + fill hover effect */}
                <Link to="/cards" aria-label="Get started with FlashMind flashcards">
                    <button
                        className="mt-6 px-10 py-5 bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-lg
                            cursor-pointer
                            transition-all duration-300 ease-in-out transform
                            hover:scale-105 hover:bg-indigo-700 hover:shadow-2xl
                            focus:outline-none focus:ring-4 focus:ring-indigo-300
                            active:scale-95
                            animate-bounce
                            "
                    >
                        Get Started
                    </button>
                </Link>
            </section>

            {/* Cards Section (unchanged) */}
            <section className="px-6 space-y-12 pb-30">
                <FlashcardInfoCard
                    title="Learning Reinvented"
                    Icon={SchoolIcon}
                    content={`FlashCardAS transforms traditional studying into active recall and spaced repetition techniques.
                                With customizable decks, your learning becomes personalized and engaging.
                                No more passive reading — just focused, effective study sessions.
                                Perfect for students, professionals, and lifelong learners.`}
                />
                <FlashcardInfoCard
                    title="Smart Repetition"
                    Icon={MemoryIcon}
                    content={`Our built-in repetition scheduler keeps track of when you should review cards.
Using proven spaced repetition techniques, we remind you just before you're likely to forget.
This boosts long-term memory retention and reduces wasted time.
Perfect for exams, languages, and certifications.`}
                />
                <FlashcardInfoCard
                    title="Track Your Progress"
                    Icon={BarChartIcon}
                    content={`Visual reports help you monitor your mastery over time.
Track your accuracy, most missed cards, review frequency, and more.
Get detailed insights to improve your strategy.
You’ll always know what you’ve mastered and what needs more work.`}
                />
                <FlashcardInfoCard
                    title="Study Anywhere"
                    Icon={DevicesIcon}
                    content={`Continue learning seamlessly across your devices.
FlashCardAS works in any browser, and automatically syncs your data.
Start on your laptop, continue on your tablet, and review on your phone.
You never lose progress, even if you switch devices.`}
                />
                <FlashcardInfoCard
                    title="Fast and Lightweight"
                    Icon={BoltIcon}
                    content={`FlashCardAS is blazing fast and distraction-free.
No ads, no clutter — just simple tools for effective learning.
Whether you have 5 minutes or 50, it loads instantly and gets you studying.
Built to support deep focus and flow.`}
                />
                <FlashcardInfoCard
                    title="Mobile App (Coming Soon)"
                    Icon={SmartphoneIcon}
                    content={`Take FlashCardAS offline with our upcoming mobile app.
Study flashcards anytime — even on a plane or subway.
Native iOS and Android support ensures smooth performance.
Notifications, dark mode, and offline sync included from day one.`}
                />
            </section>
        </div>
    );
};

export default Hero;
