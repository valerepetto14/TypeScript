"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/login", (req, res) => {
    res.send("hola");
});
exports.default = router;
