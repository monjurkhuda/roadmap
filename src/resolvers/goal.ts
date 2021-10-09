import { Goal } from "../entities/Goal";
import { MyContext } from "../types";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class GoalResolver {
  @Query(() => [Goal])
  goals(@Ctx() { em }: MyContext): Promise<Goal[]> {
    return em.find(Goal, {});
  }
}
