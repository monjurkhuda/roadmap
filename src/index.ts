import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Goal } from "./entities/Goal";
import microConfig from "./mikro-orm.config";

console.log("dirname--------+++++-------------->", __dirname);

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  const goal = orm.em.create(Goal, { title: "Become a Web Developer" });
  await orm.em.persistAndFlush(goal);

  const goals = await orm.em.find(Goal, {});
  console.log(goals);
};

main();

main().catch((err) => {
  console.log("err-------------->", err);
});

console.log("hello");
