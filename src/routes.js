import express from "express";

const routes = express.Router();

routes.get("/", (_req, res) => {
    return res.json({ name: "The Light Road"})
})

export { routes as default };

