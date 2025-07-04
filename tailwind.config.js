/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
    darkMode: ['selector', '[class="app-dark"]'],
    content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
    plugins: [PrimeUI],
    theme: {
        screens: {
            sm: "340px",
            md: "540px",
            lg: "768px",
            xl: "1180px",
        },
        extend: {},
        keyframes: {
            move: {
                "50%": { transform: "translateY(-1rem)" },
            },
            rotate: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },
            scaleUp: {
                "0%": { transform: "scale(0.8)" },
                "50%": { transform: "scale(1.2)" },
                "100%": { transform: "scale(0.8)" },
            },
        },
         animation: {
            movingY: "move 3s linear infinite",
            rotating: "rotate 15s linear infinite",
            scalingUp: "scaleUp 3s linear infinite",
        },
        fontFamily: {
            Jost: ["Jost", "sans-serif"],
            Lobster: [ "Lobster","sans-seri"]
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "12px",
                md: "32px"
            }
        }
    }
};
