// components/Footer.jsx
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
    const aboutLinks = ["About FlashMind", "Careers", "Press", "Contact"];
    const supportLinks = ["Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy"];
    const productLinks = ["Flashcards App", "Mobile App", "API Access", "Business Solutions"];

    const socialLinks = [
        { icon: <TwitterIcon className="text-indigo-300 w-5 h-5" />, label: "Twitter", href: "#" },
        { icon: <InstagramIcon className="text-pink-300 w-5 h-5" />, label: "Instagram", href: "#" },
        { icon: <FacebookRoundedIcon className="text-blue-300 w-5 h-5" />, label: "Facebook", href: "#" },
        { icon: <YouTubeIcon className="text-red-300 w-5 h-5" />, label: "YouTube", href: "#" },
        { icon: <LinkedInIcon className="text-indigo-400 w-5 h-5" />, label: "LinkedIn", href: "#" },
    ];

    const linkClass =
        "cursor-pointer text-indigo-600 hover:text-indigo-500 hover:scale-[1.02] transition-transform duration-200";

    return (
        <footer className="bg-indigo-50 font-montserrat rounded-t-3xl text-indigo-600 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
                    {/* About Section */}
                    <div>
                        <h3 className="text-indigo-700 font-semibold text-xl mb-5 tracking-wide">About</h3>
                        <ul className="space-y-3">
                            {aboutLinks.map((item) => (
                                <li key={item}>
                                    <a href="#" className={linkClass}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-indigo-700 font-semibold text-xl mb-5 tracking-wide">Support</h3>
                        <ul className="space-y-3">
                            {supportLinks.map((item) => (
                                <li key={item}>
                                    <a href="#" className={linkClass}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div>
                        <h3 className="text-indigo-700 font-semibold text-xl mb-5 tracking-wide">Products</h3>
                        <ul className="space-y-3">
                            {productLinks.map((item) => (
                                <li key={item}>
                                    <a href="#" className={linkClass}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="text-indigo-700 font-semibold text-xl mb-5 tracking-wide">Follow Us</h3>
                        <ul className="flex flex-wrap justify-center sm:justify-start gap-4">
                            {socialLinks.map(({ icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-100 hover:scale-[1.03] transition-all duration-200 cursor-pointer"
                                    >
                                        <span className="flex items-center justify-center bg-indigo-100 rounded-full w-8 h-8">
                                            {icon}
                                        </span>
                                        <span className="text-sm font-medium">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-10 border-t border-indigo-200 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-indigo-400 select-none space-y-2 md:space-y-0">
                    <p>© 2025 FlashMind. All rights reserved.</p>
                    <p className="opacity-60">Made with ❤️ by Youssef AS</p>
                </div>
            </div>
        </footer>
    );
}
