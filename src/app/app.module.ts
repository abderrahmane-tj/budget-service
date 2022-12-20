import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AccountResolver } from "./app.resolver"

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AccountResolver],
})
export class AppModule {}
