# Q&A 常见问题
::: tip
目录
[[toc]]
:::
## 提问技巧

1. 尝试在[历史问题](https://github.com/TommyLemon/APIJSON/issues?q=is%3Aissue+is%3Aclosed)搜索答案。
2. 尝试阅读[通用文档](https://github.com/TommyLemon/APIJSON/blob/master/Document.md)或看[视频教程](http://i.youku.com/apijson)找到答案。
3. 尝试阅读示例代码找到答案。
4. 尝试自己检查或试验以找到答案。
5. 尝试阅读源代码以找到答案。

如果以上都尝试过了请提一个新的issue
参考[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)

## 常见问题列表
### 1.如何定制业务逻辑？
在后端编写 远程函数，可以拿到 session、version、当前 JSON 对象、参数名称 等，然后对查到的数据自定义处理

[issue #101](https://github.com/Tencent/APIJSON/issues/#101)

### 2.如何控制权限？
在 Access 表配置校验规则，默认不允许访问，需要对 每张表、每种角色、每种操作 做相应的配置，粒度细分到行级

[issue #12](https://github.com/Tencent/APIJSON/issues/#12)
### 3.如何校验参数？
在 Request 表配置校验规则 structure，提供 MUST、TYPE、VERIFY 等通用方法，可通过 远程函数 来完全自定义

[WIKI](https://github.com/Tencent/APIJSON/wiki#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86)

### 4.如何生成文档？
用 APIAuto(https://github.com/TommyLemon/APIAuto)
[issue #85](https://github.com/Tencent/APIJSON/issues/#85)
### 5.如何 OR 连接不同 key 对应的条件？
用对象关键词 @combine，例如 "@combine":"name~,tag~"

[issue #107](https://github.com/Tencent/APIJSON/issues/#107)
###  6.登录后 增删改 报错未登录？
如果是自己的网页、小程序、客户端这样报错，一般是因为没有存取 Cookie，需要在登录成功后保存 Cookie 并在调其它接口时带上

https://gitee.com/Tencent/APIJSON/issues/I1JTYH

如果使用网页工具测试报错，则很可能是 Chrome 80+ 强制 same-site Cookie 的策略导致，可以改用 Postman 或修改 Chrome 设置
[issue #166](https://github.com/Tencent/APIJSON/issues/#166)

### 7.和 GraphQL 的区别
GraphQL 是用来聚合和过滤数据的网关，不提供增删改查功能；APIJSON 提供万能的增删改查 API，零代码实现各种简单的和复杂的需求

[issue #205](https://github.com/Tencent/APIJSON/issues/#205)
### 8.和 Swagger, YApi 等接口工具的区别
APIJSON 不是文档工具、也不是测试工具，配套的 APIAuto 才是 HTTP 接口 的文档/测试工具

[issue #27](https://github.com/Tencent/APIJSON/issues/#27)
### 9.和 Hiberante, JPA, JOOQ, Prisma, Sequelize, Linq 等其它 ORM 库的区别
只有 APIJSON 能做到不写任何代码，也不生成任何代码，直接零代码做到各种增删改查、各种结构嵌套、各种外键关联、各种条件与或非组合、各种 JOIN、各种子查询 等几乎所有 SQL 的功能，其它 ORM 库如果有做到零代码实现 APIJSON 1/10 功能 的，请直接 New issue 讨论。
[issue #29](https://github.com/Tencent/APIJSON/issues/#29)
### 10.APIJSON 相比其它框架/库的优势？
APIJSONBoot 对比 SSM/SSH 等开发效率可提升 20 倍以上
[issue #132](https://github.com/Tencent/APIJSON/issues/#132)
### 11.如何使用自增主键？
DemoSQLConfig static 代码块中重写 SIMPLE_CALLBACK 的 newId 方法，return null 即可
[issue #186](https://github.com/Tencent/APIJSON/issues/#186)
### 12.如何自定义主键名称？
DemoSQLConfig static 代码块中重写 SIMPLE_CALLBACK 的 getIdKey/getUserIdKey 方法
https://github.com/APIJSON/APIJSON-Demo/blob/master/APIJSON-Java-Server/APIJSONBoot/src/main/java/apijson/demo/DemoSQLConfig.java

### 13.如何实现多数据源？
可以在 DemoSQLConfig 中根据 database, schema, table 或者其它方式来区分，给 getDBUri 返回不同的 uri
[issue #148](https://github.com/Tencent/APIJSON/issues/#148)
### 14.自己已经有一套鉴权系统了，不想用 APIJSON 的这套怎么办？
DemoParser 重写 Parser 中的 isNeedVerifyLogin, isNeedVerifyRole, isNeedVerifyContent 来指定是否开关某个方面的校验
https://github.com/Tencent/APIJSON/blob/22ed7cc9e801f35158e85cf6adfa5c1243eb09c9/APIJSONORM/src/main/java/apijson/orm/AbstractParser.java
[issue #12](https://github.com/Tencent/APIJSON/issues/#12)
### 15.如何自动插入 create_time, update_time, creator_id 之类的字段？
可以用 远程函数 + 引用赋值 来针对某个特定业务(表)来实现。如果是通用字段，还可以在重写 DemoObjectParser 重写 newSQLConfig，把从 Controller 经过 DemoParser 传过来的 gmt_create, create_time, creator_id 等 put 进去。具体见

[issue #196](https://github.com/Tencent/APIJSON/issues/#196)
### 16.如何集成到自己现有的项目？
在你用的框架类似 Demo 新增几个接口调用 DemoParser 即可,
APIJSONController 只是简单封装，可以不继承，
例如 JFinal 版 Demo 中的 DemoController 就没有继承它，而是继承 JFinal 的 Controller。
[issue ##201](https://github.com/Tencent/APIJSON/issues/##201)
### 17.Demo 提供的表 SQL 文件很多，如果集成到自己项目，哪些表是必须的？
Function(注册远程函数), Request(配置参数校验规则), Access(配置权限校验规则)
https://github.com/APIJSON/APIJSON-Demo/tree/master/MySQL/single
[issue #101](https://github.com/Tencent/APIJSON/issues/#101)
### 18.如何一次性查全部数据/如何一次性查所有表记录？
不支持，必须有最大数量限制前端传参 count 的值（count: 0 取最大值，不传则为默认值 Parser.getDefaultQueryCount），
可在 DemoParser 重写 Parser.getMaxQueryCount。
另外 query: 2 是指同时查数据和数量。
https://github.com/Tencent/APIJSON/blob/master/Document.md#3.2

其它问题见 Closed Issues
https://github.com/Tencent/APIJSON/issues?q=is%3Aissue+is%3Aclosed