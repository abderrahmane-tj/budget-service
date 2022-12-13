import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

const PORT = 2345
const HOSTNAME = "localhost"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, HOSTNAME)
  console.log(`Server started on http://${HOSTNAME}:${PORT}`)
}
bootstrap()
