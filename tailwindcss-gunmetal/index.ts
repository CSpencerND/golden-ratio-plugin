// TODO: Turn this file into a plugin so you can export css variables as well as class names
import { rose } from "tailwindcss/colors";

// alternative name - graphite
export const colors = {
    50: "#d8dee3",
    100: "#bec7cf",
    200: "#a5b0bb",
    300: "#8e99a7",
    400: "#788392",
    500: "#646e7e",
    600: "#50596a",
    700: "#3e4656",
    800: "#2e3342",
    900: "#1e222e",
    950: "#101219",
};

export const theme = {
    base: {
        DEFAULT: colors[950],
        foreground: colors[50],
    },

    surface1: {
        DEFAULT: colors[900],
        foreground: colors[50],
    },

    surface2: {
        DEFAULT: colors[800],
        foreground: colors[50],
    },

    surface3: {
        DEFAULT: colors[700],
        foreground: colors[50],
    },
};

export const shadcn = {
    background: colors[950],
    foreground: colors[50],

    card: {
        DEFAULT: colors[950],
        foreground: colors[50],
    },

    popover: {
        DEFAULT: colors[950],
        foreground: colors[50],
    },

    primary: {
        DEFAULT: colors[50],
        foreground: colors[900],
    },

    secondary: {
        DEFAULT: colors[800],
        foreground: colors[50],
    },

    muted: {
        DEFAULT: colors[800],
        foreground: colors[400],
    },

    accent: {
        DEFAULT: colors[800],
        foreground: colors[50],
    },

    destructive: {
        DEFAULT: rose[900],
        foreground: rose[100],
    },

    border: colors[800],
    input: colors[800],
    ring: colors[300],

    radius: "1em",
};
