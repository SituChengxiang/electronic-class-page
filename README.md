# xsB2409 的班级主页

学校里看到的是高度整合过的  
这里我们按照比较标准的网站结构把它拆回来  
各班电教委员有需自取  
我自己知道这代码可能写的很屎山，但至少，他得先跑起来

## 文件（夹）说明

| 文件（夹）名称 |                 内容                 |
| :------------: | :----------------------------------: |
|   index.html   |        最新稳定版本 HTML 文件        |
|  indexv2.html  |  v2-v3 过渡版本的代码，会有很多 BUG  |
|  indexv3.html  | 用到的都整合上了的最新开发版本的代码 |
|  XSB2409.html  |       最终上传到学校官网的版本       |
|      css       |             网页样式文件             |
|    scripts     |                 脚本                 |
|     images     |             占位用的图片             |

## 其他说明

1. 发现 BUG ：你可以自行 fork 文件然后用在官网上，当然，欢迎 pullrequest 回来
2. v2 比较经典，也适合做开发版本，故予以保留
3. 变量名很多调整过的……希望各位海涵
4. 有时候 v3 版本更新导致的 js 变动可能会使得直接加载 js 的 v2 版本产生问题，各位自行调整一下（都做
   电教委员了，肯定还是得会点东西的，对吧？）
5. 需要功能：对不起啊，这个大家可能得自己学了，本人高三了实在没精力搞这堆玩意了……
6. 版权问题：如果侵犯了您的权益，请立即联系我，本人无意对任何人造成任何方面的侵害

## Update Log & Some Incidents

### 2024/9/29（中秋节快乐呀）

上一任电教退休级更新

- 重写天气模块，从 iframe 变成一堆 （找到的） JS ，应该还算好看
- 部分样式重写
- 精简了一部分用不到的 id 和 class
- 倒计时添加新功能，可以实现从 2024 一月首考到 2024 年 6 月高考的自动切换，以及高考后的祝福
- 更换 Bing API ，现在早上应该也能看啦，更加稳定
- README 添加更新日志
- 适应电子班牌渲染，删除页脚列表（人工补的点）
- 补全了 API 信息

### 2022
功能上新
-
- **首考高考倒计时**: 自动计算距离首考和高考的剩余时间
- **Bing每日一图**: 用linker的接口获取Bing搜索每日更新的精美图片
- **金山词霸每日一句**: 展示中英双语的每日励志句子
- **生日提醒**: 自动检查并提醒班级同学的生日
- **天气预报**: 集成第三方天气服务

### 实现

- 纯原生JavaScript实现，不依赖框架（为了能在电子班牌上流畅得加载）
- 响应式设计，适配各种设备屏幕
- 使用Fetch API进行数据获取
- CSS变量实现主题样式统一管理

### 思考

这个项目是最早期的Web开发作品，通过这个项目，我们可以学习：

1. 原生JavaScript的DOM操作和事件处理
2. 使用API获取第三方数据的方法
3. 响应式设计的实现技巧
4. 前端性能优化的基本原则

现在看来代码还有很多可以改进的地方，但它记录了我的成长历程，也是我珍贵的回忆。

### 2021/11/13

比较早的一次更新，64 届运动会的照片

### 2021/10/11

第一个版本上线，非常”精简“（里面掺杂了不知道多少各种奇怪的地方复制过来的代码）
