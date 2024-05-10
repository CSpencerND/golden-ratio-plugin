import { Image } from "@/components/image";
import { cn } from "@/lib/utils";

/**
 * @return sqrt(radius = area / 8)
 */
function getBorderRadius(
    width: number,
    height: number,
    padding = 0,
    factor = 8,
) {
    return padding + Math.sqrt((width * height) / factor) / 2;
}

const urls = [
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/4.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/1.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/14.jpeg",
];

// TODO: Make the max-w of main such that it fits 3 grid columns with the appropriate border radius for their size;
//       Prolly gotta use getBorderRadius and figure the math from their;
export default async function Home() {
    return (
        <main className="container min-h-screen max-w-6xl space-y-24 py-24">
            <div className="flex justify-center">
                <div className="dark:shadow-dark rounded-[23px] bg-gunmetal-900 px-[30px] py-[23px] shadow-medium">
                    <h1 className="text-3xl font-medium text-gunmetal-100">
                        Hello, World!
                    </h1>
                    <h1 className="text-3xl font-medium text-gunmetal-200">
                        Hello, World!
                    </h1>
                    <h1 className="text-3xl font-medium text-gunmetal-300">
                        Hello, World!
                    </h1>
                </div>
            </div>

            <div className="grid h-48 grid-cols-4 place-items-center gap-6 *:aspect-square *:h-auto *:w-full *:rounded-lg">
                <div className="bg-gunmetal-200"></div>
                <div className="bg-gunmetal-300"></div>
                <div className="bg-gunmetal-400"></div>
                <div className="bg-gunmetal-500"></div>
                <div className="bg-gunmetal-600"></div>
                <div className="bg-gunmetal-700"></div>
                <div className="bg-gunmetal-800"></div>
                <div className="bg-gunmetal-900"></div>
            </div>

            <div className="grid hidden place-items-center gap-6">
                <div
                    className="relative bg-card"
                    style={{
                        width: "144px",
                        height: "29px",
                        borderRadius: getBorderRadius(144, 29),
                    }}
                ></div>

                <div className="relative size-[144px]">
                    {/* <div className="absolute inset-0 grid size-full grid-cols-4 grid-rows-4 gap-[1px] bg-background"> */}
                    {/*     {Array.from({ length: 16 }).map((_, i) => ( */}
                    {/*         <div */}
                    {/*             key={i} */}
                    {/*             className="grid place-items-center bg-zinc-700" */}
                    {/*         /> */}
                    {/*     ))} */}
                    {/* </div> */}

                    <div
                        className="relative grid place-items-center bg-card"
                        // className="relative grid place-items-center border border-background bg-transparent"
                        style={{
                            width: "144px",
                            height: "144px",
                            borderRadius: getBorderRadius(144, 144),
                            // borderRadius: "26px",
                        }}
                    ></div>
                </div>

                <div
                    className="relative bg-card p-[16px] pt-[12px] text-[16px]"
                    style={{
                        width: "114px",
                        height: "114px",
                        borderRadius: getBorderRadius(114, 114),
                    }}
                >
                    Hello, 114
                </div>

                <div
                    className="relative grid place-items-center bg-card"
                    style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: getBorderRadius(72, 72),
                    }}
                ></div>

                <div
                    className="relative grid place-items-center bg-card"
                    style={{
                        width: "57px",
                        height: "57px",
                        borderRadius: getBorderRadius(57, 57),
                    }}
                ></div>

                <div
                    className="relative grid place-items-center bg-card"
                    style={{
                        width: "29px",
                        height: "29px",
                        borderRadius: getBorderRadius(29, 29),
                    }}
                ></div>
            </div>
        </main>
    );
}

/**
 * grid lines
 * <div
 *     className="grid place-items-center gap-gr-xl"
 *     style={{
 *         gridTemplateColumns: `repeat(auto-fit, minmax(144px, auto))`,
 *     }}
 * >
 *     {urls.map((url, i) => (
 *         <Image
 *             key={i}
 *             src={url}
 *             alt=""
 *             fill
 *             sizes="100vw"
 *             className={cn("h-auto w-full rounded-gr-xl")}
 *         />
 *     ))}
 * </div>
 */
