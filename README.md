### 个站后台

##### Auth: X

##### 技术栈： nestjs+mysql+ typeorm



#### 1.启动

```
npm run start
```

#### 2.目录结构

```
project
├── src(所有的ts源码都在这里)
│   ├── common (通用的一个目录)
│   │   └── class(通用类的集合)
│   │   │      └── xxx.ts(这个看业务吧)
│   │   └── decorator(自定义装饰器集合)
│   │   │      └── pagination.ts(自定义分页装饰器)
│   │   └── enum(枚举型集合)
│   │   │      └── apiErrorCode.ts(api错误集合)
│   │   └── globalGuard(全局守卫)
│   │   │      └── apiErrorCode.ts(api错误集合)
│   │   └── httpHandle(Http的处理)
│   │   │      └── httpException.ts(http异常统一处理)
│   │   └── interceptor(拦截器处理)
│   │   │      └── httpException.ts(http异常统一处理)
│   │   └── interface(接口集合)
│   │   │      └── xxx.ts(通用的接口)
│   │   └── middleware(中间件)
│   │   │      └──logger.middleware.ts(日志中间件)
│   │   └── pipe(管道)
│   │   │      └──validationPipe.ts(管道验证全局设置)
│   │   └── pipe(管道)
│   │   │      └──validationPipe.ts(管道验证全局设置)
│   │   └── specialModules(特殊模块)
│   │   │      └── auth(认证模块模块)
│   │   │      └── database(数据库模块)
│   │   └── utils(工具目录层)
│   │   │      └── stringUtil.ts(字符串工具集合)
│   ├── config（配置文件集合）
│   │   └── dev(dev配置)
│   │   │      └── database(数据库配置)
│   │   │      └── development.ts(配置引入出)
│   │   └── prod(prod配置)
│   │   │      └── (同上)
│   │   └── staging(staging配置)
│   │   │      └── (同上)
│   │   └── unitTest(unitTest配置)
│   │   │      └── (同上)
│   ├── entity（数据库表集合）
│   │   └── user.entity.ts(用户表)
│   ├── modules（模块的集合）
│   │   └── user(用户模块)
│   │   │      └── user.controller.ts(controller)
│   │   │      └── user.module.ts(module声明)
│   │   │      └── user.service.ts(service)
│   │   │      └── user.service.spec.ts(service 测试)
│   │   │      └── userDto.ts(user Dto验证)
│   ├── app.module.ts
│   ├── main.ts(代码运行入口)
├── package.json
├── tsconfig.json
└── tslint.json

```

# webBlog_nestjs
