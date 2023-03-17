"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountContext = void 0;
var react_1 = require("react");
exports.AccountContext = (0, react_1.createContext)({ loggedIn: false });
var UserContext = function (_a) {
    var children = _a.children;
    var _b = __read((0, react_1.useState)({ loggedIn: false }), 2), user = _b[0], setUser = _b[1];
    (0, react_1.useEffect)(function () {
        fetch('http://193.201.88.172:7000/auth/login', {
            credentials: "include"
        })
            .catch(function (err) {
            setUser({ loggedIn: false });
            return;
        })
            .then(function (res) {
            if (!res || !res.ok) {
                return;
            }
            return res.json();
        })
            .then(function (data) {
            if (!data) {
                setUser({ loggedIn: false });
                return;
            }
            setUser(__assign({}, data));
        });
    }, []);
    return (<exports.AccountContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </exports.AccountContext.Provider>);
};
exports.default = UserContext;
