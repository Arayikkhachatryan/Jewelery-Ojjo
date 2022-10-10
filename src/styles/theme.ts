export type ThemeType = typeof theme;

export const theme = {
  typography: {
    family: "Roboto, sans-serif",
    titles: {
      default: {
        fontSize: "30px",
        lineHeight: "41px",
      },
      mode1: {
        fontSize: "36px",
        lineHeight: "49px",
      },
    },
    texts: {
      default: {
        fontSize: "14px",
        lineHeight: "21px",
      },
      mode1: {
        fontSize: "18px",
        lineHeight: "21px",
      },
      mode2: {
        fontSize: "18px",
        lineHeight: "25px",
      },
    },
    colors: {
      white: "#fff",

      black: "#000",

      gray: "#333333",

      trasparent: "rgba(0, 0, 0, 0)",
    },
  },
};
