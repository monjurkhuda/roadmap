"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalResolver = void 0;
const Goal_1 = require("../entities/Goal");
const type_graphql_1 = require("type-graphql");
let GoalResolver = class GoalResolver {
    goals({ em }) {
        return em.find(Goal_1.Goal, {});
    }
    goal(id, { em }) {
        return em.findOne(Goal_1.Goal, { id });
    }
    async createGoal(title, { em }) {
        const goal = em.create(Goal_1.Goal, { title });
        await em.persistAndFlush(goal);
        return goal;
    }
    async updateGoal(id, title, { em }) {
        const goal = await em.findOne(Goal_1.Goal, { id });
        if (!goal) {
            return null;
        }
        if (typeof title !== "undefined") {
            goal.title = title;
            await em.persistAndFlush(goal);
        }
        return goal;
    }
    async deleteGoal(id, { em }) {
        await em.nativeDelete(Goal_1.Goal, { id });
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Goal_1.Goal]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoalResolver.prototype, "goals", null);
__decorate([
    (0, type_graphql_1.Query)(() => Goal_1.Goal, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GoalResolver.prototype, "goal", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Goal_1.Goal),
    __param(0, (0, type_graphql_1.Arg)("title")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GoalResolver.prototype, "createGoal", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Goal_1.Goal, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("title", () => String, { nullable: true })),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], GoalResolver.prototype, "updateGoal", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GoalResolver.prototype, "deleteGoal", null);
GoalResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], GoalResolver);
exports.GoalResolver = GoalResolver;
//# sourceMappingURL=goal.js.map