import { Link } from "react-router-dom";
import FlashcardInfoCard from "./FlashCardInfo";

// Icons
import SchoolIcon from "@mui/icons-material/School";
import MemoryIcon from "@mui/icons-material/Memory";
import BarChartIcon from "@mui/icons-material/BarChart";
import DevicesIcon from "@mui/icons-material/Devices";
import BoltIcon from "@mui/icons-material/Bolt";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import StorageIcon from "@mui/icons-material/Storage";

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

            {/* Cards Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-30">
               
                <FlashcardInfoCard
                    title="Create Custom Flash Cards"
                    Icon={AddCircleIcon}
                    content={`Easily create personalized flash cards with titles, questions, and answers.
Build your own study materials tailored to your learning needs.
Whether it's vocabulary, formulas, or concepts — create cards that work for you.
Simple form interface makes card creation quick and intuitive.`}
                />
                <FlashcardInfoCard
                    title="Interactive Card Flipping"
                    Icon={FlipCameraAndroidIcon}
                    content={`Experience smooth 3D card flipping animations that make studying engaging.
Click any card to reveal the answer with a satisfying flip effect.
Visual feedback helps reinforce memory through interactive learning.
Beautifully designed cards with hover effects and transitions.`}
                />
                <FlashcardInfoCard
                    title="Like & Organize Cards"
                    Icon={FavoriteIcon}
                    content={`Mark your favorite cards and access them in a dedicated "Liked Cards" section.
Quickly identify important cards you want to review more frequently.
Organize your study materials by separating liked cards from your main collection.
Visual indicators show which cards you've liked at a glance.`}
                />
                <FlashcardInfoCard
                    title="Edit & Delete Cards"
                    Icon={EditIcon}
                    content={`Full control over your flash cards with easy editing and deletion.
Update card content, fix typos, or improve questions and answers.
Remove cards you no longer need to keep your collection clean.
Intuitive interface makes managing your cards effortless.`}
                />
                <FlashcardInfoCard
                    title="Local Storage & Persistence"
                    Icon={StorageIcon}
                    content={`Your flash cards are automatically saved in your browser's local storage.
No account required — your data stays private and secure on your device.
Cards persist between sessions so you never lose your progress.
Instant loading and no internet connection required for studying.`}
                />
                <FlashcardInfoCard
                    title="Responsive Design"
                    Icon={DevicesIcon}
                    content={`Study on any device with our fully responsive design.
Optimized for desktop, tablet, and mobile viewing.
Cards adapt beautifully to different screen sizes and orientations.
Same great experience whether you're at home or on the go.`}
                />
           
            </section>
        </div>
    );
};

export default Hero;
