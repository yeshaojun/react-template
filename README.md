### react 通用性模板

#### 1.格式校验(permitter + commitlint)

permitter 配置查看.permitter.json 文件

commlint 规范参考：

upd：更新某功能（不是 feat, 不是 fix）

feat：新功能（feature）

fix：修补 bug

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）

test：增加测试

chore：构建过程或辅助工具的变动

#### 2.全局错误异常设置

代码报错，react 会卸载组件，页面显示白屏，体验不好

引入 react-error-boundary 库做异常页面提示

#### 3.antd 引入

使用@craco/craco 可自定义配置

#### 4.路由自动加载，权限配置

使用 react-router-dom v.6.1

[最新文档](https://zhuanlan.zhihu.com/p/431389907)

react 并没有现成的 router 封装方案，很多项目也是直接使用路由，并未进行全局封装

本项目将所有路由封装道 router 文件夹下，自动进行加载，可直接在 router 中配置权限

#### 5.react-redux 全局仓库

[使用文档](https://react-redux.js.org/)

#### 6.请求方法封装

useAsync 自定义 hook 封装
