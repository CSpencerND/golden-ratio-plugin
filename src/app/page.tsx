import { Image } from "@/components/image";

const urls = [
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/4.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/1.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/14.jpeg",
];

export default async function Home() {
    return (
        <main className="container min-h-screen max-w-6xl border py-24">
            <div
                className="grid gap-gr-xl"
                style={{
                    gridTemplateColumns: `repeat(auto-fit, minmax(192px, auto))`,
                }}
            >
                {urls.map((url, i) => (
                    <Image
                        key={i}
                        src={url}
                        alt=""
                        fill
                        sizes="100vw"
                        radius="xl"
                    />
                ))}
            </div>
        </main>
    );
}
