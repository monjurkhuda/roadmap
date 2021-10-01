import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from './constants';
import { Goal } from "./entities/Goal";
import microConfig from './mikro-orm.config';


console.log( typeof process.env.DB_PASSWORD )

const main = async () => {    

const orm = await MikroORM.init(microConfig);

const goal = orm.em.create(Goal, {title: 'Become a Web Developer'});
await orm.em.persistAndFlush(goal);

};

main()

main().catch((err)=>{
    console.log("err-------------->",err);
});


console.log("hello");