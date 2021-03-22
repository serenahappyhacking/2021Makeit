# 登录全过程

1. 输入用户名 密码 点击登录
2. 服务器校验不通过，给出错误响应；通过后生成 access token, 响应。
3. 客户端收到会存下 access token, 下次登录的时候放在 Http header 里发给 server
4. server 判断是否有 AccessToken 如果没有则跳转到登录页面
5. `store.dispatch('GetInfo')` 获取用户信息和用户权限
6. `store.dispatch('GenerateRoutes', userInfo)` 用户信息获取成功后, 根据获取到的用户信息构建出一个已经过滤好权限的路由结构 `src/store/modules/permission.js` (权限控制是中后台系统中常见的需求)
7. 将构建的路由结构信息利用 Vue-Router 提供的动态增加路由方法 `router.addRoutes` 加入到路由表中

- token (access token, refresh token)
- 路由跳转前，要判断是否有 access token, 有则跳转，无则跳转到登录页。
- get user info
- 获取 permission
- 生成动态路由表
- 注意 vue router 的 hooks

store 的 actions 包括： login , getUserInfo, logout
把 login 和 getInfo 分开 2 个接口，是为了页面刷新的时候，根据 token 不再调用 login 接口。
