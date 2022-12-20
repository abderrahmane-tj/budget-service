import { Account } from "./models/account.model"
import { Query, Resolver } from "@nestjs/graphql"

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
