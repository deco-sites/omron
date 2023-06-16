import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        secondary: "#AD2128",
        btnDhelf: "#AD2128",
        accent: "#0050a4",
        white: "#FFF",
        footer: "#1e1e1e",
      },
    },
  },
} satisfies Config;
