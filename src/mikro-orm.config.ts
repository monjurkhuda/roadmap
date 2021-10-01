import { __prod__ } from "./constants";
import { Goal } from "./entities/Goal";
import { MikroORM } from '@mikro-orm/core';

export default {
    entities: [Goal],
    dbName:'roadmap',
    user: 'postgres',
    password: 'postgres',    
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];