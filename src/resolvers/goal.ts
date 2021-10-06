import { Goal } from "src/entities/Goal";
import { MyContext } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class GoalResolver {
  @Query(() => [Goal])
  goals(@Ctx() { em }: MyContext) {
    return em.find(Goal, {});
  }
}
