/**
 * NOTE:
 * If an element is a square, we can determine border radius
 * by dividing it's height by the golden angle squared ( 2.399^2 = 5.755 )
 */

import { Image } from "@/components/image";

/**
 * @return sqrt(radius = area / 9)
 */
function getBorderRadius(width: number, height: number, factor: number = 13) {
    return Math.sqrt((width * height) / factor) / 2;
}

const urls = [
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/4.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/1.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/14.jpeg",
];

export default async function Home() {
    return (
        <main className="container min-h-screen max-w-6xl space-y-24 border py-24">
            <div
                className="grid place-items-center gap-gr-xl"
                // style={{
                //     gridTemplateColumns: `repeat(auto-fit, minmax(192px, auto))`,
                // }}
            >
                {urls.map((url, i) => (
                    <Image
                        key={i}
                        src={url}
                        alt=""
                        fill
                        sizes="100vw"
                        // className="aspect-square"
                        // radius="xl"
                        className="aspect-square size-36 rounded-none"
                    />
                ))}
            </div>

            <div className="grid place-items-center gap-6">
                <div
                    className="text-gr-sm relative grid place-items-center bg-secondary"
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
                        className="relative grid place-items-center bg-secondary"
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
                    className="relative grid place-items-center bg-secondary"
                    style={{
                        width: "114px",
                        height: "114px",
                        borderRadius: getBorderRadius(114, 114),
                    }}
                ></div>

                <div
                    className="relative grid place-items-center bg-secondary"
                    style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: getBorderRadius(72, 72),
                    }}
                ></div>

                <div
                    className="relative grid place-items-center bg-secondary"
                    style={{
                        width: "57px",
                        height: "57px",
                        borderRadius: getBorderRadius(57, 57),
                    }}
                ></div>

                <div
                    className="relative grid place-items-center bg-secondary"
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
