"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
var ToggleTheme = function (_a) {
    var colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    var handleToggleTheme = function () {
        toggleColorMode();
    };
    return (<react_1.Button onClick={handleToggleTheme}>
      {colorMode === "dark" ? <icons_1.SunIcon /> : <icons_1.MoonIcon />}
    </react_1.Button>);
};
exports.default = ToggleTheme;
