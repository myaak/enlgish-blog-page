"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var icons_1 = require("@chakra-ui/icons");
var PopUp = function (_a) {
    var props = _a.props, themeColor = _a.themeColor, closePopUp = _a.closePopUp;
    return (<div className="popup__wrapper">
      <div className="blur" onClick={closePopUp}>
      </div>
      <div className="content" style={{
            backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
            borderRadius: "15px",
            padding: '15px 15px',
        }}>
        <div style={{
            display: 'flex',
            padding: '0 5px',
            marginBottom: '5px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }}>
          <button onClick={closePopUp}><icons_1.CloseIcon /></button>
        </div>
        <div className="popup__header" style={{
            display: 'flex'
        }}>
          <react_1.Image style={{
            width: '45%',
            height: '20%',
            borderRadius: '15px'
        }} src={props.image}/>
          <div style={{
            fontSize: "".concat(window.innerWidth > 1200 ?
                "".concat(window.innerWidth / 40, "px") :
                "".concat(window.innerWidth / 18, "px")),
            fontWeight: 1000,
            textTransform: 'uppercase',
            textOverflow: 'break',
            width: '45%',
            display: 'flex',
            //justifyContent:'center',
            alignItems: 'center',
            padding: '0 20px'
        }}>{props.title}</div>
        </div>
        <div style={{
            padding: '15px 10px',
            fontSize: '20px',
            lineHeight: '2em'
        }}>
          <p>...{props.allinfo}</p>
          {props.allinfo2 &&
            <p>...{props.allinfo2}</p>}
          {props.allinfo3 &&
            <p>...{props.allinfo3}</p>}
        </div>
      </div>
    </div>);
};
exports.default = PopUp;
