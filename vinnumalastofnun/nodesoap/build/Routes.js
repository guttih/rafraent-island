"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = require("./Controller");
var InfoPage_1 = require("./libs/InfoPage");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (request, response) {
            response.status(200)
                .send(InfoPage_1.MakePage('Vinnumálastofnun', 'Þjónusta sem gefur aðgang að upplýsingum frá soap þjónustu vinnumálastofnunar'));
            console.log('Root OK');
        });
        app.route('/aaetladurfaedingardagur')
            .get(Controller_1.GetAaetladurFaedingardagur);
        app.route('/aaetladurfaedingardagur/:kennitala')
            .get(Controller_1.GetAaetladurFaedingardagurByKennitala);
        app.route('/faedingarorlofstekjur')
            .get(Controller_1.GetFaedingarorlofstekjur);
        app.route('/faedingarorlofstekjur/:kennitala')
            .get(Controller_1.GetFaedingarorlofstekjurByKennitala);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map