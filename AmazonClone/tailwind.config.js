/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                amazon: {
                    background: "#EAEDED",
                    light_blue: "#232F3E",
                    blue: "#131921",
                    light: "#FFFFFF",
                    default: "#131921",
                    yellow: "#FEBD69", // Amazon button yellow
                    orange: "#F3A847" // Darker orange
                }
            }
        },
    },
    plugins: [],
}
