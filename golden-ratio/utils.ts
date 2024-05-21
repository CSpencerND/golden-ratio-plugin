const PHI = 1.61803398875;
const HALF = Math.sqrt(PHI);

function generateScaling(base = 1.188, step = HALF) {
    const md = 1;

    const sm = md / step;
    const xs = sm / step;
    const xxs = xs / step;

    const lg = md * step;
    const xl = lg * step;
    const xxl = xl * step;
    const xxxl = xxl * step;
    const xxxxl = xxxl * step;
    const xxxxxl = xxxxl * step;

    return { base, xxs, xs, sm, md, lg, xl, xxl, xxxl, xxxxl, xxxxxl };
}

function generateClassNames() {
    const scaling = generateScaling();

    return Object.entries(scaling).reduce(
        (result: Record<string, string>, step) => {
            const className = `gr-${step[0]}`;
            const value = `${step[1]}em`;

            result[className] = value;

            return result;
        },
        {},
    );
}

function generateCssProps() {
    const scaling = generateScaling();

    return Object.entries(scaling).reduce(
        (result: Record<string, string>, step) => {
            const property = `--gr-${step[0]}`;
            const value = `${step[1]}em`;

            result[property] = value;

            return result;
        },
        {},
    );
}

export { generateClassNames, generateCssProps };
