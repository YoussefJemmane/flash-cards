import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FlashcardInfoCard = ({ title, content, Icon }) => {
    const cardRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-white hover:bg-indigo-50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] shadow-md p-10 rounded-3xl w-full max-w-6xl mx-auto border border-gray-200"
        >
            <div className="flex items-start gap-4 mb-4">
                {Icon && <Icon className="text-indigo-600 w-8 h-8 flex-shrink-0 mt-1" />}
                <h3 className="text-3xl font-bold text-blue-800">{title}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{content}</p>
        </div>
    );
};

export default FlashcardInfoCard;
