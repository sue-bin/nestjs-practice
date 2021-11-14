import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //if user come into this url //must go together with right bottom function (no black between)
  getHello(): string { // excute this function
    return this.appService.getHello(); // seperate business logic and controller by setting logics in service
  }

  @Get("/hello")
  sayHello():string {
    return this.appService.getHi();
  }

}
