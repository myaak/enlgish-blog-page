"use strict";
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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var PopUp_1 = require("./PopUp");
var BlogItem = function (_a) {
    var props = _a.props, description = _a.description, themeColor = _a.themeColor;
    var location = (0, react_router_dom_1.useLocation)();
    var _b = __read((0, react_1.useState)(false), 2), openPop = _b[0], setOpenPop = _b[1];
    return (<react_2.Box className="blog-item">
      {openPop &&
            <PopUp_1.default props={{ image: props.image, title: props.title, allinfo: props.allinfo, allinfo2: props.allinfo2, allinfo3: props.allinfo3 }} closePopUp={function () { return setOpenPop(function (prev) { return !prev; }); }} themeColor={themeColor}/>}
      <div className="blog-item__container" style={{
            width: '100%',
            height: '100%'
        }} onClick={function () { return setOpenPop(function (prev) { return !prev; }); }}>
        <div className="blog-item__logo" style={{}}>
        <react_3.Image style={{
            width: '400px',
            height: '225px',
            borderRadius: '15px',
            objectFit: 'cover'
        }} _hover={{
            transform: 'scale(1.5)'
        }} src={props.image}/>
        </div>
        <div className="blog-item__info" style={{
            marginTop: '5px'
        }}>
          <react_2.Text className="blog-item__date">
            {props.date}
          </react_2.Text>
          <react_2.Text _hover={{
            color: "#03a9f4",
            cursor: 'pointer'
        }} className="blog-item__title">
            {props.title}
          </react_2.Text>
          <react_2.Text className="blog-item__description">
            {props.description}
          </react_2.Text>
        </div>
      </div>
    </react_2.Box>);
};
exports.default = BlogItem;
