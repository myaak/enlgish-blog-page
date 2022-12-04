"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Blog_1 = require("../screens/Blog");
var SignUp_1 = require("../screens/SignUp");
var LoginPage_1 = require("../screens/LoginPage");
var routes_1 = require("../routes");
var react_1 = require("react");
var UserContext_1 = require("./UserContext");
var AppRouter = function (_a) {
    var themeColor = _a.themeColor;
    var user = (0, react_1.useContext)(UserContext_1.AccountContext).user;
    return user.loggedIn ? (<react_router_dom_1.Routes>
      {routes_1.publicRoutes.map(function (item, index) { return (<react_router_dom_1.Route key={index} path={item.path} element={item.element}/>); })}
      <react_router_dom_1.Route key={4} path={"/blog"} element={<Blog_1.default themeColor={themeColor}/>}/>
    </react_router_dom_1.Routes>)
        :
            (<react_router_dom_1.Routes>
      <react_router_dom_1.Route key={4} path={"/blog"} element={<Blog_1.default themeColor={themeColor}/>}/>
      <react_router_dom_1.Route key={5} path={"/login"} element={<LoginPage_1.default />}/>
      <react_router_dom_1.Route key={6} path={"/signup"} element={<SignUp_1.default />}/>
      </react_router_dom_1.Routes>);
};
exports.default = AppRouter;
