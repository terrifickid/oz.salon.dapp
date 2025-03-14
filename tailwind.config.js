module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      maxHeight: {
        third: "20vh",
        half: "50vh",
      },
      height: {
        third: "20vh",
      },
      width: {
        third: "33vw",
      },
      fontFamily: {
        haffer: ["Haffer XH"],
        //mono: ["AkkuratMonoLLWebTrial-Regular"],
        //ak: ["AkkuratLLWebTrial-Light"],
        //akr: ["AkkuratLLWebTrial-Regular"],
        //manrope: ["Manrope"],
      },
      colors: {
        green: {
          500: "#34AE35",
        },
        neon: "#82f054",
        tope: "#f7f7f7",
        lilac: "#8719e0",
        pumpkin: "#d54a37",
        electric: "#0000f5",
        silver: "#8c8c8c",
        orange: "#ef8c34",
        yellow: "#f9da51",
        canary: "#e1fe6a",
        sky: "#295ea8",
        pink: "#d92f8a",
        owhite: "rgba(255,255,255,0.95)",
        oblack: {
          100: "rgba(0,0,0,0.1)",
          400: "rgba(0,0,0,0.4)",
        },
      },
      spacing: {
        folch: "15vw",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-orange",
    "bg-silver",
    "bg-canary",
    "bg-black",
    "text-electric",
    "text-white",
  ],
};
