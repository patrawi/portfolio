export const images = import.meta.glob(
    ["../lib/assets/*.{png,jpg,jpeg,svg,webp}"],
    {
        eager: true,
    },
);

export const getImgUrl = (imageFileName: string) => {
    const imagePath = `./assets/${imageFileName}`;
    if (images[imagePath]) {
        return (images[imagePath] as { default: string }).default;
    }
    return "src/lib/assets/test.webp";
};
