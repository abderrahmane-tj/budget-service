import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { AccountResolver } from "./app.resolver"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
      sortSchema: true,
      debug: false,
      playground: false,
      introspection: true,
    }),
  ],
  controllers: [AppController],
  providers: [AccountResolver],
})
export class AppModule {}
