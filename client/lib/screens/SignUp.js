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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var formik_1 = require("formik");
var Yup = require("yup");
var UserContext_1 = require("../components/UserContext");
var SignUp = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var setUser = (0, react_1.useContext)(UserContext_1.AccountContext).setUser;
    var handleSignUpRedirect = function () {
        navigate('/signup', { state: location });
    };
    return (<div className="login">
      <div className="login__wrapper">
        <formik_1.Formik initialValues={{ email: '', password: '', username: '' }} validationSchema={Yup.object({
            email: Yup.string()
                .required("Username required!")
                .min(6, "Username too short!")
                .max(28, "Username too long!"),
            password: Yup.string()
                .required("Password required!")
                .min(6, "Password too short!")
                .max(28, "Password too long!"),
        })} onSubmit={function (values) { return __awaiter(void 0, void 0, void 0, function () {
            var userValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userValues = __assign({}, values);
                        return [4 /*yield*/, fetch('http://193.201.88.172:7000/auth/signup', {
                                method: "POST",
                                credentials: 'include',
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email: userValues.email, password: userValues.password, username: userValues.username })
                            })
                                .catch(function (err) {
                                console.log(err);
                            })
                                .then(function (res) {
                                return res.json();
                            })
                                .then(function (data) {
                                if (!data)
                                    return;
                                setUser(__assign({}, data));
                                navigate('/blog');
                            })
                            //handleLogInWithEmail(user.email, user.password)
                        ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }}>
          {function (_a) {
            var values = _a.values, errors = _a.errors, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit;
            return (<form onSubmit={handleSubmit}>
              <react_2.Input placeholder="Email" value={values.email} name="email" onChange={handleChange} variant="filled"/>
              <react_2.Input placeholder="Password" value={values.password} name="password" type="password" onChange={handleChange} variant="filled"/>
              <react_2.Input placeholder="Username" value={values.username} name="username" onChange={handleChange} variant="filled"/>
              <div style={{
                    display: 'inline-flex',
                    gap: '10px',
                    color: '#fff'
                }}>
              </div>
              <react_2.Button type="submit" variant="contained">Sign Up</react_2.Button>
            </form>);
        }}
        </formik_1.Formik>
      </div>
    </div>);
};
exports.default = SignUp;
