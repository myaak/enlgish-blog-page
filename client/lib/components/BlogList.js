"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlogItem_1 = require("./BlogItem");
var BlogList = function (_a) {
    var blogs = _a.blogs, themeColor = _a.themeColor;
    return (<div className="blog-list">
      <ul>
        {blogs.map(function (item, index) { return (<BlogItem_1.default key={index} props={{
                image: item.image,
                title: item.title,
                date: item.date,
                description: item.description,
                allinfo: item.allinfo,
                allinfo2: item.allinfo2,
                allinfo3: item.allinfo3
            }} description={item.description} themeColor={themeColor}/>); })}
      </ul>
    </div>);
};
exports.default = BlogList;
