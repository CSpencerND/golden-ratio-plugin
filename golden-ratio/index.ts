import plugin from "tailwindcss/plugin";

const twClassNames = {
    "gr-base": "1.188rem",
    "gr-xxs": "0.548016566184804em",
    "gr-xs": "0.6180339887498547em",
    "gr-sm": "0.7861513777573977em",
    "gr-md": "1em",
    "gr-lg": "1.2720196495141103em",
    "gr-xl": "1.61803398875em",
    "gr-2xl": "2.0581710272716927em",
    "gr-3xl": "2.6180339887502346em",
    "gr-4xl": "3.330190676786102em",
    "gr-5xl": "4.236067977500615em",
};

const cssProperties = {
    "--gr-base": "1.188rem",
    "--gr-xxs": "0.548016566184804em",
    "--gr-xs": "0.6180339887498547em",
    "--gr-sm": "0.7861513777573977em",
    "--gr-md": "1em",
    "--gr-lg": "1.2720196495141103em",
    "--gr-xl": "1.61803398875em",
    "--gr-2xl": "2.0581710272716927em",
    "--gr-3xl": "2.6180339887502346em",
    "--gr-4xl": "3.330190676786102em",
    "--gr-5xl": "4.236067977500615em",
};

// export { twClassNames, cssProperties };

export default plugin(
    ({ addBase, addComponents, addUtilities, addVariant }) => {
        addBase({
            ":root": cssProperties,
        });

        addComponents({
            // TODO: Do some golden ratio magic for this
            ".main-grid": {
                "--gutter": "1.618em",
                "--max-width": "max(68ch, 61.804%)",

                position: "relative",
                display: "grid",
                gridTemplateColumns:
                    "1fr min(var(--max-width), calc(100% - calc(var(--gutter) * 2))) 1fr",
                gridColumnGap: "var(--gutter)",
                gridRowGap: "var(--gutter)",
                paddingBlock: "var(--gutter)",

                "& > *": {
                    gridColumn: "2",
                },

                "& > .full-bleed": {
                    width: "100%",
                    gridColumn: "1 / -1",
                },
            },

            ".carousel": {
                "--carousel-gap": "var(--gr-md)",

                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                display: "flex",
                overflowX: "scroll",
                gap: "var(--carousel-gap)",
                padding: "var(--carousel-gap)",
                paddingRight: "37.5%",

                "@apply max-md:scrollbar-hide": {},

                "&-item": {
                    boxSizing: "content-box",
                    flex: "none",
                    scrollSnapAlign: "center",
                    scrollMarginInline: "var(--carousel-gap)",
                },
            },

            ".std-grid": {
                display: "grid",
                gap: "var(--gr-lg)",

                "@media (min-width: 375px)": {
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                },

                "@media (min-width: 640px)": {
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "var(--gr-xl)",
                },
            },

            ".std-section": {
                display: "flex",
                flexDirection: "column",
                gap: "var(--gr-xxl)",
            },
        });

        addUtilities({
            ".debug": {
                outline: "1px solid red",
            },

            ".debug-nested": {
                outline: "1px solid red",

                "*": {
                    outline: "1px solid red",
                },
            },

            ".focus-ring": {
                "--ring-gap": "2px",

                zIndex: "50",
                outline: "var(--ring-gap) solid transparent",
                outlineOffset: "var(--ring-gap)",
                outlineWidth: "var(--ring-gap)",
                outlineColor: "hsl(var(--ring) / 1))",
            },
        });

        addVariant("focus-visible-within", "&:has(:focus-visible)");
    },
    {
        theme: {
            extend: {
                fontSize: {
                    "gr-base": ["var(--gr-base)", "var(--gr-xl)"],
                    "gr-xxs": ["var(--gr-xxs)", "var(--gr-2xl)"],
                    "gr-xs": ["var(--gr-xs)", "var(--gr-2xl)"],
                    "gr-sm": ["var(--gr-sm)", "var(--gr-2xl)"],
                    "gr-md": ["var(--gr-md)", "var(--gr-xl)"],
                    "gr-lg": ["var(--gr-lg)", "var(--gr-xl)"],
                    "gr-xl": ["var(--gr-xl)", "var(--gr-xl)"],
                    "gr-2xl": ["var(--gr-2xl)", "var(--gr-lg)"],
                    "gr-3xl": ["var(--gr-3xl)", "var(--gr-lg)"],
                    "gr-4xl": ["var(--gr-4xl)", "var(--gr-lg)"],
                    "gr-5xl": ["var(--gr-5xl)", "var(--gr-md)"],
                },
                lineHeight: twClassNames,
                spacing: twClassNames,
                borderRadius: twClassNames,
            },
        },
    },
);
