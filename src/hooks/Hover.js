import gsap from "gsap";
import { useRef } from "react";

export const useHoverEffect = (config = {}) => {
    const ref = useRef();

    const handleEnter = () => {
        gsap.to(ref.current, {
            y: -10,
            rotate: 3,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.4,
            ease: "power2.out",
            ...config,
        });
    };

    const handleLeave = () => {
        gsap.to(ref.current, {
            y: 0,
            rotate: 0,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.4,
            ease: "power2.inOut",
        });
    };

    const bind = {
        ref,
        onMouseEnter: handleEnter,
        onMouseLeave: handleLeave,
    };

    return bind;
};