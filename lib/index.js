"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var theme_1 = require("./utils/theme");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var reportWebVitals_1 = require("./reportWebVitals");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <react_2.ChakraProvider theme={theme_1.theme}>
      <react_3.ColorModeScript initialColorMode={theme_1.theme.config.initialColorMode}/>
      <App_1.default />
    </react_2.ChakraProvider>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
