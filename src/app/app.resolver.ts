import { Query, Resolver } from "@nestjs/graphql"

class Account {
  id: number
  title: string
  balance: number
  type: number
  offBudget: boolean
}

@Resolver(() => Account)
export class AccountResolver {
  @Query(() => Account)
  async account(): Promise<Account> {
    return {
      id: 123,
      title: "lorem",
      balance: 4000,
      type: 1,
      offBudget: false,
    }
  }
}
