module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        third: "20vh",
      },
      fontFamily: {
        haffer: ["Haffer XH"],
        //mono: ["AkkuratMonoLLWebTrial-Regular"],
        //ak: ["AkkuratLLWebTrial-Light"],
        //akr: ["AkkuratLLWebTrial-Regular"],
        //manrope: ["Manrope"],
      },
      colors: {
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
