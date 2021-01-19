/*
 * @Author: your name
 * @Date: 2021-01-15 11:44:39
 * @LastEditTime: 2021-01-19 15:09:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webBlog_nestjs/src/app.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/index')
  getHello(): string {
    return this.appService.getHello();
  }
}
