# node 项目


## 一、项目搭建

### 1. 项目目录结构

```
coderhub
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app
│  ├─ controller
│  ├─ main.ts
│  ├─ router
│  ├─ service
│  └─ utils
└─ tsconfig.json
```

### 2. 创建项目

#### 2.1 创建项目文件夹

```shell
mkdir coderhub
npm init -y
git init 
npm install koa -D
npm install @types/koa -D
```

#### 2.4初始化tsconfig.json
```js
# 👇️ If you got permissions error, run with sudo
sudo npm install typescript@latest -g

tsc --init

tsc --version
```
#### 2.3配置package.json

```shell
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon --watch src/**/*.ts --exec \"ts-node\" ./src/main.ts"
},
```

#### 2.4 完善main.ts，生成服务
```ts
import { Context } from "koa";

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx: Context) => {
  ctx.body = "Hello World";
});

app.listen(3000);
```

#### 2.5 启动项目
```ts
npm run start
```