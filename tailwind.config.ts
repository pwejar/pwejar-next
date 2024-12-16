import type { Config } from "tailwindcss";
import daisyui from "daisyui"
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pwejar:"#3e2d44",
      lightBackground: "#b5bbc2",
      light:"#ffffff"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        pwejar: {
          
            "primary": "#3e2d44",
                      
            "secondary": "#ff00ff",
                      
            "accent": "#00ffff",
                      
            "neutral": "#ff00ff",
                      
            "base-100": "#ffffff",
                      
            "info": "#0000ff",
                      
            "success": "#00ff00",
                      
            "warning": "#00ff00",
                      
            "error": "#ff0000",
          },
        },
      ],
    },
  plugins: [daisyui],
} satisfies Config;
