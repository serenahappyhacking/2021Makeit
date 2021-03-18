# 登录全过程 
- token (access token, refresh token)
- get user info
- 获取 permission
- 生成动态路由表

- 路由跳转前，要判断是否有 access token, 有则跳转，无则跳转到登录页。

- 注意 vue router 的hooks: