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

export { twClassNames, cssProperties };
export default plugin(
    ({ addBase }) => {
        addBase({
            ":root": cssProperties,
        });
    },
    {
        theme: {
            extend: {
                fontSize: twClassNames,
                spacing: twClassNames,
                borderRadius: twClassNames,
                lineHeight: {
                    gr: "1.618em",
                },
            },
        },
    },
);
