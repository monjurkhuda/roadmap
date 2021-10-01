"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211001200134 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211001200134 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "goal" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20211001200134 = Migration20211001200134;
//# sourceMappingURL=Migration20211001200134.js.map