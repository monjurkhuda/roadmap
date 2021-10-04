import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
//import { Goal } from "./entities/Goal";
import microConfig from "./mikro-orm.config";
import express from "express";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  app.get("/", (_, res) => {
    res.send("hello");
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main();

main().catch((err) => {
  console.log("err-------------->", err);
});

console.log("hello");
