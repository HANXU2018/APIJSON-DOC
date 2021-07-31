# 关于
> 本小节同步于 [Tencent/APIJSON/README.md文档](https://github.com/Tencent/APIJSON/blob/master/README.md) 后续将迁移到文档系统中来

## 项目简介

[【腾讯犀牛鸟开源人才培养计划】开始啦！加入我们开源共建吧~](https://github.com/Tencent/APIJSON/issues/229)

Tencent is pleased to support the open source community by making APIJSON available.   <br/>
Copyright (C) 2020 THL A29 Limited, a Tencent company.  All rights reserved. <br/>
This source code is licensed under the Apache License Version 2.0 <br/>


<h1 align="center" style="text-align:center;">
  APIJSON
</h1>
 
<p align="center">零代码、热更新、自动化 ORM 库<br />🚀 后端接口和文档零代码，前端(客户端) 定制返回 JSON 的数据和结构</p>

<p align="center" >
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/MySQL"><img src="https://img.shields.io/badge/MySQL-5.7%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/PostgreSQL"><img src="https://img.shields.io/badge/PostgreSQL-9.5%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/SQLServer"><img src="https://img.shields.io/badge/SQLServer-2012%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/Oracle"><img src="https://img.shields.io/badge/Oracle-12C%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/MySQL"><img src="https://img.shields.io/badge/TiDB-2.1%2B-brightgreen.svg?style=flat"></a>
</p>
<p align="center" >
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server"><img src="https://img.shields.io/badge/Java-1.8%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/liaozb/APIJSON.NET"><img src="https://img.shields.io/badge/CSharp-2.1%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/qq547057827/apijson-php"><img src="https://img.shields.io/badge/PHP-7.0%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/kevinaskin/apijson-node"><img src="https://img.shields.io/badge/Node.js-ES6%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/zhangchunlin/uliweb-apijson"><img src="https://img.shields.io/badge/Python-3%2B-brightgreen.svg?style=flat"></a>
</p>
<p align="center" >
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Android"><img src="https://img.shields.io/badge/Android-4.0%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-iOS"><img src="https://img.shields.io/badge/iOS-7%2B-brightgreen.svg?style=flat"></a>
  <a href="https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6%2B-brightgreen.svg?style=flat"></a>
</p>
<p align="center" >
  <a href="https://github.com/Tencent/APIJSON/blob/master/README-English.md">English</a>
  <a href="https://github.com/Tencent/APIJSON/blob/master/Document.md">通用文档</a>
  <a href="https://search.bilibili.com/all?keyword=APIJSON&from_source=webtop_search&spm_id_from=333.999">视频教程</a>
  <a href="http://apijson.cn/api">在线体验</a>
</p>

<p align="center" >
  <img src="https://oscimg.oschina.net/oscnet/up-3299d6e53eb0534703a20e96807727fac63.png" />
</p>

---

<b >导航目录：</b> 项目简介 [上手使用](#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B) [社区生态](#%E6%8A%80%E6%9C%AF%E4%BA%A4%E6%B5%81)  &nbsp;&nbsp;&nbsp;&nbsp;  完整详细的导航目录 [点这里查看](/Navigation.md) <br />


APIJSON 是一种专为 API 而生的 JSON 网络传输协议 以及 基于这套协议实现的 ORM 库。<br />
为 简单的增删改查、复杂的查询、简单的事务操作 提供了完全自动化的万能 API。<br />
能大幅降低开发和沟通成本，简化开发流程，缩短开发周期。<br />
适合中小型前后端分离的项目，尤其是 BaaS、Serverless、互联网创业项目和企业自用项目。<br />

通过万能的 API，前端可以定制任何数据、任何结构。<br />
大部分 HTTP 请求后端再也不用写接口了，更不用写文档了。<br />
前端再也不用和后端沟通接口或文档问题了。再也不会被文档各种错误坑了。<br />
后端再也不用为了兼容旧接口写新版接口和文档了。再也不会被前端随时随地没完没了地烦了。

### 特点功能

#### 对于前端
* 不用再向后端催接口、求文档
* 数据和结构完全定制，要啥有啥
* 看请求知结果，所求即所得
* 可一次获取任何数据、任何结构
* 能去除重复数据，节省流量提高速度

#### 对于后端
* 提供通用接口，大部分 API 不用再写
* 自动生成文档，不用再编写和维护
* 自动校验权限、自动管理版本、自动防 SQL 注入
* 开放 API 无需划分版本，始终保持兼容
* 支持增删改查、复杂查询、跨库连表、远程函数等

<br />

### APIJSON 接口展示
#### Postman 展示 APIJSON
![](https://static.oschina.net/uploads/img/201711/12230359_f7fQ.jpg)
<br/>

#### APIAuto 展示 APIJSON
使用 APIAuto-机器学习接口工具 来管理和测试 HTTP API 可大幅提升接口联调效率<br/>
(注意网页工具界面是 APIAuto，里面的 URL+JSON 才是 APIJSON 的 HTTP API)： <br/>
<br />
<p align="center" >
  <a >APIJSON 多表关联查询、结构自由组合，APIAuto 多个测试账号、一键共享测试用例</a>
</p> 

![](https://oscimg.oschina.net/oscnet/up-bbbec4fc5edc472be127c02a4f3cd8f4ec2.JPEG) 

<br />
<p align="center" >
  <a >APIAuto 自动生成前端(客户端)请求代码 和 Python 测试用例代码，一键下载</a>
</p> 

![](https://oscimg.oschina.net/oscnet/up-637193bbd89b41c3264827786319e842aee.JPEG) 

<br />
<p align="center" >
  <a >APIAuto 自动保存请求记录、自动生成接口文档，可添加常用请求、快捷查看一键恢复</a>
</p> 

![](https://oscimg.oschina.net/oscnet/up-7dcb4ae71bd3892a909e4ffa37ba7c1d92a.JPEG) 

<br />
<p align="center" >
  <a >APIAuto 一键自动接口回归测试，不需要写任何代码(注解、注释等全都不要)</a>
</p> 

![](https://oscimg.oschina.net/oscnet/up-c1ba774f8e7fcc5adcdb05cad5bd414d766.JPEG) 

<br />
<p align="center" >
  <a >一图胜千言 - APIJSON 部分基础功能概览</a>
</p> 

![](https://oscimg.oschina.net/oscnet/up-e21240ef3770326ee6015e052226d0da184.JPEG) 

<br /><br />

### APIJSON App 演示
使用 APIJSON + ZBLibrary 开发的 Android 客户端 Demo (以下 Gif 图看起来比较卡，实际上运行很流畅)：
<br />
![](https://oscimg.oschina.net/oscnet/up-a3f167e593080e8a3fc09c3d5fc09330c98.gif) 
![](https://oscimg.oschina.net/oscnet/up-141abcb5dabc01c890d70c461bd1fdc751f.gif) 
![](https://oscimg.oschina.net/oscnet/up-58aecc2701c2c4ea33e53f246e427773b09.gif)

<br />

### APIJSON 分享演讲
#### APIJSON-零代码接口与文档 ORM 库（国际开源谷 Gitee Meetup）

https://www.bilibili.com/video/BV1Tv411t74v

![image](http://apijson.cn/images/comparison/APIJSON_vs_PreviousWays.jpg)


#### APIJSON 和 APIAuto-零代码开发和测试（QECon 全球软件质量&效能大会）

https://www.bilibili.com/video/BV1yv411p7Y4

<img width="1360" alt="wecom-temp-377bbd0daf5aed716baf7ebcb003d94c" src="https://user-images.githubusercontent.com/5738175/121370207-1b35de00-c96f-11eb-840e-cc2ff2995888.png">


<br />

### 为什么选择 APIJSON？
前后端 关于接口的 开发、文档、联调 等 10 个痛点解析 <br />
https://github.com/Tencent/APIJSON/wiki

* **解决十个痛点** (APIJSON 可帮助用户 提振开发效率、杜绝联调扯皮、规避文档缺陷、节省流量带宽 等)
* **开发提速很大** (CRUD 零代码热更新自动化，APIJSONBoot 对比 SSM、SSH 等保守估计可提速 20 倍以上)
* **腾讯官方开源** (使用 GitHub、Gitee、工蜂 等平台的官方账号开源，微信公众号、腾讯云+社区 等官方公告)
* **社区影响力大** (GitHub 1W+ Star 在 350W Java 项目中排名前 140，远超 FLAG, BAT 等国内外绝大部分开源项目)
* **多样用户案例** (腾讯内部用户包含 互娱、音乐、云与智慧，外部用户包含 500 强上市公司、数千亿资本国企 等)
* **适用场景广泛** (社交聊天、阅读资讯、影音视频、办公学习 等各种 App、网站、公众号、小程序 等非金融类项目)
* **周边生态丰富** (Android, iOS, Web 等各种 Demo、继承 JSON 的海量生态、零代码 接口测试 和 单元测试 工具等)
* **文档视频齐全** (项目介绍、快速上手、安装部署 等后端、前端、客户端的 图文解说、视频教程、代码注释 等)
* **功能丰富强大** (增删改查、分页排序、分组聚合、各种 JOIN、各种子查询、跨库跨表、性能分析 等零代码实现)
* **使用安全简单** (自动增删改查、自动生成文档、自动管理版本、自动控制权限、自动校验参数、自动防SQL注入等)
* **灵活定制业务** (在后端编写 远程函数，可以拿到 session、version、当前 JSON 对象 等，然后自定义处理)
* **高质可靠代码** (代码严谨规范，商业分析软件源伞 Pinpoint 代码扫描报告平均每行代码 Bug 率低至 0.15%)
* **兼容各种项目** (协议不限 HTTP，与其它库无冲突，对各类 Web 框架集成友好且提供 SpringBoot, JFinal 的 Demo)
* **工程轻量小巧** (仅依赖 fastjson，Jar 仅 280KB，Java 文件仅 59 个共 13719 行代码，例如 APIJSONORM 4.3.1)
* **多年持续迭代** (自 2016 年开源至今已连续维护 4 年，累计 2000+ Commits、70+ Releases，不断更新迭代中...)


### 常见问题
#### 1.如何定制业务逻辑？
在后端编写 远程函数，可以拿到 session、version、当前 JSON 对象、参数名称 等，然后对查到的数据自定义处理 <br />
https://github.com/Tencent/APIJSON/issues/101

#### 2.如何控制权限？
在 Access 表配置校验规则，默认不允许访问，需要对 每张表、每种角色、每种操作 做相应的配置，粒度细分到行级 <br />
https://github.com/Tencent/APIJSON/issues/12

#### 3.如何校验参数？
在 Request 表配置校验规则 structure，提供 MUST、TYPE、VERIFY 等通用方法，可通过 远程函数 来完全自定义 <br />
https://github.com/Tencent/APIJSON/wiki#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86

更多常见问题及提问前必看 <br />
https://github.com/Tencent/APIJSON/issues/36
<br />

### 注意事项
请求参数 JSON 中表名、字段名、关键词及对应的值都是大小写敏感、逗号敏感、分号敏感、空格敏感、换行敏感， <br />
大部分情况都不允许空格和换行，表名以大写字母开头，不要想当然，请严格按照 [设计规范](https://github.com/Tencent/APIJSON/blob/master/Document.md#3) 来调用 API
[#181](https://github.com/Tencent/APIJSON/issues/181)
<br />
<br />
<br />
<br />

<b >导航目录：</b> [项目简介](#--apijson) 上手使用 [社区生态](#%E6%8A%80%E6%9C%AF%E4%BA%A4%E6%B5%81)  &nbsp;&nbsp;&nbsp;&nbsp;  完整详细的导航目录 [点这里查看](/Navigation.md) <br />

### 快速上手

#### 1.后端上手
可以跳过这个步骤，直接用APIJSON服务器IP地址 apijson.cn:8080 来测试接口。<br />
见&nbsp; [APIJSON后端上手 - Java](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server)<br />

#### 2.前端上手
可以跳过这个步骤，直接使用 [APIAuto-机器学习HTTP接口工具](https://github.com/TommyLemon/APIAuto) 或 下载客户端App。<br />
见&nbsp; [Android](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Android) &nbsp;或&nbsp; [iOS](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-iOS) &nbsp;或&nbsp; [JavaScript](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-JavaScript)<br />


### 下载客户端 App

仿微信朋友圈动态实战项目<br />
[APIJSONApp.apk](http://files.cnblogs.com/files/tommylemon/APIJSONApp.apk)

测试及自动生成代码工具<br />
[APIJSONTest.apk](http://files.cnblogs.com/files/tommylemon/APIJSONTest.apk)
