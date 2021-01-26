"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./containers/App");
var registerServiceWorker_1 = require("./registerServiceWorker");
require("./index.css");
require("tachyons");
ReactDOM.render(<App_1["default"] />, 
// This syntax is called a type assertion, sometimes also called a cast.
// This is a useful way of telling TypeScript what the real type of an
// expression is when you know better than the type checker.
document.getElementById('root'));
registerServiceWorker_1["default"]();
