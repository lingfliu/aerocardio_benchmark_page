# Aerocardio benchmark web FE

## 框架说明
1. react+redux：基本元素，采用全局状态流
2. axios+promise：ajax访问，不再使用jquery
3. material ui：ui设计框架，css代码化
4. react-route：路由转发

## 项目结构说明：
1. action/，reducer/ redux状态流对应的部件
2. component/ 自定义的UI控件
3. page/ 页面
4. App.js 应用总入口，在App中使用Route添加各个page

## 构建环境
1. webstorm 2018.2
2. node 10.8.0
3. npm 18.0

## 调试方式
- 在项目目录下运行 
1. npm install
2. npm run start

- 编译方式 npm run build

