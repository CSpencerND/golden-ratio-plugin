import plugin from "tailwindcss/plugin";

const phi = 1.61803398875;

const md = 1;
const sm = md / phi;
const xs = sm / phi;
const xxs = xs / phi;
const lg = md * phi;
const xl = lg * phi;
const xxl = xl * phi;
const xxxl = xxl * phi;

const sizes = { xxs, xs, sm, md, lg, xl, xxl, xxxl };

type Props = {
    css: Record<string, string>;
    tw: Record<string, string>;
};

const props = Object.entries(sizes).reduce(
    (props: Props, [k, v]: [string, number]) => {
        props.css[`--gr-${k}`] = `${v}em`;
        props.tw[`gr-${k}`] = `var(--gr-${k})`;
        return props;
    },
    { css: {}, tw: {} },
);

/**
 *
 * @description A Tailwind CSS plugin that generates golden ratio based spacings and border radii.
 * @type { css: Record<string, string>, tw: Record<string, string> }
 * @returns { import('@types/tailwindcss/plugin').Plugin } Tailwind CSS plugin.
 *
 * generates the following css properties and tailwind classes
 * `css: {`
 * `    "--gr-xxs": "0.2360679774997437em",`
 * `    "--gr-xs": "0.3819660112500555em",`
 * `    "--gr-s": "0.6180339887498547em",`
 * `    "--gr-m": "1em",`
 * `    "--gr-l": "1.61803398875em",`
 * `    "--gr-xl": "2.618033988750235em",`
 * `    "--gr-xxl": "4.236067977500615em",`
 * `}`
 * `tw: {`
 * `    "gr-xxs": "var(--gr-xxs)",`
 * `    "gr-xs": "var(--gr-xs)",`
 * `    "gr-s": "var(--gr-s)",`
 * `    "gr-m": "var(--gr-m)",`
 * `    "gr-l": "var(--gr-l)",`
 * `    "gr-xl": "var(--gr-xl)",`
 * `    "gr-xxl": "var(--gr-xxl)",`
 * `}`
 */
export default plugin(
    ({ addBase }) => {
        addBase({
            ":root": props.css,
        });
    },
    {
        theme: {
            extend: {
                spacing: props.tw,
                borderRadius: props.tw,
                // fontSize: props.tw,
            },
        },
    },
);
