"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var parcel_bundler_1 = __importDefault(require("parcel-bundler"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 8080 || process.env.PORT;
app.get('/', function (req, res) {
    console.log('you did it');
    res.send("<h1>Hello World</h1>");
});
var bundler = new parcel_bundler_1.default(path_1.default.join(__dirname, "../src/client/index.html"));
app.use(bundler.middleware());
app.listen(port, function () {
    console.log("server is listening on port: " + port);
});
