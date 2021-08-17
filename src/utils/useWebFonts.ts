import WebFont from "webfontloader";

export const useWebFonts = () => {
    WebFont.load({
        google: {
            families: ["Roboto:300,400,700"],
        },
    });
};
