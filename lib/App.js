"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var theme_1 = require("./utils/theme");
var components_1 = require("./components");
var react_router_dom_1 = require("react-router-dom");
var UserContext_1 = require("./components/UserContext");
require("./components/styles.scss");
require("./font/Sora-Regular.ttf");
function App() {
    var _a = (0, react_2.useColorMode)(), colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    var _b = (0, react_1.useContext)(UserContext_1.AccountContext), user = _b.user, setUser = _b.setUser;
    console.log(user);
    return (<UserContext_1.default>
      <react_router_dom_1.BrowserRouter>
        <react_2.ThemeProvider theme={theme_1.theme}>
          <div className="App">
            <header>
              <components_1.Navbar colorMode={colorMode} toggleColorMode={toggleColorMode}/>
            </header>
            <main>
              <components_1.AppRouter themeColor={colorMode}/>
            </main>
          </div>
        </react_2.ThemeProvider>
      </react_router_dom_1.BrowserRouter>
    </UserContext_1.default>);
}
exports.default = App;
