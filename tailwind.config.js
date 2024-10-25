const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",

    theme: {

        extend: {
            fontFamily: {
                anton: "Anton SC", // Added font family
            },
            backgroundImage: {
                mh: "url('/bgimage.webp')",
                bg: "url('/sparkupsummit/images/backgrounds/back.jpg')",
                bg1: "url('/sparkupsummit/images/backgrounds/home_bg.jpg')", // Added background image
            },
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
                shimmer: "shimmer 2s linear infinite",
                "infinite-slide": "infinite-slide 30s linear infinite",
                spinslow: "spin 5s infinite", // New slow spin animation
                spinslow2: "spin-slow2 4s infinite", // Added new slow spin animation
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
                shimmer: {
                    from: {
                        "backgroundPosition": "0 0"
                    },
                    to: {
                        "backgroundPosition": "-200% 0"
                    }
                },
                "infinite-slide": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                // Add new keyframes here
                "spin-slow2": {
                    from: { transform: "rotate(360deg)" },
                    to: { transform: "rotate(0deg)" },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
