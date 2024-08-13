day01

1. 浏览器自动打开

```
    "dev": "vite --open",
```

2. src 路径别名
   sudo npm i @types/node --save-dev
   resolve: {
   alias: {
   '@': path.resolve(\_\_dirname, 'src')
   }
   }
   找到 tsconfig.json 配置文件，找到项目配置项 compilerOptions 添加配置。这一步的作用是让 IDE 可以对路径进行智能解析
