import { Field, ID, Float, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Account {
  @Field(() => ID)
  readonly id: number

  @Field()
  title: string

  @Field(() => Float)
  balance: number

  @Field(() => Int)
  type: number

  @Field()
  offBudget: boolean
}
