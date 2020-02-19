"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Routes_1 = require("./Routes");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.routePrv = new Routes_1.Routes();
        this.routePrv.routes(this.app);
    }
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=App.js.map