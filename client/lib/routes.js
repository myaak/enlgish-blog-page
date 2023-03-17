"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = void 0;
var consts_1 = require("./utils/consts");
var screens_1 = require("./screens");
exports.publicRoutes = [
    {
        path: consts_1.HOME_ROUTE,
        element: <screens_1.Home />
    },
    {
        path: consts_1.ELEMENTS_ROUTE,
        element: <screens_1.Elements />
    },
    {
        path: consts_1.PORTFOLIO_ROUTE,
        element: <screens_1.Portfolio />
    }
];
