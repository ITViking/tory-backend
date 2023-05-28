"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
app.get("/health", (req, res) => {
    res.send("All good");
});
app.listen(port, () => {
    console.log(`Server started. Listening on port ${port}`);
});
//# sourceMappingURL=server.js.map