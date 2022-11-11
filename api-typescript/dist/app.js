"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//import de rutas
const auth_1 = __importDefault(require("./routes/auth"));
//middlewares
app.use(express_1.default.json());
app.use("/", auth_1.default);
app.get("/", (req, res) => {
    res.send("holaaaaaa");
});
app.listen(3000, () => {
    console.log("serven running in port 3000");
});
