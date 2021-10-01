"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Goal_1 = require("./entities/Goal");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
console.log("dirname--------+++++-------------->", __dirname);
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const goal = orm.em.create(Goal_1.Goal, { title: "Become a Web Developer" });
    await orm.em.persistAndFlush(goal);
};
main();
main().catch((err) => {
    console.log("err-------------->", err);
});
console.log("hello");
//# sourceMappingURL=index.js.map