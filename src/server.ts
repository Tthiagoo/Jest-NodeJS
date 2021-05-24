import express from "express";
const server = express();
server.use(express.json());
server.get("/", (_, res) => {
	res.send("Hello ts-node!");
});

export default server;
