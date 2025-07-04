    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
             space: ['"Space Grotesk"', 'sans-serif'],
          },
          animation: {
            'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
          keyframes: {
            pulse: {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.5 },
            },
          },
        },
      },
      plugins: [],
    }
    