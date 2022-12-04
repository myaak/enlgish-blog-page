"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
var react_1 = require("@chakra-ui/react");
exports.theme = (0, react_1.extendTheme)({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true
    },
    fonts: {
        heading: "Sora",
        body: "Sora"
    },
    colors: {
        primary: {
            50: '#EEF2F6',
            100: '#CFD9E7',
            200: '#B1C1D8',
            300: '#92A9C9',
            400: '#7491B9',
            500: '#5578AA',
            600: '#446088',
            700: '#334866',
            800: '#223044',
            900: '#111822'
        }
    }
});
