/*
 * @Author: your name
 * @Date: 2021-01-15 11:44:39
 * @LastEditTime: 2021-01-15 16:15:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mercury-nestjs/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
