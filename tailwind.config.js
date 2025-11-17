/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#fff",
        "neutral-d-grey": "#4d4d4d",
        "brand-primary": "#4caf4f",
        "neutral-silver": "#f5f7fa",
        "neutral-grey": "#717171",
        "tint-t5": "#e8f5e9",
        "text-gray-900": "#18191f",
        "neutral-l-grey": "#89939e",
        "neutral-black": "#263238",
        "default-white": "#fff",
        "text-gray-300": "#d9dbe1",
      },
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
