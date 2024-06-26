import { getImagePlaceholder } from "@/lib/plaiceholder";
import NextImage, { type ImageProps } from "next/image";
import { tv, type VariantProps } from "tailwind-variants";

type Variants = VariantProps<typeof styles>;
type ClassNames = {
    classNames?: Partial<{
        wrapper: string;
        image: string;
    }>;
};

export async function Image({
    radius,
    className,
    classNames,
    ...props
}: Variants & ClassNames & ImageProps) {
    const { wrapper, image } = styles({ radius });
    const base64 = await getImagePlaceholder(props.src.toString());
    console.log(base64);

    if (base64) {
        return (
            <div className={wrapper({ class: [className, classNames?.wrapper] })}>
                <NextImage
                    className={image({ class: [className, classNames?.image] })}
                    placeholder="blur"
                    blurDataURL={base64.toString()}
                    {...props}
                />
            </div>
        );
    }

    return (
        <div className={wrapper({ class: [className, classNames?.wrapper] })}>
            <NextImage
                className={image({ class: [className, classNames?.image] })}
                {...props}
            />
        </div>
    );
}

const styles = tv({
    slots: {
        wrapper: "relative aspect-square ring-1 ring-border",
        image: "object-cover",
    },
    variants: {
        radius: {
            xxs: {
                wrapper: "rounded-gr-xxs",
                image: "rounded-gr-xxs",
            },
            xs: {
                wrapper: "rounded-gr-xs",
                image: "rounded-gr-xs",
            },
            sm: {
                wrapper: "rounded-gr-sm",
                image: "rounded-gr-sm",
            },
            md: {
                wrapper: "rounded-gr-md",
                image: "rounded-gr-md",
            },
            lg: {
                wrapper: "rounded-gr-lg",
                image: "rounded-gr-lg",
            },
            xl: {
                wrapper: "rounded-gr-xl",
                image: "rounded-gr-xl",
            },
            xxl: {
                wrapper: "rounded-gr-xxl",
                image: "rounded-gr-xxl",
            },
        },
    },
    defaultVariants: {
        radius: "md",
    },
    // compoundSlots: [
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "xxs",
    //         class: "rounded-gr-xxs",
    //     },
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "xs",
    //         class: "rounded-gr-xs",
    //     },
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "sm",
    //         class: "rounded-gr-sm",
    //     },
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "md",
    //         class: "rounded-gr-md",
    //     },
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "lg",
    //         class: "rounded-gr-lg",
    //     },
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "xl",
    //         class: "rounded-gr-xl",
    //     },
    //     {
    //         slots: ["wrapper", "image"],
    //         radius: "xxl",
    //         class: "rounded-gr-xxl",
    //     },
    // ],
});
